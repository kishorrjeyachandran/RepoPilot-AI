const improvements = [
  {
    category: "Performance",
    items: [
      "Implement lazy loading for large components",
      "Optimize bundle splitting for production builds",
    ],
  },
  {
    category: "Security",
    items: [
      "Add environment variable validation",
      "Implement API rate limiting middleware",
    ],
  },
  {
    category: "Scalability",
    items: [
      "Separate service and controller logic",
      "Introduce centralized state management",
    ],
  },
];

const ImprovementsSection = () => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {improvements.map((section) => (
        <div
          key={section.category}
          className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-6"
        >
          <h3 className="mb-5 text-2xl font-semibold text-white">
            {section.category}
          </h3>

          <div className="space-y-4">
            {section.items.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#30363d] bg-[#0d1117] p-4 text-sm leading-relaxed text-[#c9d1d9]"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImprovementsSection;