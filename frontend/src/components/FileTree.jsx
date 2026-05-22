// src/components/FileTree.jsx

import {
  Folder,
  FileCode,
} from "lucide-react";

const files = [
  {
    type: "folder",
    name: "app",
  },
  {
    type: "folder",
    name: "components",
  },
  {
    type: "folder",
    name: "lib",
  },
  {
    type: "file",
    name: "layout.tsx",
  },
  {
    type: "file",
    name: "page.tsx",
  },
  {
    type: "file",
    name: "next.config.js",
  },
];

const FileTree = () => {
  return (
    <div className="border border-white/5 bg-black p-7">
      <p className="mono mb-7 text-xs uppercase tracking-[0.22em] text-zinc-600">
        FILE STRUCTURE
      </p>

      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file.name}
            className="mono flex items-center gap-4 border border-transparent px-4 py-3 text-xs uppercase tracking-[0.18em] text-zinc-500 transition hover:border-white/5 hover:bg-white/[0.02]"
          >
            {file.type === "folder" ? (
              <Folder size={16} />
            ) : (
              <FileCode size={16} />
            )}

            <span>{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FileTree;