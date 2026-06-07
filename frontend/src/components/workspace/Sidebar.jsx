const Sidebar = () => {
  return (
    <aside className="hidden w-[280px] border-r border-white/5 p-8 lg:block">

      <p className="mono text-xs uppercase tracking-[0.35em] text-zinc-600">
        REPOPILOT AI
      </p>

      <div className="mt-16 space-y-3">

        {[
          "Architecture",
          "Authentication",
          "Backend Flow",
          "Routing",
          "Dependencies",
        ].map((item) => (
          <button
            key={item}
            className="w-full border border-white/5 px-5 py-4 text-left text-sm text-zinc-400 transition hover:border-white/10 hover:text-white"
          >
            {item}
          </button>
        ))}

      </div>

    </aside>
  );
};

export default Sidebar;