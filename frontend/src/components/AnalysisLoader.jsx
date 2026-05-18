import { motion } from "framer-motion";
import {
  GitBranch,
  FileCode2,
  BrainCircuit,
  Sparkles,
} from "lucide-react";

const steps = [
  {
    icon: GitBranch,
    title: "Fetching Repository",
  },
  {
    icon: FileCode2,
    title: "Analyzing Structure",
  },
  {
    icon: BrainCircuit,
    title: "Generating AI Insights",
  },
  {
    icon: Sparkles,
    title: "Preparing Final Report",
  },
];

const AnalysisLoader = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0d1117]">
      <div className="w-full max-w-2xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <div className="mb-5 inline-flex h-20 w-20 items-center justify-center rounded-3xl border border-[#30363d] bg-[#161b22]">
            <BrainCircuit size={36} className="text-blue-400" />
          </div>

          <h2 className="mb-4 text-4xl font-bold text-white">
            RepoPilot AI is analyzing the repository
          </h2>

          <p className="text-lg text-[#8b949e]">
            Understanding architecture, technologies, and repository structure.
          </p>
        </motion.div>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.4,
                  duration: 0.5,
                }}
                className="flex items-center gap-4 rounded-2xl border border-[#30363d] bg-[#161b22]/70 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#30363d] bg-[#0d1117]">
                  <Icon className="text-blue-400" size={22} />
                </div>

                <div className="flex-1">
                  <p className="font-medium text-white">
                    {step.title}
                  </p>

                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#21262d]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{
                        delay: index * 0.4,
                        duration: 1.2,
                      }}
                      className="h-full rounded-full bg-blue-500"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AnalysisLoader;