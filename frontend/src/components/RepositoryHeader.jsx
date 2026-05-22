// src/components/RepositoryHeader.jsx

const RepositoryHeader = ({ repoUrl }) => {
  return (
    <div className="border-b border-white/5 px-8 py-7">
      <div className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
        Repository Analysis
      </div>

      <h1 className="mt-5 text-4xl font-medium tracking-tight text-white">
        next.js
      </h1>

      <p className="mt-4 text-zinc-500">
        {repoUrl}
      </p>
    </div>
  );
};

export default RepositoryHeader;