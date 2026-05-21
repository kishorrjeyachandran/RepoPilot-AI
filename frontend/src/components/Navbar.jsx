import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 top-0 z-50 w-full"
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-8 py-7">
        {/* LEFT */}
        <div className="flex items-center gap-5">
          {/* Motion style bars */}
          <div className="flex gap-[4px]">
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
            <div className="h-5 w-[3px] bg-[#f5d90a]" />
          </div>

          <div>
            <h1 className="text-[19px] font-semibold tracking-[-0.03em] text-white">
              RepoPilot
            </h1>

            <p className="mono mt-[2px] text-[10px] uppercase tracking-[0.22em] text-zinc-600">
              AI Repository Workspace
            </p>
          </div>
        </div>

        {/* CENTER */}
        <div className="mono hidden items-center gap-10 text-[11px] uppercase tracking-[0.22em] text-zinc-600 xl:flex">
          <button className="transition hover:text-white">
            Analysis
          </button>

          <button className="transition hover:text-white">
            Architecture
          </button>

          <button className="transition hover:text-white">
            Intelligence
          </button>

          <button className="transition hover:text-white">
            Docs
          </button>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <div className="mono hidden text-[11px] uppercase tracking-[0.22em] text-zinc-700 xl:block">
            v1.0.0
          </div>

          <button className="mono border border-white/10 bg-white/[0.02] px-6 py-4 text-[11px] uppercase tracking-[0.22em] text-white transition duration-300 hover:border-[#f5d90a] hover:text-[#f5d90a]">
            Analyze Repo
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;