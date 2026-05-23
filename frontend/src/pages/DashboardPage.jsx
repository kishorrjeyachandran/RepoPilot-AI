import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import DashboardLayout from "../layouts/DashboardLayout";
import FileExplorer from "../components/FileExplorer";
import ArchitectureMap from "../components/ArchitectureMap";
import DependencyGraph from "../components/DependencyGraph";

const DashboardPage = () => {
  const location = useLocation();

  const repoData = location.state?.repoData;

  if (!repoData) {
    return (
      <DashboardLayout>
        <div className="flex min-h-screen items-center justify-center bg-[#050505]">
          <p className="mono text-sm uppercase tracking-[0.22em] text-zinc-600">
            No repository data found.
          </p>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <section className="min-h-screen bg-[#050505] px-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="overflow-hidden border border-white/5 bg-[#080808]"
        >
          {/* Header */}
          <div className="border-b border-white/5 px-8 py-8">
            <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
              Repository Analysis
            </p>

            <h1 className="mt-5 text-5xl font-medium tracking-tight text-white">
              {repoData.name}
            </h1>

            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-500">
              {repoData.description || "No description available."}
            </p>
          </div>

          {/* Stats */}
          <div className="grid border-b border-white/5 md:grid-cols-4">
            {[
              ["Stars", repoData.stars],
              ["Forks", repoData.forks],
              ["Language", repoData.language],
              ["Owner", repoData.owner],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-r border-white/5 px-8 py-7 last:border-r-0"
              >
                <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                  {k}
                </p>

                <p className="mt-4 text-2xl font-medium text-white">
                  {v || "N/A"}
                </p>
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div className="grid gap-6 p-8 xl:grid-cols-[1.2fr_0.8fr]">
            {/* LEFT */}
<div className="space-y-6">
  {/* AI Analysis */}
  <div className="border border-white/5 bg-black p-8">
    <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
      AI ANALYSIS
    </p>

    <div className="whitespace-pre-wrap leading-relaxed text-zinc-400">
      {repoData.aiAnalysis ||
        "AI analysis unavailable."}
    </div>
  </div>

  {/* File Explorer */}
  <FileExplorer
    fileTree={repoData.fileTree}
  />
  <ArchitectureMap />

  <DependencyGraph
  dependencies={repoData.dependencies}
/>

  {/* Terminal */}
  <div className="border border-white/5 bg-black">
    {/* Terminal Header */}
    <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
      <div className="h-2 w-2 rounded-full bg-zinc-700" />
      <div className="h-2 w-2 rounded-full bg-zinc-700" />
      <div className="h-2 w-2 rounded-full bg-zinc-700" />
    </div>

    {/* Terminal Body */}
    <div className="space-y-5 p-7">
      {[
        "Repository parsed successfully.",
        "README analyzed.",
        "Architecture generated.",
        "AI insights completed.",
      ].map((line, index) => (
        <motion.div
          key={line}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: index * 0.2,
          }}
          className="mono flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-zinc-500"
        >
          <span className="text-[#f5d90a]">
            {">"}
          </span>

          <span>{line}</span>
        </motion.div>
      ))}
    </div>
  </div>
</div>

            {/* RIGHT */}
            <div className="space-y-6">
              {/* Languages */}
              <div className="border border-white/5 bg-black p-8">
                <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  LANGUAGES
                </p>

                <div className="flex flex-wrap gap-3">
                  {repoData.languages?.map((lang) => (
                    <div
                      key={lang}
                      className="mono border border-white/5 px-5 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {lang}
                    </div>
                  ))}
                </div>
              </div>

              {/* Frameworks */}
              <div className="border border-white/5 bg-black p-8">
                <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  FRAMEWORKS
                </p>

                <div className="flex flex-wrap gap-3">
                  {repoData.frameworks?.length > 0 ? (
                    repoData.frameworks.map((framework) => (
                      <div
                        key={framework}
                        className="mono border border-white/5 bg-[#080808] px-5 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400"
                      >
                        {framework}
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-zinc-600">
                      No frameworks detected.
                    </p>
                  )}
                </div>
              </div>

              {/* AI Insights */}
              <div className="border border-white/5 bg-black p-8">
                <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  AI INSIGHTS
                </p>

                <div className="space-y-5">
                  {[
                    "Scalable repository structure detected.",
                    "Modern development workflow identified.",
                    "Strong component architecture.",
                    "Production-ready engineering practices.",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex gap-4"
                    >
                      <div className="mt-[7px] h-2 w-2 bg-[#f5d90a]" />

                      <p className="text-zinc-400">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Source */}
              <div className="border border-white/5 bg-black p-8">
                <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  SOURCE
                </p>

                <a
                  href={repoData.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mono break-all text-sm uppercase tracking-[0.18em] text-[#f5d90a]"
                >
                  {repoData.repoUrl}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPage;