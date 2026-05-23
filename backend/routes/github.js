import express from "express";
import axios from "axios";
import OpenAI from "openai";
import RepositorySession from "../models/RepositorySession.js";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const { repoUrl } = req.body;

    // Parse URL
    const parts = repoUrl
      .replace("https://github.com/", "")
      .split("/");

    const owner = parts[0];
    const repo = parts[1];

    // Repository Info
    const repoRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`
    );

    // Languages
    const langRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/languages`
    );

    // README
    let readmeText = "";

    try {
      const readmeRes = await axios.get(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
      );

      readmeText = readmeRes.data.slice(0, 4000);
    } catch {
      readmeText = "README not found.";
    }

    // PACKAGE.JSON
    let packageJson = {};

    try {
      const packageRes = await axios.get(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/package.json`
      );

      packageJson = packageRes.data;
    } catch {
      packageJson = {};
    }

    // Dependencies
    const dependencies = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {}),
    };

    const dependencyList = Object.keys(
      dependencies
    ).slice(0, 40);

    // Framework Detection
    const detectedFrameworks = [];

    if (dependencies.react)
      detectedFrameworks.push("React");

    if (dependencies.next)
      detectedFrameworks.push("Next.js");

    if (dependencies.vue)
      detectedFrameworks.push("Vue");

    if (dependencies.express)
      detectedFrameworks.push("Express");

    if (dependencies.tailwindcss)
      detectedFrameworks.push("Tailwind");

    if (dependencies.mongodb)
      detectedFrameworks.push("MongoDB");

    if (dependencies.typescript)
      detectedFrameworks.push("TypeScript");

    // File Tree
    let fileTree = [];

    try {
      const treeRes = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/main?recursive=1`
      );

      fileTree = treeRes.data.tree
        .slice(0, 80)
        .map((item) => ({
          path: item.path,
          type: item.type,
        }));
    } catch {
      fileTree = [];
    }

    // AI Analysis
    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an expert software architect analyzing GitHub repositories.",
          },

          {
            role: "user",
            content: `
Repository Name:
${repoRes.data.name}

Description:
${repoRes.data.description}

Languages:
${Object.keys(langRes.data).join(", ")}

Frameworks:
${detectedFrameworks.join(", ")}

Dependencies:
${dependencyList.join(", ")}

README:
${readmeText}

Analyze this repository and provide:
1. Project Summary
2. Architecture Explanation
3. Complexity Level
4. Best Practices
5. Improvement Suggestions
            `,
          },
        ],
      });

    const aiAnalysis =
      completion.choices[0].message.content;

      const session =
  await RepositorySession.create({
    repoName: repoRes.data.name,

    repoUrl,

    repoData: {
      name: repoRes.data.name,
      description: repoRes.data.description,
      stars: repoRes.data.stargazers_count,
      forks: repoRes.data.forks_count,
      language: repoRes.data.language,
      owner: repoRes.data.owner.login,

      languages: Object.keys(langRes.data),

      frameworks: detectedFrameworks,

      dependencies: dependencyList,

      fileTree,

      aiAnalysis,
    },

    chatHistory: [],
  });

    // Response
    res.json({
      name: repoRes.data.name,
      description: repoRes.data.description,
      stars: repoRes.data.stargazers_count,
      forks: repoRes.data.forks_count,
      language: repoRes.data.language,
      owner: repoRes.data.owner.login,

      languages: Object.keys(langRes.data),

      frameworks: detectedFrameworks,

      dependencies: dependencyList,

      fileTree,

      repoUrl,

      sessionId: session._id,

      aiAnalysis,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to analyze repository",
    });
  }
});

export default router;