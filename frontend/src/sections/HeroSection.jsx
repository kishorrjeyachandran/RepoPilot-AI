// src/sections/HeroSection.jsx

import { motion } from "framer-motion";
import AnalyzeInput from "../components/AnalyzeInput";

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
            <AnalyzeInput />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;