import { useState } from "react";

const ChatInput = ({ onSend }) => {
  const [message, setMessage] =
    useState("");

  const handleSend = () => {
    if (!message.trim()) return;

    onSend(message);

    setMessage("");
  };

  return (
    <div className="mt-8 flex gap-4">

      <input
        value={message}
        onChange={(e) =>
          setMessage(e.target.value)
        }
        placeholder="Ask about this repository..."
        className="flex-1 border border-white/10 bg-white/[0.02] px-5 py-4 outline-none"
        onKeyDown={(e) => {
          if (e.key === "Enter")
            handleSend();
        }}
      />

      <button
        onClick={handleSend}
        className="border border-white/10 px-6 py-4 transition hover:bg-white hover:text-black"
      >
        Ask
      </button>

    </div>
  );
};

export default ChatInput;