import {
  Folder,
  FileCode,
} from "lucide-react";

const FileExplorer = ({
  fileTree,
  onFileSelect,
}) => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          FILE EXPLORER
        </p>
      </div>

      {/* Files */}
      <div className="max-h-[500px] overflow-y-auto p-4">
        <div className="space-y-1">
          {fileTree?.map((file, index) => (
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default FileExplorer;