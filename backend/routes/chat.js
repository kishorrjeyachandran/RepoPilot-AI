import express from "express";
import {
  chatWithFallback,
} from "../utils/aiManager.js";
import {
  generateStaticResponse,
} from "../utils/staticEngine.js";

const router = express.Router();

/**
 * Chat endpoint - supports conversational interactions
 * Falls back to static responses if AI unavailable
 */
router.post("/message", async (req, res) => {
  try {
    const {
      question,
      repoData,
      fileTree = [],
      readme = "",
    } = req.body;

    if (!question || !repoData) {
      return res.status(400).json({
        error: "Question and repoData required",
      });
    }

    //
    // GET RESPONSE (with fallback)
    //
    const response =
      await chatWithFallback(
        question,
        repoData,
        repoData.frameworks || [],
        repoData.dependencies || [],
        fileTree,
        readme
      );

    //
    // RETURN RESPONSE
    //
    res.json({
      type: response.type,
      answer: response.answer,
      isAI: response.type === "ai",
    });
  } catch (error) {
    console.error(
      "Chat error:",
      error
    );

    // Ultimate fallback - static response
    res.json({
      type: "static",
      answer:
        "Unable to process question. Try asking about the tech stack or architecture.",
      isAI: false,
    });
  }
});

/**
 * Get suggested prompts for a repository
 */
router.post(
  "/suggested-prompts",
  async (req, res) => {
    try {
      const { repoData } = req.body;

      const prompts = [
        {
          text: "Explain project architecture",
          icon: "GitBranch",
        },
        {
          text: "What frameworks are used?",
          icon: "Layers",
        },
        {
          text: "How does authentication work?",
          icon: "Lock",
        },
        {
          text: "Show important files",
          icon: "FileText",
        },
        {
          text: "Explain folder structure",
          icon: "FolderOpen",
        },
        {
          text: "What's the tech stack?",
          icon: "Code",
        },
      ];

      res.json({
        prompts,
      });
    } catch (error) {
      console.error(
        "Prompts error:",
        error
      );

      res.status(500).json({
        error: "Failed to get prompts",
      });
    }
  }
);

export default router;