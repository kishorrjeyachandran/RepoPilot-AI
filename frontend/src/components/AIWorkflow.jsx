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
    desc: "Analyzing repository structure and metadata",
  },
  {
    icon: FileCode2,
    title: "Understanding Codebase",
    desc: "Detecting frameworks, configs, and architecture",
  },
  {
    icon: BrainCircuit,
    title: "Generating AI Insights",
    desc: "Creating explanations and improvements",
  },
  {
    icon: Sparkles,
    title: "Preparing Final Report",
    desc: "Building structured repository intelligence",
  },
];

const AIWorkflow = () => {
  return (
    <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => {
        const Icon = step.icon;

        return (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: index * 0.15,
              duration: 0.5,
            }}
            className="group relative overflow-hidden rounded-2xl border border-[#30363d] bg-[#161b22]/70 p-5 backdrop-blur-xl"
          >
            <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />

            <div className="relative z-10">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#0d1117] border border-[#30363d]">
                <Icon size={22} className="text-blue-400" />
              </div>

              <h3 className="mb-2 text-lg font-semibold text-white">
                {step.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#8b949e]">
                {step.desc}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AIWorkflow;