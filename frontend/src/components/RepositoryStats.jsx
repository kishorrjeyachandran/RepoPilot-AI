import {
  Star,
  GitFork,
  Eye,
  Clock3,
} from "lucide-react";

const RepositoryStats = ({ analysisData }) => {
  const stats = [
    {
      icon: Star,
      label: "Stars",
      value: analysisData?.stars || 0,
    },
    {
      icon: GitFork,
      label: "Forks",
      value: analysisData?.forks || 0,
    },
    {
      icon: Eye,
      label: "Language",
      value: analysisData?.language || "Unknown",
    },
    {
      icon: Clock3,
      label: "Owner",
      value: analysisData?.owner || "Unknown",
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-[#21262d] bg-[#161b22]/60 p-5 transition hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl border border-[#30363d] bg-[#0d1117]">
              <Icon className="text-blue-400" size={20} />
            </div>

            <h3 className="mb-1 text-2xl font-bold">
              {stat.value}
            </h3>

            <p className="text-sm text-[#8b949e]">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryStats;