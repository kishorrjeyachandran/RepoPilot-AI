import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/content", async (req, res) => {
  try {
    const {
      repoUrl,
      filePath,
    } = req.body;

    const parts = repoUrl
      .replace("https://github.com/", "")
      .split("/");

    const owner = parts[0];
    const repo = parts[1];

    const fileRes = await axios.get(
      `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`
    );

    res.json({
      content: fileRes.data,
    });
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message:
        "Failed to fetch file",
    });
  }
});

export default router;