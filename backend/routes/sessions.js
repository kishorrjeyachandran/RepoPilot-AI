import express from "express";

import RepositorySession from "../models/RepositorySession.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const sessions =
      await RepositorySession.find()
        .sort({
          createdAt: -1,
        })
        .limit(20);

    res.json(sessions);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch sessions",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const session =
      await RepositorySession.findById(
        req.params.id
      );

    res.json(session);
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch session",
    });
  }
});

export default router;