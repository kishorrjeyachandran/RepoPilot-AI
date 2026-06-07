import { useState } from "react";

import ChatInput from "./ChatInput";
import MessageBubble from "./MessageBubble";

import {
  answerQuestion,
} from "../../services/repositoryAssistant";

const actions = [
  "Explain architecture",
  "Important files",
  "Dependencies",
  "Folder structure",
  "Backend flow",
  "Authentication",
];

const QuickActions = ({
  repoData,
}) => {
  const [messages, setMessages] =
    useState([]);

  const askQuestion =
    async (question) => {
      const reply =
        await answerQuestion(
          question
        );

      setMessages(
        (prev) => [
          ...prev,
          {
            role: "user",
            content:
              question,
          },
          {
            role:
              "assistant",
            content: reply,
          },
        ]
      );
    };

  return (
    <div className="mt-12">

      <div className="mb-10 border border-white/5 bg-white/[0.02] p-6">

        <h2 className="text-4xl font-semibold">
          {repoData.name}
        </h2>

        <p className="mt-4 text-zinc-500">
          {
            repoData.description
          }
        </p>

      </div>

      <div className="mb-10 flex flex-wrap gap-3">

        {actions.map(
          (action) => (
            <button
              key={action}
              onClick={() =>
                askQuestion(
                  action
                )
              }
              className="border border-white/5 px-4 py-3 transition hover:border-white/15"
            >
              {action}
            </button>
          )
        )}

      </div>

      <div className="space-y-4">

        {messages.map(
          (
            message,
            index
          ) => (
            <MessageBubble
              key={index}
              role={
                message.role
              }
              content={
                message.content
              }
            />
          )
        )}

      </div>

      <ChatInput
        onSend={
          askQuestion
        }
      />

    </div>
  );
};

export default QuickActions;