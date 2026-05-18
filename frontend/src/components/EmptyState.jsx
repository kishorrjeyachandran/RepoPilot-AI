import { SearchX } from "lucide-react";

const EmptyState = () => {
  return (
    <div className="flex min-h-[300px] flex-col items-center justify-center rounded-3xl border border-dashed border-[#30363d] bg-[#161b22]/40 p-10 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#30363d] bg-[#0d1117]">
        <SearchX className="text-blue-400" size={28} />
      </div>

      <h2 className="mb-3 text-2xl font-semibold text-white">
        No Repository Selected
      </h2>

      <p className="max-w-md leading-relaxed text-[#8b949e]">
        Analyze a GitHub repository to generate AI-powered explanations,
        architecture insights, and improvement suggestions.
      </p>
    </div>
  );
};

export default EmptyState;