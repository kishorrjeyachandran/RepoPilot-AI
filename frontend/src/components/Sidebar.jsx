// src/components/Sidebar.jsx

import {
  Sparkles,
  Folder,
} from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="hidden w-[280px] border-r border-white/5 bg-[#070707] xl:flex xl:flex-col">
      {/* Top */}
      <div className="border-b border-white/5 px-8 py-8">
        <div className="flex items-center gap-4">
          <div className="flex gap-[4px]">
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
          </div>

          <div>
            <h1 className="text-xl font-semibold">
              RepoPilot
            </h1>

            <p className="mono mt-1 text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              AI Workspace
            </p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <div className="flex-1 px-5 py-8">
        <div className="space-y-2">
          {[
            {
              icon: Folder,
              label: "Repository",
            },
            {
              icon: Sparkles,
              label: "AI Insights",
            },
            {
              icon: Folder,
              label: "Source",
            },
          ].map((item) => (
            <button
              key={item.label}
              className="mono flex w-full items-center gap-4 border border-transparent px-5 py-4 text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:border-white/5 hover:bg-white/[0.02] hover:text-white"
            >
              <item.icon size={16} />

              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5 p-6">
        <div className="border border-white/5 bg-black p-5">
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
            ACTIVE MODEL
          </p>

          <p className="mt-3 text-sm text-zinc-300">
            RepoPilot Intelligence v1
          </p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;