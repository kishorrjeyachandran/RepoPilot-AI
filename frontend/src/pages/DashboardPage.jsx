import { useLocation } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const DashboardPage = () => {
  const location = useLocation();

  const repoUrl =
    location.state?.repoUrl ||
    "https://github.com/vercel/next.js";

  return (
    <MainLayout>
      <section className="px-8 pt-44 pb-20">
        <div className="mx-auto max-w-[1600px]">
          {/* Repo URL */}
          <div className="mono mb-10 text-xs uppercase tracking-[0.22em] text-zinc-600">
            {repoUrl}
          </div>

          {/* Heading */}
          <h1 className="max-w-5xl text-5xl font-medium leading-[0.92] tracking-[-0.08em] text-white md:text-[5rem]">
            Repository
            <br />
            intelligence dashboard.
          </h1>

          {/* Grid */}
          <div className="mt-20 grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
            {/* Left */}
            <div className="space-y-6">
              {/* Summary */}
              <div className="border border-white/5 bg-[#080808] p-8">
                <div className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  README SUMMARY
                </div>

                <p className="max-w-3xl text-lg leading-relaxed text-zinc-400">
                  This repository contains a modern full-stack
                  framework with routing, rendering, server-side
                  capabilities, optimized bundling and scalable
                  architecture patterns.
                </p>
              </div>

              {/* Architecture */}
              <div className="border border-white/5 bg-[#080808] p-8">
                <div className="mono mb-10 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  ARCHITECTURE
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    "Frontend",
                    "Backend",
                    "Routing",
                    "Rendering",
                    "Compiler",
                    "API",
                  ].map((item) => (
                    <div
                      key={item}
                      className="mono border border-white/5 bg-black px-5 py-5 text-xs uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="space-y-6">
              {/* AI Insights */}
              <div className="border border-white/5 bg-[#080808] p-8">
                <div className="mono mb-8 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  AI INSIGHTS
                </div>

                <div className="space-y-5">
                  {[
                    "Well-structured modular architecture.",
                    "High scalability potential.",
                    "Strong routing abstraction.",
                    "Modern developer experience.",
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

              {/* Tech Stack */}
              <div className="border border-white/5 bg-[#080808] p-8">
                <div className="mono mb-8 text-xs uppercase tracking-[0.22em] text-zinc-600">
                  TECH STACK
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "TypeScript",
                    "Node",
                    "Webpack",
                    "Rust",
                    "CSS",
                  ].map((tech) => (
                    <div
                      key={tech}
                      className="mono border border-white/5 px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-400"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default DashboardPage;