import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "RepoPilot AI Backend Running 🚀",
  });
});

const PORT = process.env.PORT || 5000;
app.use("/api/github", githubRoutes);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});