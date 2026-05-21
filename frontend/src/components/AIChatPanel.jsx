// src/components/AIChatPanel.jsx

const AIChatPanel = () => {
  return (
    <aside className="hidden w-[340px] border-l border-white/5 px-6 py-6 2xl:block">
      <div className="surface flex h-full flex-col rounded-[32px] p-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-600">
            AI Assistant
          </p>

          <h2 className="mt-3 text-2xl font-medium text-white">
            Repository Chat
          </h2>
        </div>

        <div className="mt-8 flex-1 space-y-4 overflow-y-auto">
          <div className="rounded-2xl bg-white/[0.03] p-4 text-zinc-400">
            This repository uses a scalable component-based architecture.
          </div>

          <div className="rounded-2xl bg-white p-4 text-black">
            Explain the project structure.
          </div>
        </div>

        <div className="mt-6 flex gap-3">
          <input
            type="text"
            placeholder="Ask about repository..."
            className="flex-1 rounded-2xl border border-white/5 bg-white/[0.03] px-4 py-4 text-white outline-none placeholder:text-zinc-600"
          />

          <button className="rounded-2xl bg-white px-5 text-sm font-medium text-black">
            Ask
          </button>
        </div>
      </div>
    </aside>
  );
};

export default AIChatPanel;