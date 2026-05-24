const HeroSection = () => {
  return (
    <section className="w-full">
      {/* TOP LABEL */}
      <div className="mb-10 flex items-center gap-6">
        <span className="mono text-sm tracking-[0.3em] text-[#f5d90a]">
          01
        </span>

        <div className="h-px flex-1 bg-white/10" />

        <span className="mono text-xs uppercase tracking-[0.35em] text-zinc-700">
          Repository Intelligence
        </span>
      </div>

      {/* TITLE */}
      <div className="max-w-[1200px]">
        <h1 className="text-[4rem] font-medium leading-[0.9] tracking-[-0.06em] text-white sm:text-[5rem] md:text-[7rem] xl:text-[9rem]">
          Understand repositories intelligently.
        </h1>

        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-zinc-500 md:text-xl">
          AI-powered repository analysis
          for modern developers.
        </p>

        {/* TAGS */}
        <div className="mt-12 flex flex-wrap gap-5">
          {[
            "React",
            "JavaScript",
            "Node",
            "AI",
          ].map((tag) => (
            <div
              key={tag}
              className="mono border border-white/5 bg-black px-5 py-3 text-xs uppercase tracking-[0.25em] text-zinc-500"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;