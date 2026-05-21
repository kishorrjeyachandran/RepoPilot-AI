// src/components/DashboardTabs.jsx

import RepositoryStats from "./RepositoryStats";

const DashboardTabs = ({ analysisData }) => {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Hero */}
      <div className="surface rounded-[40px] p-10 md:p-14">
        <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-600">
          Repository Analysis
        </p>

        <h1 className="max-w-4xl text-5xl font-medium leading-tight tracking-tight text-white md:text-7xl">
          {analysisData?.name || "Repository"}
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-500">
          {analysisData?.description ||
            "AI-generated repository architecture and development insights."}
        </p>
      </div>

      {/* Stats */}
      <div className="mt-6">
        <RepositoryStats analysisData={analysisData} />
      </div>

      {/* Sections */}
      <div className="mt-6 grid gap-6 xl:grid-cols-2">
        <div className="surface rounded-[32px] p-8">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-600">
            Overview
          </p>

          <h2 className="text-3xl font-medium text-white">
            Repository Architecture
          </h2>

          <p className="mt-6 leading-relaxed text-zinc-500">
            This repository follows a scalable development structure
            with reusable modules, modern tooling, and production-ready
            engineering practices.
          </p>
        </div>

        <div className="surface rounded-[32px] p-8">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-600">
            AI Insights
          </p>

          <div className="space-y-4">
            {[
              "Modern scalable architecture identified",
              "Reusable component structure detected",
              "Production-oriented repository setup",
              "Strong developer tooling integration",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl bg-white/[0.03] p-4 text-zinc-400"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTabs;