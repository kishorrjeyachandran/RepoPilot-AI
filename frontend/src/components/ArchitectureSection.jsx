const architecture = [
  {
    title: "Frontend",
    desc: "React frontend using reusable UI components and responsive layouts.",
  },
  {
    title: "Backend",
    desc: "Express-based API handling business logic and repository analysis.",
  },
  {
    title: "AI Layer",
    desc: "Gemini-powered repository understanding and insight generation.",
  },
];

const ArchitectureSection = () => {
  return (
    <div className="grid gap-6 xl:grid-cols-3">
      {architecture.map((item) => (
        <div
          key={item.title}
          className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-6"
        >
          <h3 className="mb-4 text-2xl font-semibold text-white">
            {item.title}
          </h3>

          <p className="leading-relaxed text-[#c9d1d9]">
            {item.desc}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ArchitectureSection;