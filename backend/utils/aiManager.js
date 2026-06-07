// backend/utils/aiManager.js
// Handles AI calls with graceful fallback

import { GoogleGenAI } from "@google/genai";
import {
  generateStaticResponse,
} from "./staticEngine.js";

/**
 * Call Gemini with fallback
 */
export async function callAI(
  prompt,
  repoData,
  frameworks,
  dependencies
) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      console.log(
        "No Gemini API key - using static fallback"
      );
      return null; // Signal to use static
    }

    const ai = new GoogleGenAI({
      apiKey:
        process.env.GEMINI_API_KEY,
    });

    const response =
      await ai.models.generateContent(
        {
          model:
            "gemini-2.0-flash-001",

          contents: prompt,
        }
      );

    return response.text;
  } catch (error) {
    console.error(
      "Gemini API error:",
      error.message
    );
    return null; // Fallback to static
  }
}

/**
 * Enhanced chat response with AI fallback
 */
export async function chatWithFallback(
  userQuestion,
  repoData,
  frameworks,
  dependencies,
  fileTree,
  readme
) {
  try {
    // Build context
    const context = `
Repository: ${repoData.name}
Description: ${repoData.description || "No description"}
Languages: ${repoData.languages.join(", ") || "Unknown"}
Frameworks: ${frameworks.join(", ") || "Unknown"}
Dependencies: ${dependencies.slice(0, 10).join(", ")}
README Preview: ${readme.slice(0, 500)}
`;

    // Try AI first
    const prompt = `You are an expert software architect helping developers understand GitHub repositories.

${context}

User Question: ${userQuestion}

Provide a clear, concise answer (max 300 words). Use markdown if needed.`;

    const aiResponse = await callAI(
      prompt,
      repoData,
      frameworks,
      dependencies
    );

    if (aiResponse) {
      return {
        type: "ai",
        answer: aiResponse,
      };
    }

    // Fallback to static if AI unavailable
    console.log(
      "Using static fallback response"
    );
    return generateStaticResponse(
      userQuestion,
      repoData,
      frameworks,
      dependencies
    );
  } catch (error) {
    console.error("Chat error:", error);

    // Ultimate fallback
    return generateStaticResponse(
      userQuestion,
      repoData,
      frameworks,
      dependencies
    );
  }
}

/**
 * Get repository analysis (lightweight)
 */
export async function getRepositoryAnalysis(
  repoData,
  frameworks,
  dependencies,
  languages
) {
  try {
    if (
      !process.env.GEMINI_API_KEY
    ) {
      // Return static analysis
      return {
        type: "static",
        summary: `${repoData.name} is a ${languages[0] || "multi-language"} project using ${frameworks.join(", ") || "various technologies"}.`,
      };
    }

    const prompt = `Analyze this GitHub repository briefly:

Repository: ${repoData.name}
Description: ${repoData.description}
Languages: ${languages.join(", ")}
Frameworks: ${frameworks.join(", ")}
Key Dependencies: ${dependencies.slice(0, 8).join(", ")}

Provide a 2-3 sentence analysis. Be concise.`;

    const ai = new GoogleGenAI({
      apiKey:
        process.env.GEMINI_API_KEY,
    });

    const response =
      await ai.models.generateContent(
        {
          model:
            "gemini-2.0-flash-001",

          contents: prompt,
        }
      );

    return {
      type: "ai",
      summary: response.text,
    };
  } catch (error) {
    console.error(
      "Analysis generation failed:",
      error.message
    );

    return {
      type: "static",
      summary: `${repoData.name} is a ${frameworks.join(", ") || "multi-framework"} project.`,
    };
  }
}
