import { motion } from "motion/react";

const FadeWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
      }}
    >
      {children}
    </motion.div>
  );
};

export default FadeWrapper;