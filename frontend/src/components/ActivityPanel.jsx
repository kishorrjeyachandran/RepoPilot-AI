// src/components/ActivityPanel.jsx

const activities = [
  "Parsing repository structure",
  "Generating AI insights",
  "Reading dependencies",
  "Analyzing architecture",
  "Mapping components",
];

const ActivityPanel = () => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-white/5 px-5 py-4">
        <div className="h-2 w-2 rounded-full bg-zinc-700" />
        <div className="h-2 w-2 rounded-full bg-zinc-700" />
        <div className="h-2 w-2 rounded-full bg-zinc-700" />
      </div>

      {/* Terminal Body */}
      <div className="space-y-5 p-7">
        {activities.map((line) => (
          <div
            key={line}
            className="mono flex items-center gap-4 text-sm uppercase tracking-[0.18em] text-zinc-500"
          >
            <span className="text-[#f5d90a]">{">"}</span>

            <span>{line}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityPanel;