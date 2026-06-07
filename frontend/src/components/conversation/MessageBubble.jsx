const MessageBubble = ({
  role,
  content,
}) => {
  const user =
    role === "user";

  return (
    <div
      className={`max-w-3xl rounded-xl border p-5 ${
        user
          ? "ml-auto border-white/10 bg-white/[0.08]"
          : "border-white/5 bg-white/[0.03]"
      }`}
    >
      <p className="mono mb-3 text-[10px] uppercase tracking-[0.25em] text-zinc-500">
        {role}
      </p>

      <p className="whitespace-pre-wrap leading-relaxed text-zinc-300">
        {content}
      </p>
    </div>
  );
};

export default MessageBubble;