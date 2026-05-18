import {
  FolderTree,
  Layers3,
  FileCode2,
} from "lucide-react";

import { files } from "../data/files";

const Sidebar = ({
  selectedFile,
  setSelectedFile,
  analysisData,
}) => {
  return (
    <aside className="hidden w-[320px] border-r border-[#21262d] bg-[#0d1117] xl:block">
      {/* Header */}
      <div className="border-b border-[#21262d] p-6">
        <div className="flex items-center gap-4">
          {analysisData?.avatar && (
            <img
              src={analysisData.avatar}
              alt={analysisData.owner}
              className="h-14 w-14 rounded-2xl border border-[#30363d]"
            />
          )}

          <div>
            <h2 className="mb-1 text-xl font-semibold">
              {analysisData?.name || "Repository"}
            </h2>

            <p className="text-sm text-[#8b949e]">
              {analysisData?.owner || "Unknown Owner"}
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-8 p-6">
        {/* Tech Stack */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#8b949e]">
            <Layers3 size={16} />
            Detected Stack
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              analysisData?.language || "Unknown",
              "GitHub API",
              "AI Analysis",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-[#30363d] bg-[#161b22] px-3 py-1 text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* File Explorer */}
        <div>
          <div className="mb-4 flex items-center gap-2 text-sm font-medium text-[#8b949e]">
            <FolderTree size={16} />
            Repository Structure
          </div>

          <div className="space-y-2 text-sm">
            {files.map((file) => (
              <button
                key={file.name}
                onClick={() =>
                  file.type === "file" &&
                  setSelectedFile(file)
                }
                className={`flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left transition ${
                  selectedFile?.name === file.name
                    ? "bg-blue-600/20 text-white"
                    : "text-[#8b949e] hover:bg-[#161b22]"
                }`}
              >
                {file.type === "folder" ? (
                  <FolderTree size={15} />
                ) : (
                  <FileCode2 size={15} />
                )}

                {file.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;