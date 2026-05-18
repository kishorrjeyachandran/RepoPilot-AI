import { FileCode2 } from "lucide-react";

const FileExplanationPanel = ({ selectedFile }) => {
  if (!selectedFile) {
    return (
      <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-8">
        <h2 className="mb-3 text-2xl font-semibold">
          File Explanation
        </h2>

        <p className="text-[#8b949e]">
          Select a file from the repository explorer to view AI-generated explanations.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-3xl border border-[#21262d] bg-[#161b22]/60 p-8">
      <div className="mb-6 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#30363d] bg-[#0d1117]">
          <FileCode2 className="text-blue-400" />
        </div>

        <div>
          <h2 className="text-2xl font-semibold">
            {selectedFile.name}
          </h2>

          <p className="text-sm text-[#8b949e]">
            AI-generated repository insight
          </p>
        </div>
      </div>

      <p className="leading-relaxed text-[#c9d1d9]">
        {selectedFile.explanation}
      </p>
    </div>
  );
};

export default FileExplanationPanel;