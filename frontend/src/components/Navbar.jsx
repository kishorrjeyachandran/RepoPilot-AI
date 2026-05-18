import { GitBranch } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 border-b border-[#21262d] bg-[#0d1117]/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#30363d] bg-[#161b22]">
            <GitBranch className="text-blue-400" size={22} />
          </div>

          <div>
            <h1 className="text-lg font-semibold text-white">
              RepoPilot AI
            </h1>

            <p className="text-xs text-[#8b949e]">
              AI Repository Intelligence
            </p>
          </div>
        </div>

        <button className="rounded-xl border border-[#30363d] bg-[#161b22] px-5 py-2 text-sm font-medium text-white transition hover:border-blue-500">
          GitHub
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;