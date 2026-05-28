import express from "express";
import dotenv from "dotenv";
dotenv.config();
import cors from "cors";
import connectDB from "./config/db.js";
import codeRoutes from "./routes/code.js";
import githubRoutes from "./routes/github.js";
import chatRoutes from "./routes/chat.js";
import reportRoutes from "./routes/report.js";
import sessionRoutes from "./routes/sessions.js";
import fileRoutes from "./routes/files.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/github", githubRoutes);

app.use("/api/chat", chatRoutes);

app.use("/api/report", reportRoutes);

app.use("/api/code", codeRoutes);

app.use("/api/sessions", sessionRoutes);

app.use("/api/files", fileRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});