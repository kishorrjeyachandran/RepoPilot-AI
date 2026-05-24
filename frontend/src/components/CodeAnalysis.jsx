import { motion } from "framer-motion";

const CodeAnalysis = ({
  selectedFile,
  codeAnalysis,
  loading,
}) => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          AI CODE ANALYSIS
        </p>

        <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
          {selectedFile ||
            "NO FILE SELECTED"}
        </p>
      </div>

      {/* Content */}
      <div className="min-h-[300px] p-6">
        {loading ? (
          <div className="flex items-center gap-3">
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a]" />
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a]" />
            <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a]" />

            <p className="mono ml-3 text-xs uppercase tracking-[0.18em] text-zinc-600">
              Analyzing Code...
            </p>
          </div>
        ) : codeAnalysis ? (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="whitespace-pre-wrap leading-relaxed text-zinc-400"
          >
            {codeAnalysis}
          </motion.div>
        ) : (
          <div className="flex h-[220px] items-center justify-center">
            <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-700">
              Select a file to analyze
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodeAnalysis;