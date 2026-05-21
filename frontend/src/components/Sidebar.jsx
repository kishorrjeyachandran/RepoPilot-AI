import {
  Folder,
  FileCode2,
} from "lucide-react";

const Sidebar = ({ analysisData }) => {
  return (
    <aside className="hidden w-[300px] border-r border-white/5 xl:block">
      {/* Header */}
      <div className="border-b border-white/5 p-8">
        <p className="mono mb-4 text-xs uppercase tracking-[0.2em] text-zinc-600">
          Repository
        </p>

        <h2 className="text-3xl font-semibold tracking-tight">
          {analysisData?.name || "Repository"}
        </h2>

        <p className="mt-2 text-zinc-500">
          {analysisData?.owner || "Unknown"}
        </p>
      </div>

      {/* Files */}
      <div className="p-6">
        <p className="mono mb-6 text-xs uppercase tracking-[0.2em] text-zinc-600">
          Structure
        </p>

        <div className="space-y-2">
          {[
            "src",
            "components",
            "App.jsx",
            "main.jsx",
            "package.json",
          ].map((item, index) => (
            <button
              key={item}
              className="mono flex w-full items-center gap-3 border border-transparent px-4 py-4 text-left text-sm uppercase tracking-[0.08em] text-zinc-500 transition hover:border-white/10 hover:bg-white/[0.02] hover:text-white"
            >
              {index < 2 ? (
                <Folder size={16} />
              ) : (
                <FileCode2 size={16} />
              )}

              {item}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;