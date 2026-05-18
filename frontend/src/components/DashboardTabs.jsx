import { useState } from "react";

import RepositoryStats from "./RepositoryStats";
import ImprovementsSection from "./ImprovementsSection";
import ReadmePreview from "./ReadmePreview";
import ArchitectureSection from "./ArchitectureSection";

import FadeWrapper from "../animations/FadeWrapper";

const tabs = [
  "Overview",
  "README",
  "Architecture",
  "Improvements",
];

const DashboardTabs = ({ analysisData }) => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <div className="h-screen overflow-y-auto">
      <div className="sticky top-0 z-20 border-b border-[#21262d] bg-[#0d1117]/90 backdrop-blur-xl">
        <div className="flex gap-3 overflow-x-auto px-6 py-5">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-xl px-4 py-2 text-sm transition ${
                activeTab === tab
                  ? "bg-blue-600 text-white"
                  : "bg-[#161b22] text-[#8b949e]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-8 p-8">
        {/* Overview Header */}
        <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-8">
          <div className="flex items-center gap-5">
            {analysisData?.avatar && (
              <img
                src={analysisData.avatar}
                alt={analysisData.owner}
                className="h-20 w-20 rounded-2xl border border-[#30363d]"
              />
            )}

            <div>
              <h1 className="mb-2 text-4xl font-bold">
                {analysisData?.name || "Repository"}
              </h1>

              <p className="text-[#8b949e]">
                {analysisData?.owner || "Unknown Owner"}
              </p>
            </div>
          </div>

          <p className="mt-6 max-w-4xl leading-relaxed text-[#c9d1d9]">
            {analysisData?.description ||
              "No repository description available."}
          </p>
        </div>

        {/* Stats */}
        <FadeWrapper>
          <RepositoryStats analysisData={analysisData} />
        </FadeWrapper>

        {/* README */}
        {activeTab === "README" && (
          <FadeWrapper>
            <ReadmePreview />
          </FadeWrapper>
        )}

        {/* Architecture */}
        {activeTab === "Architecture" && (
          <FadeWrapper>
            <ArchitectureSection />
          </FadeWrapper>
        )}

        {/* Improvements */}
        {activeTab === "Improvements" && (
          <FadeWrapper>
            <ImprovementsSection />
          </FadeWrapper>
        )}

        {/* Overview */}
        {activeTab === "Overview" && (
          <FadeWrapper>
            <div className="grid gap-6 xl:grid-cols-2">
              <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-6">
                <h2 className="mb-4 text-2xl font-semibold">
                  Key Technologies
                </h2>

                <div className="flex flex-wrap gap-3">
                  {[
                    analysisData?.language || "Unknown",
                    "GitHub API",
                    "AI Analysis",
                    "Repository Insights",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-xl border border-[#30363d] bg-[#0d1117] px-4 py-2"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-6">
                <h2 className="mb-4 text-2xl font-semibold">
                  AI Insights
                </h2>

                <ul className="space-y-3 text-[#c9d1d9]">
                  <li>• Repository structure successfully analyzed</li>
                  <li>• GitHub metadata extracted dynamically</li>
                  <li>• AI-ready repository context prepared</li>
                  <li>• Scalable repository architecture detected</li>
                </ul>
              </div>
            </div>
          </FadeWrapper>
        )}
      </div>
    </div>
  );
};

export default DashboardTabs;