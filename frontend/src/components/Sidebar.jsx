// src/components/Sidebar.jsx

import {
  Folder,
  FileCode2,
} from "lucide-react";

const Sidebar = ({ analysisData }) => {
  return (
    <aside className="hidden w-[280px] border-r border-white/5 px-4 py-6 xl:block">
      <div className="mb-10 px-3">
        <h2 className="text-lg font-medium text-white">
          {analysisData?.name || "Repository"}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {analysisData?.owner || "Unknown"}
        </p>
      </div>

      <div>
        <p className="mb-4 px-3 text-xs uppercase tracking-[0.2em] text-zinc-600">
          Repository
        </p>

        <div className="space-y-1">
          {[
            "src",
            "components",
            "App.jsx",
            "main.jsx",
            "package.json",
          ].map((item, index) => (
            <button
              key={item}
              className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm text-zinc-500 transition hover:bg-white/[0.03] hover:text-white"
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