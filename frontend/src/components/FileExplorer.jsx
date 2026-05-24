import { useMemo, useState } from "react";

import {
  Folder,
  FileCode,
  Search,
} from "lucide-react";

const FileExplorer = ({
  fileTree,
  onFileSelect,
}) => {
  const [query, setQuery] =
    useState("");

  // Filtered files
  const filteredFiles = useMemo(() => {
    if (!query.trim()) return fileTree;

    return fileTree.filter((file) =>
      file.path
        .toLowerCase()
        .includes(query.toLowerCase())
    );
  }, [query, fileTree]);

  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <div className="flex items-center justify-between">
          <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
            FILE EXPLORER
          </p>

          <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
            {filteredFiles?.length || 0} FILES
          </p>
        </div>

        {/* Search */}
        <div className="relative mt-5">
          <Search
            size={14}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-700"
          />

          <input
            type="text"
            value={query}
            onChange={(e) =>
              setQuery(e.target.value)
            }
            placeholder="Search files..."
            className="mono w-full border border-white/5 bg-[#080808] py-4 pl-11 pr-4 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-700"
          />
        </div>
      </div>

      {/* Files */}
      <div className="max-h-[600px] overflow-y-auto p-4">
        <div className="space-y-1">
          {filteredFiles?.map(
            (file, index) => (
              <button
                key={`${file.path}-${index}`}
                onClick={() =>
                  file.type === "blob" &&
                  onFileSelect(file.path)
                }
                className="mono flex w-full items-center gap-3 rounded-md border border-transparent px-4 py-3 text-left text-xs uppercase tracking-[0.15em] text-zinc-500 transition hover:border-white/5 hover:bg-white/[0.02]"
              >
                {file.type === "tree" ? (
                  <Folder size={15} />
                ) : (
                  <FileCode size={15} />
                )}

                <span className="truncate">
                  {file.path}
                </span>
              </button>
            )
          )}

          {filteredFiles?.length === 0 && (
            <div className="flex h-[200px] items-center justify-center">
              <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-700">
                No files found
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;