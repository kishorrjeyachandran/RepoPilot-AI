import { useState } from "react";
import { BrainCircuit, SendHorizonal } from "lucide-react";

const initialMessages = [
  {
    role: "ai",
    text: "Hi! Ask me anything about this repository.",
  },
];

const AIChatPanel = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const aiMessage = {
      role: "ai",
      text: "This repository uses a scalable React architecture with reusable components and modern frontend tooling.",
    };

    setMessages((prev) => [...prev, userMessage]);

    setInput("");

    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
    }, 700);
  };

  return (
    <aside className="hidden w-[380px] border-l border-[#21262d] bg-[#0d1117] 2xl:block">
      <div className="border-b border-[#21262d] p-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#30363d] bg-[#161b22]">
            <BrainCircuit className="text-blue-400" />
          </div>

          <div>
            <h2 className="font-semibold text-white">
              Repo AI Chat
            </h2>

            <p className="text-sm text-[#8b949e]">
              Ask questions about the repository
            </p>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-97px)] flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto p-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`max-w-[90%] rounded-2xl p-4 text-sm leading-relaxed ${
                message.role === "user"
                  ? "ml-auto bg-blue-600 text-white"
                  : "border border-[#30363d] bg-[#161b22] text-[#c9d1d9]"
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="border-t border-[#21262d] p-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Ask about this repository..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 rounded-xl border border-[#30363d] bg-[#161b22] px-4 py-3 text-sm outline-none focus:border-blue-500"
            />

            <button
              onClick={handleSend}
              className="flex items-center justify-center rounded-xl bg-blue-600 px-4 hover:bg-blue-500"
            >
              <SendHorizonal size={18} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AIChatPanel;