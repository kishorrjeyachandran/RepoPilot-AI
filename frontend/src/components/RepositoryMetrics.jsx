import { motion } from "framer-motion";

const metricsConfig = [
  {
    key: "architectureScore",
    label: "Architecture",
  },

  {
    key: "maintainabilityScore",
    label: "Maintainability",
  },

  {
    key: "complexityScore",
    label: "Complexity",
  },
];

const RepositoryMetrics = ({
  metrics,
}) => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          REPOSITORY METRICS
        </p>
      </div>

      {/* Metrics */}
      <div className="space-y-8 p-6">
        {metricsConfig.map((metric) => (
          <div key={metric.key}>
            <div className="mb-3 flex items-center justify-between">
              <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {metric.label}
              </p>

              <p className="mono text-xs uppercase tracking-[0.18em] text-white">
                {metrics?.[
                  metric.key
                ] || 0}
              </p>
            </div>

            {/* Progress */}
            <div className="h-2 overflow-hidden bg-white/5">
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${
                    metrics?.[
                      metric.key
                    ] || 0
                  }%`,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="h-full bg-[#f5d90a]"
              />
            </div>
          </div>
        ))}

        {/* Extra Stats */}
        <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
          <div className="border border-white/5 bg-[#080808] p-5">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              Files
            </p>

            <p className="mt-3 text-2xl text-white">
              {metrics?.totalFiles}
            </p>
          </div>

          <div className="border border-white/5 bg-[#080808] p-5">
            <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
              Dependencies
            </p>

            <p className="mt-3 text-2xl text-white">
              {
                metrics?.totalDependencies
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryMetrics;