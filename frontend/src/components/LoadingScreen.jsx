import { motion } from "framer-motion";

const loadingSteps = [
  "Analyzing repository...",
  "Parsing structure...",
  "Reading dependencies...",
  "Generating AI insights...",
];

const LoadingScreen = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050505] px-8">
      <div className="w-full max-w-2xl">
        {/* Terminal */}
        <div className="border border-white/5 bg-[#080808]">
          {/* Header */}
          <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
            <div className="h-2 w-2 rounded-full bg-zinc-700" />
          </div>

          {/* Body */}
          <div className="space-y-6 p-8">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: index * 0.6,
                }}
                className="mono flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-zinc-400"
              >
                <span className="text-[#f5d90a]">{">"}</span>

                <span>{step}</span>
              </motion.div>
            ))}

            {/* Progress */}
            <div className="pt-6">
              <div className="h-[2px] overflow-hidden bg-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{
                    duration: 2.5,
                  }}
                  className="h-full bg-[#f5d90a]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;