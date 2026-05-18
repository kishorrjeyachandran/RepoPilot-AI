import express from "express";
import { analyzeRepository } from "../controllers/githubController.js";

const router = express.Router();

router.post("/analyze", analyzeRepository);

export default router;