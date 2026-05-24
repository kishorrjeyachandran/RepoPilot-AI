// src/components/AnalyzeInput.jsx

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  ArrowRight,
  GitBranch,
} from "lucide-react";

import { motion } from "framer-motion";

import AnalysisLoader from "./AnalysisLoader";

const AnalyzeInput = () => {
  const navigate = useNavigate();

  const [repoUrl, setRepoUrl] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [currentStep, setCurrentStep] =
    useState(0);

  //
  // ANALYZE
  //
  const handleAnalyze = async () => {
    if (!repoUrl.trim()) return;

    try {
      setError("");

      setLoading(true);

      //
      // STREAMING FEEL
      //
      let step = 0;

      const interval = setInterval(() => {
        step++;

        setCurrentStep(step);

        if (step >= 7) {
          clearInterval(interval);
        }
      }, 900);

      //
      // API CALL
      //
      const res = await fetch(
        "http://localhost:5000/api/github/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            repoUrl,
          }),
        }
      );

      const data = await res.json();

      //
      // ERROR
      //
      if (!res.ok) {
        clearInterval(interval);

        setLoading(false);

        return setError(
          data.message ||
            "Failed to analyze repository"
        );
      }

      //
      // SUCCESS
      //
      clearInterval(interval);

      setLoading(false);

      navigate("/dashboard", {
        state: {
          repoData: data,
        },
      });
    } catch (error) {
      console.log(error);

      setLoading(false);

      setError(
        "Something went wrong."
      );
    }
  };

  return (
    <section className="w-full">
      {/* INPUT CARD */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="border border-white/5 bg-[#080808]"
      >
        {/* HEADER */}
        <div className="border-b border-white/5 px-6 py-5 md:px-8">
          <div className="flex items-center justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              AI Repository Analysis
            </p>

            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-[#f5d90a]" />

              <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                Engine Online
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6 md:p-8">
          {/* TITLE */}
          <div className="max-w-3xl">
            <h1 className="text-4xl font-medium tracking-tight text-white md:text-6xl">
              Analyze repositories
              intelligently.
            </h1>

            <p className="mt-5 max-w-2xl leading-relaxed text-zinc-500">
              AI-powered repository
              intelligence platform for
              modern developers.
              Analyze architecture,
              dependencies, code quality,
              metrics, and engineering
              structure instantly.
            </p>
          </div>

          {/* INPUT */}
          <div className="mt-12">
            <div className="flex flex-col gap-4 xl:flex-row">
              {/* INPUT FIELD */}
              <div className="relative flex-1">
                <GitBranch
  size={18}
  className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-700"
/>

                <input
                  type="text"
                  value={repoUrl}
                  onChange={(e) =>
                    setRepoUrl(
                      e.target.value
                    )
                  }
                  placeholder="https://github.com/owner/repository"
                  className="mono h-[64px] w-full border border-white/5 bg-black pl-14 pr-5 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-700 focus:border-[#f5d90a]/30"
                />
              </div>

              {/* BUTTON */}
              <button
                onClick={handleAnalyze}
                disabled={loading}
                className="group flex h-[64px] items-center justify-center gap-3 bg-[#f5d90a] px-8 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
              >
                <span className="mono text-xs uppercase tracking-[0.18em] text-black">
                  {loading
                    ? "Analyzing"
                    : "Analyze Repository"}
                </span>

                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </button>
            </div>

            {/* ERROR */}
            {error && (
              <div className="mt-5 border border-red-500/10 bg-red-500/5 px-5 py-4">
                <p className="mono text-xs uppercase tracking-[0.18em] text-red-400">
                  {error}
                </p>
              </div>
            )}
          </div>

          {/* QUICK EXAMPLES */}
          {!loading && (
            <div className="mt-10">
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                Example Repositories
              </p>

              <div className="flex flex-wrap gap-3">
                {[
                  "https://github.com/facebook/react",
                  "https://github.com/vercel/next.js",
                  "https://github.com/motiondivision/motion",
                  "https://github.com/tailwindlabs/tailwindcss",
                ].map((example) => (
                  <button
                    key={example}
                    onClick={() =>
                      setRepoUrl(
                        example
                      )
                    }
                    className="mono border border-white/5 bg-black px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition hover:border-[#f5d90a]/20 hover:text-white"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>

      {/* ANALYSIS LOADER */}
      {loading && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mt-8"
        >
          <AnalysisLoader
            currentStep={
              currentStep
            }
          />
        </motion.div>
      )}
    </section>
  );
};

export default AnalyzeInput;