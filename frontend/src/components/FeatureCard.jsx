import { motion } from "framer-motion";

const FeatureCard = ({ feature, index }) => {
  const Icon = feature.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: index * 0.08,
        duration: 0.4,
      }}
      viewport={{ once: true }}
      className="group rounded-3xl border border-[#30363d] bg-[#161b22]/70 p-6 transition hover:border-blue-500/40 hover:shadow-[0_0_30px_rgba(59,130,246,0.08)]"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#30363d] bg-[#0d1117]">
        <Icon className="text-blue-400" size={26} />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-white">
        {feature.title}
      </h3>

      <p className="leading-relaxed text-[#8b949e]">
        {feature.desc}
      </p>
    </motion.div>
  );
};

export default FeatureCard;