import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const {
      question,
      repoData,
    } = req.body;

    //
    // GEMINI
    //
    const ai =
      new GoogleGenAI({
        apiKey:
          process.env.GEMINI_API_KEY,
      });

    //
    // PROMPT
    //
    const prompt = `
You are an expert AI software architect helping developers understand repositories.

Repository Name:
${repoData.name}

Description:
${repoData.description}

Languages:
${repoData.languages?.join(", ")}

Frameworks:
${repoData.frameworks?.join(", ")}

Dependencies:
${repoData.dependencies?.join(", ")}

AI Analysis:
${repoData.aiAnalysis}

Question:
${question}

Answer clearly and concisely.
Keep response under 150 words.
    `;

    //
    // GENERATE RESPONSE
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
    res.json({
      answer: response.text,
    });
  } catch (error) {
    console.log(
      "CHAT ERROR:"
    );

    console.log(error);

    res.status(500).json({
      message:
        "Failed to generate response",
    });
  }
});

export default router;