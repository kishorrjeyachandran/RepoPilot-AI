import { motion } from "framer-motion";

const DependencyGraph = ({ dependencies }) => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          DEPENDENCY GRAPH
        </p>
      </div>

      {/* Body */}
      <div className="relative overflow-hidden p-8">
        {/* Grid */}
        <div className="grid-bg absolute inset-0 opacity-[0.03]" />

        <div className="relative flex flex-wrap gap-4">
          {dependencies?.map((dep, index) => (
            <motion.div
              key={dep}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.03,
              }}
              className="mono border border-white/5 bg-[#080808] px-5 py-4 text-xs uppercase tracking-[0.18em] text-zinc-400 transition hover:border-[#f5d90a]"
            >
              {dep}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DependencyGraph;