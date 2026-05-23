import {
  useEffect,
  useRef,
  useState,
} from "react";

import { motion } from "framer-motion";

const AIChat = ({ repoData }) => {
  const [question, setQuestion] =
    useState("");

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(false);

  const bottomRef = useRef(null);

  // Load previous chat history
  useEffect(() => {
    loadChatHistory();
  }, []);

  // Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const loadChatHistory = async () => {
    try {
      if (!repoData.sessionId) return;

      const res = await fetch(
        `http://localhost:5000/api/sessions/${repoData.sessionId}`
      );

      const data = await res.json();

      setMessages(data.chatHistory || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAsk = async () => {
    if (!question.trim()) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    // Add user message instantly
    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/api/chat",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            question,
            repoData,
          }),
        }
      );

      const data = await res.json();

      // Add AI response
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);

      setQuestion("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="border border-white/5 bg-black">
      {/* Header */}
      <div className="border-b border-white/5 px-6 py-5">
        <p className="mono text-xs uppercase tracking-[0.22em] text-zinc-600">
          AI REPOSITORY CHAT
        </p>
      </div>

      {/* Messages */}
      <div className="max-h-[600px] overflow-y-auto p-6">
        <div className="space-y-6">
          {messages.length === 0 && (
            <div className="border border-dashed border-white/5 bg-[#080808] p-6">
              <p className="text-sm leading-relaxed text-zinc-600">
                Ask questions about this repository.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Explain architecture",
                  "How does routing work?",
                  "What frameworks are used?",
                  "Explain dependencies",
                ].map((item) => (
                  <button
                    key={item}
                    onClick={() =>
                      setQuestion(item)
                    }
                    className="mono border border-white/5 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-zinc-500 transition hover:border-[#f5d90a] hover:text-white"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.2,
              }}
              className={`max-w-[92%] border px-5 py-4 ${
                msg.role === "user"
                  ? "ml-auto border-[#f5d90a]/20 bg-[#f5d90a]/5"
                  : "border-white/5 bg-[#080808]"
              }`}
            >
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                {msg.role}
              </p>

              <p className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {msg.content}
              </p>
            </motion.div>
          ))}

          {loading && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="max-w-[92%] border border-white/5 bg-[#080808] px-5 py-4"
            >
              <p className="mono mb-3 text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                assistant
              </p>

              <div className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a]" />
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a] delay-75" />
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#f5d90a] delay-150" />
              </div>
            </motion.div>
          )}

          <div ref={bottomRef} />
        </div>
      </div>

      {/* Input */}
      <div className="border-t border-white/5 p-5">
        <div className="flex gap-4">
          <input
            type="text"
            value={question}
            onChange={(e) =>
              setQuestion(e.target.value)
            }
            onKeyDown={(e) =>
              e.key === "Enter" &&
              handleAsk()
            }
            placeholder="Ask about the repository..."
            className="mono flex-1 border border-white/5 bg-[#080808] px-5 py-4 text-xs uppercase tracking-[0.18em] text-white outline-none placeholder:text-zinc-700"
          />

          <button
            onClick={handleAsk}
            disabled={loading}
            className="mono min-w-[120px] bg-[#f5d90a] px-7 text-xs uppercase tracking-[0.18em] text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? "Thinking"
              : "Ask"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;