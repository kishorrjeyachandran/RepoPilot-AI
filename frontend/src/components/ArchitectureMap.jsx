import { motion } from "framer-motion";

const nodes = [
  {
    title: "Frontend",
    x: "12%",
    y: "20%",
  },
  {
    title: "Backend",
    x: "72%",
    y: "22%",
  },
  {
    title: "API",
    x: "42%",
    y: "50%",
  },
  {
    title: "Database",
    x: "25%",
    y: "78%",
  },
  {
    title: "AI Engine",
    x: "70%",
    y: "76%",
  },
];

const ArchitectureMap = () => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          ARCHITECTURE MAP
        </p>
      </div>

      {/* Canvas */}
      <div className="relative h-[500px] overflow-hidden">
        {/* Grid */}
        <div className="grid-bg absolute inset-0 opacity-[0.03]" />

        {/* SVG Lines */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1000 500"
          fill="none"
        >
          {/* Lines */}
          {[
            [150, 100, 500, 250],
            [800, 100, 500, 250],
            [500, 250, 300, 400],
            [500, 250, 720, 400],
          ].map((line, index) => (
            <motion.line
              key={index}
              x1={line[0]}
              y1={line[1]}
              x2={line[2]}
              y2={line[3]}
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 1,
                delay: index * 0.15,
              }}
            />
          ))}
        </svg>

        {/* Nodes */}
        {nodes.map((node, index) => (
          <motion.div
            key={node.title}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: index * 0.15,
            }}
            style={{
              left: node.x,
              top: node.y,
            }}
            className="absolute"
          >
            <div className="border border-white/5 bg-[#080808] px-5 py-4">
              <div className="mb-4 h-2 w-2 bg-[#f5d90a]" />

              <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-400">
                {node.title}
              </p>
            </div>
          </motion.div>
        ))}

        {/* Center Pulse */}
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f5d90a]"
        />
      </div>
    </div>
  );
};

export default ArchitectureMap;