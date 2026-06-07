import { useState } from "react";

import IntroMessage from "./IntroMessage";
import RepoInput from "./RepoInput";
import LoadingSequence from "./LoadingSequence";
import QuickActions from "./QuickActions";

const ConversationLayout = () => {
  const [messages, setMessages] =
    useState([
      {
        role: "assistant",
        content:
          "Hello.\n\nI'm RepoPilot.\n\nPaste a GitHub repository URL to begin.",
      },
    ]);

  const [loading, setLoading] =
    useState(false);

  const [loaded, setLoaded] =
    useState(false);

  const handleRepository =
    (repoUrl) => {
      setMessages((prev) => [
        ...prev,
        {
          role: "user",
          content: repoUrl,
        },
      ]);

      setLoading(true);

      setTimeout(() => {
        setLoading(false);

        setLoaded(true);

        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content:
              "Repository loaded successfully.\n\nWhat would you like to understand?",
          },
        ]);
      }, 5000);
    };

  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-16">

      <div className="flex-1 space-y-6">

        {messages.map(
          (message, index) => (
            <div
              key={index}
              className={`max-w-3xl border p-6 ${
                message.role ===
                "assistant"
                  ? "border-white/5 bg-white/[0.02]"
                  : "ml-auto border-white/10 bg-white/[0.05]"
              }`}
            >
              <p className="mono mb-4 text-[10px] uppercase tracking-[0.3em] text-zinc-600">
                {message.role}
              </p>

              <p className="whitespace-pre-wrap leading-relaxed text-zinc-300">
                {message.content}
              </p>
            </div>
          )
        )}

        {loading && (
          <LoadingSequence />
        )}

        {loaded && (
          <QuickActions />
        )}

      </div>

      {!loading && !loaded && (
        <RepoInput
          onSubmit={
            handleRepository
          }
        />
      )}

    </div>
  );
};

export default ConversationLayout;