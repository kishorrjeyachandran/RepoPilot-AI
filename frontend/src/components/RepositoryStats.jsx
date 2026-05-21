// src/components/RepositoryStats.jsx

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
      value: analysisData?.stars || 0,
    },
    {
      icon: GitFork,
      label: "Forks",
      value: analysisData?.forks || 0,
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
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="surface rounded-[28px] p-7"
          >
            <div className="mb-8">
              <Icon size={20} className="text-zinc-500" />
            </div>

            <h3 className="text-3xl font-medium text-white">
              {stat.value}
            </h3>

            <p className="mt-2 text-sm text-zinc-600">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default RepositoryStats;