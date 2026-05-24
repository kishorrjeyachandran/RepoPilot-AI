// src/pages/DashboardPage.jsx

import { useLocation } from "react-router-dom";
import { useState } from "react";

import { motion } from "framer-motion";

import DashboardLayout from "../layouts/DashboardLayout";

import SessionSidebar from "../components/SessionSidebar";
import FileExplorer from "../components/FileExplorer";
import ArchitectureMap from "../components/ArchitectureMap";
import DependencyGraph from "../components/DependencyGraph";
import AIChat from "../components/AIChat";
import CodePreview from "../components/CodePreview";
import CodeAnalysis from "../components/CodeAnalysis";
import RepositoryMetrics from "../components/RepositoryMetrics";
import QuickInsights from "../components/QuickInsights";
import ExportReportButton from "../components/ExportReportButton";

const DashboardPage = () => {
  const location = useLocation();

  const repoData = location.state?.repoData;

  const [selectedFile, setSelectedFile] =
    useState("");

  const [codeContent, setCodeContent] =
    useState("");

  const [codeAnalysis, setCodeAnalysis] =
    useState("");

  const [analysisLoading, setAnalysisLoading] =
    useState(false);

  if (!repoData) {
    return (
      <DashboardLayout>
        <div className="flex min-h-screen items-center justify-center bg-[#050505] px-6">
          <div className="border border-white/5 bg-[#080808] px-10 py-8">
            <p className="mono text-sm uppercase tracking-[0.22em] text-zinc-600">
              No repository data found.
            </p>
          </div>
        </div>
      </DashboardLayout>
    );
  }

  //
  // FILE SELECT
  //
  const handleFileSelect = async (
    filePath
  ) => {
    try {
      setSelectedFile(filePath);

      setCodeAnalysis("");

      //
      // FETCH FILE CONTENT
      //
      const res = await fetch(
        "http://localhost:5000/api/files/content",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            repoUrl: repoData.repoUrl,
            filePath,
          }),
        }
      );

      const data = await res.json();

      setCodeContent(data.content);

      //
      // ANALYZE CODE
      //
      setAnalysisLoading(true);

      const analysisRes = await fetch(
        "http://localhost:5000/api/code/analyze",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            filePath,
            codeContent: data.content,
          }),
        }
      );

      const analysisData =
        await analysisRes.json();

      setCodeAnalysis(
        analysisData.analysis
      );
    } catch (error) {
      console.log(error);
    } finally {
      setAnalysisLoading(false);
    }
  };

  return (
    <DashboardLayout>
      <section className="min-h-screen bg-[#050505] px-4 py-4 md:px-8 md:py-8 xl:px-10 xl:py-10">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="overflow-hidden border border-white/5 bg-[#080808]"
        >
          {/* TOP BAR */}
          <div className="border-b border-white/5 bg-black px-6 py-5 md:px-8">
            <div className="flex items-center justify-between">
              <p className="mono text-[10px] uppercase tracking-[0.22em] text-zinc-700">
                Repository Workspace
              </p>

              <div className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
                AI ENGINE ACTIVE
              </div>
            </div>
          </div>

          {/* HEADER */}
          <div className="border-b border-white/5 px-6 py-7 md:px-8 md:py-8">
            <p className="mono text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              Repository Analysis
            </p>

            <div className="mt-5 flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
              <div>
                <h1 className="text-4xl font-medium tracking-tight text-white md:text-5xl">
                  {repoData.name}
                </h1>

                <p className="mt-4 max-w-3xl leading-relaxed text-zinc-500">
                  {repoData.description ||
                    "No description available."}
                </p>
              </div>

              <a
                href={repoData.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="mono inline-flex items-center border border-[#f5d90a]/20 bg-[#f5d90a]/5 px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-[#f5d90a] transition hover:bg-[#f5d90a] hover:text-black"
              >
                Open Repository
              </a>
            </div>
          </div>

          {/* STATS */}
          <div className="grid border-b border-white/5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              ["Stars", repoData.stars],
              ["Forks", repoData.forks],
              ["Language", repoData.language],
              ["Owner", repoData.owner],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-b border-r border-white/5 px-6 py-7 last:border-r-0 sm:border-b-0 md:px-8"
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

          {/* QUICK INSIGHTS */}
          <div className="p-4 md:p-6 xl:p-8">
            <QuickInsights
              repoData={repoData}
            />
          </div>

          {/* MAIN */}
          <div className="grid gap-6 p-4 md:p-6 xl:grid-cols-[1.25fr_0.75fr] xl:p-8">
            {/* LEFT */}
            <div className="space-y-6">
              {/* AI ANALYSIS */}
              <div className="border border-white/5 bg-black p-6 md:p-8">
                <p className="mono mb-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  AI ANALYSIS
                </p>

                <div className="whitespace-pre-wrap leading-relaxed text-zinc-400">
                  {repoData.aiAnalysis ||
                    "AI analysis unavailable."}
                </div>
              </div>

              {/* FILE EXPLORER */}
              <FileExplorer
                fileTree={repoData.fileTree}
                onFileSelect={
                  handleFileSelect
                }
              />

              {/* CODE PREVIEW */}
              <CodePreview
                selectedFile={
                  selectedFile
                }
                codeContent={
                  codeContent
                }
              />

              {/* CODE ANALYSIS */}
              <CodeAnalysis
                selectedFile={
                  selectedFile
                }
                codeAnalysis={
                  codeAnalysis
                }
                loading={
                  analysisLoading
                }
              />

              {/* ARCHITECTURE */}
              <ArchitectureMap />

              {/* DEPENDENCIES */}
              <DependencyGraph
                dependencies={
                  repoData.dependencies
                }
              />

              {/* AI CHAT */}
              <AIChat
                repoData={repoData}
              />

              {/* TERMINAL */}
              <div className="border border-white/5 bg-black">
                {/* HEADER */}
                <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                  <div className="h-2 w-2 rounded-full bg-zinc-700" />
                </div>

                {/* BODY */}
                <div className="space-y-5 p-6 md:p-7">
                  {[
                    "Repository parsed successfully.",
                    "README analyzed.",
                    "Architecture generated.",
                    "Dependencies mapped.",
                    "Code intelligence initialized.",
                    "Session restored.",
                    "AI insights completed.",
                  ].map((line, index) => (
                    <motion.div
                      key={line}
                      initial={{
                        opacity: 0,
                      }}
                      animate={{
                        opacity: 1,
                      }}
                      transition={{
                        delay:
                          index * 0.12,
                      }}
                      className="mono flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-zinc-500 md:text-sm"
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
              {/* LANGUAGES */}
              <div className="border border-white/5 bg-black p-6 md:p-8">
                <p className="mono mb-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  LANGUAGES
                </p>

                <div className="flex flex-wrap gap-3">
                  {repoData.languages?.map(
                    (lang) => (
                      <div
                        key={lang}
                        className="mono border border-white/5 bg-[#080808] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-zinc-400"
                      >
                        {lang}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* FRAMEWORKS */}
              <div className="border border-white/5 bg-black p-6 md:p-8">
                <p className="mono mb-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  FRAMEWORKS
                </p>

                <div className="flex flex-wrap gap-3">
                  {repoData.frameworks?.map(
                    (framework) => (
                      <div
                        key={framework}
                        className="mono border border-white/5 bg-[#080808] px-5 py-3 text-[10px] uppercase tracking-[0.18em] text-zinc-400"
                      >
                        {framework}
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* METRICS */}
              <RepositoryMetrics
                metrics={
                  repoData.metrics
                }
              />

              {/* SOURCE */}
              <div className="border border-white/5 bg-black p-6 md:p-8">
                <p className="mono mb-6 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
                  SOURCE
                </p>

                <a
                  href={repoData.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mono break-all text-xs uppercase tracking-[0.18em] text-[#f5d90a]"
                >
                  {repoData.repoUrl}
                </a>
              </div>

              {/* EXPORT */}
              <ExportReportButton
                repoData={repoData}
              />

              {/* SESSIONS */}
              <SessionSidebar />
            </div>
          </div>
        </motion.div>
      </section>
    </DashboardLayout>
  );
};

export default DashboardPage;