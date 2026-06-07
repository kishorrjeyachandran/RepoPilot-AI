// src/components/workspace/MessageBubble.jsx

import { motion } from "framer-motion";

const MessageBubble = ({
  role,
  content,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className={`max-w-3xl border p-6 ${
        role === "assistant"
          ? "border-white/5 bg-white/[0.02]"
          : "ml-auto border-white/10 bg-white/[0.05]"
      }`}
    >
      <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
        {role}
      </p>

      <p className="whitespace-pre-wrap text-[15px] leading-relaxed text-zinc-300">
        {content}
      </p>
    </motion.div>
  );
};

export default MessageBubble;