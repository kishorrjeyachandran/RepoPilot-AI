import {
  Star,
  GitFork,
  Code2,
  User2,
} from "lucide-react";

const RepositoryStats = ({ analysisData }) => {
  const stats = [
    {
      icon: Star,
      label: "Stars",
      value: analysisData?.stars || "0",
    },
    {
      icon: GitFork,
      label: "Forks",
      value: analysisData?.forks || "0",
    },
    {
      icon: Code2,
      label: "Language",
      value: analysisData?.language || "Unknown",
    },
    {
      icon: User2,
      label: "Owner",
      value: analysisData?.owner || "Unknown",
    },
  ];

  return (
    <div className="grid border border-white/5 xl:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className={`group relative overflow-hidden border-white/5 bg-[#080808] px-8 py-10 ${
              index !== stats.length - 1
                ? "border-b xl:border-b-0 xl:border-r"
                : ""
            }`}
          >
            {/* Tiny corner accent */}
            <div className="absolute left-0 top-0 h-[1px] w-10 bg-[#f5d90a]" />

            {/* Icon */}
            <div className="mb-10 flex items-center justify-between">
              <Icon
                size={20}
                className="text-zinc-600 transition group-hover:text-[#f5d90a]"
              />

              <span className="mono text-xs uppercase tracking-[0.2em] text-zinc-700">
                0{index + 1}
              </span>
            </div>

            {/* Value */}
            <h2 className="text-5xl font-semibold tracking-[-0.05em] text-white">
              {stat.value}
            </h2>

            {/* Label */}
            <p className="mono mt-5 text-xs uppercase tracking-[0.2em] text-zinc-600">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryStats;