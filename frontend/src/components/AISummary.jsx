// src/components/AISummary.jsx

const AISummary = () => {
  return (
    <div className="border border-white/5 bg-black p-7">
      <p className="mono mb-6 text-xs uppercase tracking-[0.22em] text-zinc-600">
        AI SUMMARY
      </p>

      <div className="space-y-5 text-zinc-400">
        <p>
          The repository follows a scalable modular
          architecture with clear separation between UI,
          routing and rendering logic.
        </p>

        <p>
          Component abstraction and server-side rendering
          strategies indicate production-oriented engineering
          practices.
        </p>

        <p>
          The codebase demonstrates strong maintainability
          patterns and optimized developer workflows.
        </p>
      </div>
    </div>
  );
};

export default AISummary;