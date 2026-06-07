// src/components/workspace/ChatMessages.jsx

import MessageBubble from "./MessageBubble";

const ChatMessages = () => {
  const messages = [
    {
      role: "assistant",
      content:
        "Welcome to RepoPilot AI.\n\nPaste a GitHub repository URL to begin.",
    },
  ];

  return (
    <div className="flex-1 overflow-y-auto px-6 py-10 md:px-14">
      <div className="mx-auto flex max-w-4xl flex-col gap-8">
        {messages.map(
          (message, index) => (
            <MessageBubble
              key={index}
              role={message.role}
              content={
                message.content
              }
            />
          )
        )}
      </div>
    </div>
  );
};

export default ChatMessages;