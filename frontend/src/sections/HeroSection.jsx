// src/sections/HeroSection.jsx

import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] px-8">
      {/* Grid Background */}
      <div className="grid-bg absolute inset-0 opacity-[0.025]" />

      {/* Ambient Glow */}
      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.015] blur-[120px]" />

      <div className="relative mx-auto flex min-h-screen max-w-[1600px] flex-col">
        {/* Top Label */}
        <div className="mono absolute left-0 right-0 top-16 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-zinc-700">
          <p>// AI REPOSITORY WORKSPACE</p>

          <p>v1.0.0</p>
        </div>

        {/* HERO */}
        <div className="flex flex-1 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            {/* Small Label */}
            <div className="mono mb-10 flex items-center gap-5 text-xs uppercase tracking-[0.22em] text-zinc-600">
              <span className="text-[#f5d90a]">01</span>

              <span>{">"} Repository Intelligence</span>
            </div>

            {/* Heading */}
            <h1 className="max-w-[1200px] text-5xl font-medium leading-[0.92] tracking-[-0.08em] text-white md:text-[5.8rem]">
              Understand repositories intelligently.
            </h1>

            {/* Input */}
            <div className="mt-14 flex max-w-[900px] items-center border border-white/5 bg-[#080808]">
              <input
                type="text"
                placeholder="Paste GitHub repository URL..."
                className="mono flex-1 bg-transparent px-8 py-6 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-700"
              />

              <button className="mono border-l border-white/5 bg-[#f5d90a] px-10 py-6 text-xs uppercase tracking-[0.22em] text-black transition duration-300 hover:bg-white">
                Analyze
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;