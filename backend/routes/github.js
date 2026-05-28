// backend/routes/github.js

import express from "express";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    //
    // REPOSITORY URL
    //
    const { repoUrl } = req.body;

    if (!repoUrl) {
      return res.status(400).json({
        message:
          "Repository URL is required",
      });
    }

    //
    // PARSE GITHUB URL
    //
    const cleaned = repoUrl
      .replace(
        "https://github.com/",
        ""
      )
      .replace(".git", "");

    const parts = cleaned.split("/");

    const owner = parts[0];
    const repo = parts[1];

    //
    // GITHUB HEADERS
    //
    const headers = {};

    if (process.env.GITHUB_TOKEN) {
      headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    //
    // REPOSITORY DATA
    //
    const repoRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}`,
      { headers }
    );

    const repoData =
      repoRes.data;

    //
    // LANGUAGES
    //
    const langRes = await axios.get(
      `https://api.github.com/repos/${owner}/${repo}/languages`,
      { headers }
    );

    const languages = Object.keys(
      langRes.data || {}
    );

    //
    // FILE TREE
    //
    let fileTree = [];

    try {
      const treeRes = await axios.get(
        `https://api.github.com/repos/${owner}/${repo}/git/trees/HEAD?recursive=1`,
        { headers }
      );

      fileTree =
        treeRes.data?.tree?.map(
          (item) => ({
            path: item.path,
            type: item.type,
          })
        ) || [];

      //
      // LIMIT FILES
      //
      fileTree =
        fileTree.slice(0, 200);
    } catch (treeError) {
      console.log(
        "TREE ERROR:"
      );

      console.log(
        treeError.message
      );
    }

    //
    // README
    //
    let readmeText = "";

    try {
      const readmeRes = await axios.get(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/README.md`
      );

      readmeText =
        typeof readmeRes.data ===
        "string"
          ? readmeRes.data.slice(
              0,
              1000
            )
          : "";
    } catch {
      try {
        const readmeRes =
          await axios.get(
            `https://raw.githubusercontent.com/${owner}/${repo}/master/README.md`
          );

        readmeText =
          typeof readmeRes.data ===
          "string"
            ? readmeRes.data.slice(
                0,
                1000
              )
            : "";
      } catch {
        readmeText =
          "README not found.";
      }
    }

    //
    // PACKAGE.JSON
    //
    let packageJson = {};

    try {
      const packageRes = await axios.get(
        `https://raw.githubusercontent.com/${owner}/${repo}/main/package.json`
      );

      packageJson =
        typeof packageRes.data ===
        "string"
          ? JSON.parse(
              packageRes.data
            )
          : packageRes.data;
    } catch {
      try {
        const packageRes =
          await axios.get(
            `https://raw.githubusercontent.com/${owner}/${repo}/master/package.json`
          );

        packageJson =
          typeof packageRes.data ===
          "string"
            ? JSON.parse(
                packageRes.data
              )
            : packageRes.data;
      } catch {
        packageJson = {};
      }
    }

    //
    // DEPENDENCIES
    //
    const dependencies = {
      ...(packageJson.dependencies ||
        {}),
      ...(packageJson.devDependencies ||
        {}),
    };

    const dependencyList = Object.keys(
      dependencies
    ).slice(0, 15);

    //
    // FRAMEWORK DETECTION
    //
    const frameworks = [];

    if (dependencies.react)
      frameworks.push("React");

    if (dependencies.next)
      frameworks.push("Next.js");

    if (dependencies.vue)
      frameworks.push("Vue");

    if (dependencies.angular)
      frameworks.push("Angular");

    if (dependencies.express)
      frameworks.push("Express");

    if (dependencies.mongodb)
      frameworks.push(
        "MongoDB"
      );

    if (dependencies.mongoose)
      frameworks.push(
        "Mongoose"
      );

    if (dependencies.tailwindcss)
      frameworks.push(
        "Tailwind"
      );

    if (dependencies.typescript)
      frameworks.push(
        "TypeScript"
      );

    if (dependencies.vite)
      frameworks.push("Vite");

    //
    // METRICS
    //
    const metrics = {
      totalFiles:
        fileTree.length,

      totalDependencies:
        dependencyList.length,

      architectureScore:
        Math.round(
          Math.min(
            95,
            60 +
              frameworks.length *
                5 +
              dependencyList.length *
                0.4
          )
        ),

      maintainabilityScore:
        Math.round(
          Math.min(
            95,
            70 +
              frameworks.length *
                3
          )
        ),

      complexityScore:
        Math.round(
          Math.min(
            95,
            40 +
              fileTree.length *
                0.3 +
              dependencyList.length *
                0.5
          )
        ),
    };

    //
    // GEMINI ANALYSIS
    //
    let aiAnalysis =
      "AI analysis unavailable.";

    try {
      console.log(
        "GEMINI STARTING"
      );

      console.log(
        "API KEY EXISTS:",
        !!process.env
          .GEMINI_API_KEY
      );

      //
      // GEMINI CLIENT
      //
      const ai =
        new GoogleGenAI({
          apiKey:
            process.env
              .GEMINI_API_KEY,
        });

      //
      // SHORT PROMPT
      //
      const prompt = `
Repository:
${repoData.full_name}

Description:
${repoData.description}

Languages:
${languages.join(", ")}

Frameworks:
${frameworks.join(", ")}

Dependencies:
${dependencyList.join(", ")}

Give:
- architecture overview
- scalability
- code quality
- improvements

Keep under 80 words.
      `;

      //
      // GENERATE CONTENT
      //
      const response =
        await ai.models.generateContent(
          {
            model:
              "gemini-2.0-flash",

            contents: prompt,
          }
        );

      //
      // RESPONSE
      //
      aiAnalysis =
        response.text;

      console.log(
        "GEMINI SUCCESS"
      );
    } catch (geminiError) {
      console.log(
        "GEMINI ERROR:"
      );

      console.log(
        geminiError
      );

      //
      // QUOTA ERROR
      //
      if (
        geminiError.status ===
        429
      ) {
        aiAnalysis =
          "AI quota exceeded. Try again shortly.";
      } else {
        aiAnalysis =
          "AI analysis unavailable.";
      }
    }

    //
    // FINAL RESPONSE
    //
    res.json({
      repoUrl,

      name: repoData.name,

      description:
        repoData.description,

      stars:
        repoData.stargazers_count,

      forks:
        repoData.forks_count,

      language:
        repoData.language,

      owner:
        repoData.owner.login,

      languages,

      frameworks,

      dependencies:
        dependencyList,

      fileTree,

      metrics,

      aiAnalysis,
    });
  } catch (error) {
    console.log(
      "ANALYZE ERROR:"
    );

    console.log(error);

    res.status(500).json({
      message:
        "Failed to analyze repository",
    });
  }
});

export default router;