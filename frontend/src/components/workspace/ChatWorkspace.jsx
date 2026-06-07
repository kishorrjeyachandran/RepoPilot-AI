import Sidebar from "./Sidebar";

const ChatWorkspace = () => {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <main className="flex flex-1 items-center justify-center">

        <div className="w-full max-w-4xl px-10">

          <h2 className="text-4xl font-semibold">
            Welcome to RepoPilot
          </h2>

          <p className="mt-4 text-zinc-500">
            Paste a repository URL to begin.
          </p>

          <input
            className="mt-8 w-full border border-white/10 bg-transparent px-6 py-5 outline-none"
            placeholder="https://github.com/facebook/react"
          />

        </div>

      </main>

    </div>
  );
};

export default ChatWorkspace;