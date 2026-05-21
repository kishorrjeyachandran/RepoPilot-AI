import RepositoryStats from "./RepositoryStats";

const DashboardTabs = ({ analysisData }) => {
  return (
    <div className="mx-auto max-w-[1400px]">
      {/* Top Label */}
      <div className="mono mb-10 flex items-center gap-5 text-xs uppercase tracking-[0.22em] text-zinc-600">
        <span className="text-[#f5d90a]">01</span>

        <span>{">"} Repository Analysis</span>
      </div>

      {/* Main Hero */}
      <div className="border border-white/5 bg-[#080808]">
        {/* Top */}
        <div className="grid xl:grid-cols-[1.4fr_0.6fr]">
          {/* LEFT */}
          <div className="border-b border-r border-white/5 p-12 xl:border-b-0">
            <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
              Repository Overview
            </p>

            <h1 className="max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
              {analysisData?.name || "Repository"}
            </h1>

            <p className="mt-10 max-w-2xl text-lg leading-relaxed text-zinc-500">
              {analysisData?.description ||
                "AI-generated repository architecture analysis and intelligent engineering insights."}
            </p>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center overflow-hidden">
            {/* Grid */}
            <div className="grid-bg absolute inset-0 opacity-[0.03]" />

            {/* Diagram */}
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
            >
              {/* Outer Circle */}
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="rgba(255,255,255,0.08)"
              />

              {/* Inner Circle */}
              <circle
                cx="200"
                cy="200"
                r="70"
                stroke="#f5d90a"
              />

              {/* Cross Lines */}
              <line
                x1="0"
                y1="200"
                x2="400"
                y2="200"
                stroke="rgba(255,255,255,0.06)"
              />

              <line
                x1="200"
                y1="0"
                x2="200"
                y2="400"
                stroke="rgba(255,255,255,0.06)"
              />
            </svg>

            {/* Center Dot */}
            <div className="absolute h-3 w-3 rounded-full bg-[#f5d90a]" />

            {/* Label */}
            <div className="mono absolute bottom-6 left-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
              FIG.02 / AI Architecture
            </div>
          </div>
        </div>

        {/* Stats */}
        <RepositoryStats analysisData={analysisData} />
      </div>

      {/* Lower Grid */}
      <div className="mt-10 grid gap-10 xl:grid-cols-2">
        {/* Architecture */}
        <div className="border border-white/5 bg-[#080808] p-10">
          <div className="mono mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-zinc-600">
            <span className="text-[#f5d90a]">02</span>

            <span>{">"} Architecture</span>
          </div>

          <h2 className="max-w-lg text-5xl font-semibold leading-[0.95] tracking-[-0.05em]">
            Scalable engineering structure detected.
          </h2>

          <p className="mt-10 max-w-xl leading-relaxed text-zinc-500">
            The repository follows modular development practices,
            reusable engineering patterns, and production-ready
            architecture organization.
          </p>

          {/* Bottom technical line */}
          <div className="mt-14 technical-line" />
        </div>

        {/* Insights */}
        <div className="border border-white/5 bg-[#080808] p-10">
          <div className="mono mb-8 flex items-center gap-4 text-xs uppercase tracking-[0.22em] text-zinc-600">
            <span className="text-[#f5d90a]">03</span>

            <span>{">"} AI Insights</span>
          </div>

          <div className="space-y-4">
            {[
              "Modern scalable architecture identified",
              "Reusable engineering patterns detected",
              "Strong repository organization structure",
              "Production-ready development workflow",
            ].map((item, index) => (
              <div
                key={item}
                className="group flex items-center justify-between border border-white/5 bg-black px-5 py-5 transition hover:border-[#f5d90a]"
              >
                <span className="mono text-xs uppercase tracking-[0.15em] text-zinc-400">
                  {item}
                </span>

                <span className="mono text-xs text-zinc-700">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardTabs;