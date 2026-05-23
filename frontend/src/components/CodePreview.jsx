import { motion } from "framer-motion";

const CodePreview = ({
  selectedFile,
  codeContent,
}) => {
  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          CODE PREVIEW
        </p>

        <p className="mono text-[10px] uppercase tracking-[0.18em] text-zinc-700">
          {selectedFile ||
            "NO FILE SELECTED"}
        </p>
      </div>

      {/* Code */}
      <div className="max-h-[700px] overflow-auto bg-[#050505] p-6">
        {codeContent ? (
          <motion.pre
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="mono whitespace-pre-wrap text-sm leading-relaxed text-zinc-300"
          >
            <code>{codeContent}</code>
          </motion.pre>
        ) : (
          <div className="flex h-[300px] items-center justify-center">
            <p className="mono text-xs uppercase tracking-[0.18em] text-zinc-700">
              Select a file to preview code
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CodePreview;