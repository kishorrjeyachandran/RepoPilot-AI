import { useState } from "react";

import { GitBranch } from "lucide-react";
const RepoInput = ({
  onSubmit,
}) => {
  const [repoUrl, setRepoUrl] =
    useState("");

  const handleSubmit = () => {
    if (!repoUrl.trim()) return;

    onSubmit(repoUrl);
  };

  return (
    <div className="border border-white/5 bg-white/[0.02] p-6">

      <div className="flex items-center gap-4">

        <GitBranch size={18} />

        <input
          type="text"
          value={repoUrl}
          onChange={(e) =>
            setRepoUrl(
              e.target.value
            )
          }
          placeholder="https://github.com/facebook/react"
          className="flex-1 bg-transparent text-white outline-none placeholder:text-zinc-700"
        />

        <button
          onClick={
            handleSubmit
          }
          className="mono border border-white/10 px-6 py-3 text-xs uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Continue
        </button>

      </div>

    </div>
  );
};

export default RepoInput;