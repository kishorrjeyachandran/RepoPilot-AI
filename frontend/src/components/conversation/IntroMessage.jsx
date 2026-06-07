import { motion } from "framer-motion";

const IntroMessage = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      className="mb-14"
    >
      <p className="mono mb-4 text-xs uppercase tracking-[0.35em] text-zinc-600">
        REPOPILOT AI
      </p>

      <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
        Hello.
      </h1>

      <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-500">
        I'm RepoPilot.

        I can help you
        understand any
        GitHub repository.

        Paste a repository
        URL to begin.
      </p>
    </motion.div>
  );
};

export default IntroMessage;