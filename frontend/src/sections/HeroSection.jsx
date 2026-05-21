// src/sections/HeroSection.jsx

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-gradient relative flex min-h-screen items-center px-6">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-zinc-500">
            AI Repository Intelligence
          </p>

          <h1 className="max-w-5xl text-6xl font-medium leading-[0.95] tracking-tight text-white md:text-8xl">
            Understand repositories
            <br />
            with clarity.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-500 md:text-xl">
            RepoPilot AI transforms GitHub repositories into
            structured architecture insights, intelligent explanations,
            and production-level analysis.
          </p>

          {/* Input */}
          <div className="mt-14 flex max-w-3xl flex-col gap-4 rounded-[32px] border border-white/5 bg-white/[0.03] p-4 backdrop-blur-xl md:flex-row">
            <input
              type="text"
              placeholder="Paste GitHub repository URL..."
              className="flex-1 bg-transparent px-5 py-5 text-lg text-white outline-none placeholder:text-zinc-600"
            />

            <button className="flex items-center justify-center gap-2 rounded-[24px] bg-white px-8 py-5 text-sm font-medium text-black transition hover:opacity-90">
              Analyze Repository
              <ArrowRight size={18} />
            </button>
          </div>

          {/* Minimal Preview */}
          <div className="mt-24 grid gap-5 md:grid-cols-3">
            {[
              "Architecture Understanding",
              "Repository Intelligence",
              "AI Code Explanations",
            ].map((item) => (
              <div
                key={item}
                className="surface surface-hover rounded-[32px] p-8"
              >
                <div className="mb-10 h-[1px] w-12 bg-white/10" />

                <h3 className="text-xl font-medium text-white">
                  {item}
                </h3>

                <p className="mt-4 leading-relaxed text-zinc-500">
                  Advanced AI-powered repository analysis designed
                  for modern developers and teams.
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;