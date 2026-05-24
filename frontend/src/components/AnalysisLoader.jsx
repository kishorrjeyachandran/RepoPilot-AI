// src/components/AnalysisLoader.jsx

import { motion } from "framer-motion";

const steps = [
  "Connecting to GitHub repository...",
  "Fetching repository metadata...",
  "Analyzing dependencies...",
  "Mapping architecture...",
  "Scanning file structure...",
  "Generating AI insights...",
  "Computing repository metrics...",
  "Finalizing intelligence report...",
];

const AnalysisLoader = ({
  currentStep,
}) => {
  return (
    <div className="overflow-hidden border border-white/5 bg-[#080808]">
      {/* HEADER */}
      <div className="border-b border-white/5 px-6 py-5 md:px-8">
        <div className="flex items-center justify-between">
          <p className="mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
            AI Analysis Engine
          </p>

          <div className="flex items-center gap-2">
            <motion.div
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
              className="h-2 w-2 rounded-full bg-[#f5d90a]"
            />

            <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              Processing
            </p>
          </div>
        </div>
      </div>

      {/* BODY */}
      <div className="p-6 md:p-8">
        {/* TITLE */}
        <div className="mb-10">
          <h2 className="text-2xl font-medium tracking-tight text-white md:text-3xl">
            Running repository
            intelligence analysis.
          </h2>

          <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
            RepoPilot is analyzing
            repository structure,
            dependencies, architecture,
            engineering quality, and AI
            insights.
          </p>
        </div>

        {/* STEPS */}
        <div className="space-y-5">
          {steps.map((step, index) => {
            const active =
              index <= currentStep;

            const completed =
              index < currentStep;

            return (
              <motion.div
                key={step}
                initial={{
                  opacity: 0,
                  x: -10,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.04,
                }}
                className="flex items-center gap-4"
              >
                {/* STATUS DOT */}
                <div
                  className={`relative flex h-4 w-4 items-center justify-center rounded-full border ${
                    active
                      ? "border-[#f5d90a]/30 bg-[#f5d90a]/10"
                      : "border-white/5 bg-black"
                  }`}
                >
                  <motion.div
                    animate={
                      active
                        ? {
                            scale: [
                              1,
                              1.3,
                              1,
                            ],
                            opacity: [
                              0.5,
                              1,
                              0.5,
                            ],
                          }
                        : {}
                    }
                    transition={{
                      duration: 1.5,
                      repeat:
                        Infinity,
                    }}
                    className={`h-2 w-2 rounded-full ${
                      active
                        ? "bg-[#f5d90a]"
                        : "bg-zinc-800"
                    }`}
                  />
                </div>

                {/* TEXT */}
                <div className="flex flex-1 items-center justify-between">
                  <p
                    className={`mono text-xs uppercase tracking-[0.18em] ${
                      active
                        ? "text-zinc-300"
                        : "text-zinc-700"
                    }`}
                  >
                    {step}
                  </p>

                  <p
                    className={`mono text-[10px] uppercase tracking-[0.18em] ${
                      completed
                        ? "text-[#f5d90a]"
                        : active
                        ? "text-zinc-500"
                        : "text-zinc-800"
                    }`}
                  >
                    {completed
                      ? "Completed"
                      : active
                      ? "Running"
                      : "Pending"}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* PROGRESS */}
        <div className="mt-10">
          <div className="mb-3 flex items-center justify-between">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              Analysis Progress
            </p>

            <p className="mono text-[10px] uppercase tracking-[0.18em] text-white">
              {Math.min(
                100,
                Math.round(
                  ((currentStep + 1) /
                    steps.length) *
                    100
                )
              )}
              %
            </p>
          </div>

          {/* BAR */}
          <div className="h-2 overflow-hidden bg-white/5">
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${
                  ((currentStep + 1) /
                    steps.length) *
                  100
                }%`,
              }}
              transition={{
                duration: 0.5,
              }}
              className="h-full bg-[#f5d90a]"
            />
          </div>
        </div>

        {/* TERMINAL */}
        <div className="mt-10 border border-white/5 bg-black">
          {/* HEADER */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
          </div>

          {/* BODY */}
          <div className="space-y-4 p-5">
            {steps
              .slice(
                0,
                currentStep + 1
              )
              .map((step) => (
                <motion.div
                  key={step}
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  className="mono flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-zinc-500"
                >
                  <span className="text-[#f5d90a]">
                    {">"}
                  </span>

                  <span>{step}</span>
                </motion.div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoader;