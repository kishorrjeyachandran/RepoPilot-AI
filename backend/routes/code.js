import express from "express";
import { GoogleGenAI } from "@google/genai";

const router = express.Router();

router.post("/analyze", async (req, res) => {
  try {
    const {
      filePath,
      codeContent,
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
You are an expert software architect.

Analyze this source code.

FILE:
${filePath}

CODE:
${codeContent}

Provide:
1. Purpose
2. Architecture
3. Logic Flow
4. Code Quality
5. Improvements

Keep response under 150 words.
    `;

    //
    // GENERATE ANALYSIS
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
      analysis:
        response.text,
    });
  } catch (error) {
    console.log(
      "CODE ANALYSIS ERROR:"
    );

    console.log(error);

    res.status(500).json({
      message:
        "Failed to analyze code",
    });
  }
});

export default router;