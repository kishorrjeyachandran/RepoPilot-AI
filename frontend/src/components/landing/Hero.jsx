import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import BackgroundGlow from "./BackgroundGlow";

const Hero = () => {
  const navigate =
    useNavigate();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">

      <BackgroundGlow />

      <div className="relative z-10 max-w-7xl text-center">

        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="mono mb-8 text-xs uppercase tracking-[0.4em] text-zinc-500"
        >
          REPOSITORY INTELLIGENCE
        </motion.p>

        <motion.h1
          initial={{
            opacity: 0,
            y: 40,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-6xl font-semibold leading-[0.9] tracking-tight text-white md:text-8xl"
        >
          Understand
          <br />
          any repository
          <br />
          through conversation.
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
          }}
          className="mx-auto mt-10 max-w-3xl text-lg leading-relaxed text-zinc-500"
        >
          Architecture.
          Dependencies.
          Backend flow.
          Authentication.

          All through a natural conversation.
        </motion.p>

        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
          }}
          onClick={() =>
            navigate(
              "/conversation"
            )
          }
          className="mono mt-14 inline-flex items-center gap-3 border border-white/10 px-8 py-4 uppercase tracking-[0.25em] transition hover:bg-white hover:text-black"
        >
          Start Conversation

          <ArrowRight
            size={16}
          />
        </motion.button>

      </div>
    </section>
  );
};

export default Hero;