import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import githubRoutes from "./routes/github.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/github", githubRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});