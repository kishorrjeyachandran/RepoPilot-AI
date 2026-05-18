import { motion } from "framer-motion";
import { useState } from "react";
import AnalysisLoader from "../components/AnalysisLoader";
import AIWorkflow from "../components/AIWorkflow";
import { useNavigate } from "react-router-dom";
import { analyzeRepository } from "../services/githubService";
import { useAnalysis } from "../context/AnalysisContext";

const HeroSection = () => {
  const [loading, setLoading] = useState(false);
  const { setAnalysisData } = useAnalysis();
  const [repoUrl, setRepoUrl] = useState("");
  const navigate = useNavigate();
  const handleAnalyze = async () => {
  if (!repoUrl.trim()) return;

  try {
    setLoading(true);

    const data = await analyzeRepository(repoUrl);

    setAnalysisData(data.data);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3000);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <>
  {loading && <AnalysisLoader />}
    <section className="relative flex min-h-screen items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1f29371a,transparent_70%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#30363d] bg-[#161b22] px-4 py-2 text-sm text-[#8b949e]">
          <span className="h-2 w-2 rounded-full bg-green-500" />
          AI-Powered Repository Intelligence
        </div>

        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Navigate Any
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}GitHub Repository{" "}
          </span>
          with AI
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#8b949e] md:text-xl">
          RepoPilot AI analyzes public repositories and generates
          intelligent explanations, architecture insights, README
          documentation, and production-level improvements instantly.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col gap-4 rounded-2xl border border-[#30363d] bg-[#161b22]/80 p-4 backdrop-blur-xl md:flex-row">
          <input
  type="text"
  placeholder="Paste GitHub repository URL..."
  value={repoUrl}
  onChange={(e) => setRepoUrl(e.target.value)}
  className="flex-1 rounded-xl border border-[#30363d] bg-[#0d1117] px-5 py-4 text-white outline-none transition focus:border-blue-500"
/>
          
          <button
  onClick={handleAnalyze}
  className="rounded-xl bg-blue-600 px-6 py-4 font-medium transition hover:bg-blue-500"
>
  Analyze Repository
</button>
        </div>
        <AIWorkflow />
      </motion.div>
    </section>
    </>
  );
};

export default HeroSection;