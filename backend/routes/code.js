import express from "express";
import OpenAI from "openai";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const {
      filePath,
      codeContent,
    } = req.body;

    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an expert senior software engineer explaining codebases.",
          },

          {
            role: "user",
            content: `
File:
${filePath}

Code:
${codeContent}

Analyze this code and explain:
1. Purpose
2. Architecture role
3. Important logic
4. Potential improvements
5. Complexity level
            `,
          },
        ],
      });

    res.json({
      analysis:
        completion.choices[0].message.content,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to analyze code",
    });
  }
});

export default router;