import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const RepoCard = ({ repo }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group rounded-2xl border border-[#30363d] bg-[#161b22]/70 p-5 transition"
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="h-3 w-3 rounded-full bg-blue-500" />

        <ArrowUpRight
          size={18}
          className="text-[#8b949e] transition group-hover:text-white"
        />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-white">
        {repo.name}
      </h3>

      <p className="text-sm text-[#8b949e]">
        {repo.stack}
      </p>
    </motion.div>
  );
};

export default RepoCard;