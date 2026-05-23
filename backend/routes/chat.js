import express from "express";
import OpenAI from "openai";

import RepositorySession from "../models/RepositorySession.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  try {
    const {
      question,
      repoData,
    } = req.body;

    // Find existing session
    const session =
      await RepositorySession.findById(
        repoData.sessionId
      );

    // Previous chat context
    const previousMessages =
      session?.chatHistory?.map((msg) => ({
        role: msg.role,
        content: msg.content,
      })) || [];

    // AI Completion
    const completion =
      await openai.chat.completions.create({
        model: "gpt-4.1-mini",

        messages: [
          {
            role: "system",
            content:
              "You are an expert AI software architect helping developers understand repositories.",
          },

          {
            role: "user",
            content: `
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
            `,
          },

          // Previous conversation memory
          ...previousMessages,

          // Current question
          {
            role: "user",
            content: question,
          },
        ],
      });

    const answer =
      completion.choices[0].message.content;

    // Save chat history
    await RepositorySession.findByIdAndUpdate(
      repoData.sessionId,
      {
        $push: {
          chatHistory: [
            {
              role: "user",
              content: question,
            },

            {
              role: "assistant",
              content: answer,
            },
          ],
        },
      }
    );

    // Response
    res.json({
      answer,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Failed to generate response",
    });
  }
});

export default router;