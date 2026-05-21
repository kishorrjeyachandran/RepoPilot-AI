import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AnalyzeInput = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!repoUrl.trim()) return;

    setLoading(true);

    setTimeout(() => {
      navigate("/dashboard", {
        state: {
          repoUrl,
        },
      });
    }, 1800);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAnalyze();
    }
  };

  return (
    <motion.div
      layout
      className="mt-14 flex max-w-[900px] items-center border border-white/5 bg-[#080808]"
    >
      <input
        type="text"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Paste GitHub repository URL..."
        className="mono flex-1 bg-transparent px-8 py-6 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-700"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading}
        className="mono relative flex h-full min-w-[190px] items-center justify-center overflow-hidden border-l border-white/5 bg-[#f5d90a] px-10 py-6 text-xs uppercase tracking-[0.22em] text-black transition duration-300 hover:bg-white disabled:cursor-not-allowed"
      >
        <motion.div
          animate={{
            opacity: loading ? 0 : 1,
            y: loading ? -10 : 0,
          }}
          className="absolute"
        >
          Analyze
        </motion.div>

        <motion.div
          animate={{
            opacity: loading ? 1 : 0,
            y: loading ? 0 : 10,
          }}
          className="absolute"
        >
          Processing...
        </motion.div>
      </button>
    </motion.div>
  );
};

export default AnalyzeInput;