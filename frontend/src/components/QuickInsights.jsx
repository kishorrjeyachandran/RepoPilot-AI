const QuickInsights = ({
  repoData,
}) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {[
        [
          "Files",
          repoData.fileTree?.length || 0,
        ],

        [
          "Dependencies",
          repoData.dependencies?.length ||
            0,
        ],

        [
          "Frameworks",
          repoData.frameworks?.length || 0,
        ],

        [
          "Languages",
          repoData.languages?.length || 0,
        ],
      ].map(([label, value]) => (
        <div
          key={label}
          className="border border-white/5 bg-black p-6"
        >
          <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
            {label}
          </p>

          <p className="mt-4 text-3xl font-medium text-white">
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default QuickInsights;