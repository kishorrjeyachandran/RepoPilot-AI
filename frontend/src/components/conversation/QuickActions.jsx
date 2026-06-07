const actions = [
  "Explain architecture",
  "How authentication works?",
  "Explain backend flow",
  "Find API routes",
  "Important files",
  "Folder structure",
];

const QuickActions =
  () => {
    return (
      <div>

        <h2 className="mb-8 text-3xl font-semibold">
          Repository loaded.
        </h2>

        <p className="mb-10 text-zinc-500">
          What would you like
          to understand?
        </p>

        <div className="grid gap-4 md:grid-cols-2">

          {actions.map(
            (action) => (
              <button
                key={action}
                className="border border-white/5 bg-white/[0.02] p-5 text-left transition hover:border-white/10 hover:bg-white/[0.04]"
              >
                {action}
              </button>
            )
          )}

        </div>

      </div>
    );
  };

export default QuickActions;