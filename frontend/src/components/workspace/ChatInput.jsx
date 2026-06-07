// src/components/workspace/ChatInput.jsx

import {
  ArrowUp,
} from "lucide-react";

const ChatInput = () => {
  return (
    <div className="border-t border-white/5 bg-black/40 px-6 py-5 md:px-10">
      <div className="mx-auto flex max-w-4xl items-center gap-4 border border-white/5 bg-white/[0.02] px-5 py-4">
        <input
          type="text"
          placeholder="Paste GitHub repository URL or ask anything..."
          className="flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
        />

        <button className="flex h-10 w-10 items-center justify-center border border-white/10 bg-white/[0.04] transition hover:bg-white/[0.08]">
          <ArrowUp
            size={16}
          />
        </button>
      </div>
    </div>
  );
};

export default ChatInput;