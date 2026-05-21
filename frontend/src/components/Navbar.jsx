// src/components/Navbar.jsx

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <div>
          <h1 className="text-lg font-medium tracking-tight text-white">
            RepoPilot AI
          </h1>

          <p className="mt-1 text-sm text-zinc-500">
            AI Repository Workspace
          </p>
        </div>

        <button className="rounded-2xl border border-white/5 bg-white/[0.03] px-5 py-3 text-sm text-zinc-300 transition hover:bg-white/[0.05] hover:text-white">
          Dashboard
        </button>
      </div>
    </motion.header>
  );
};

export default Navbar;