import FeatureCard from "../components/FeatureCard";
import { features } from "../data/features";

const FeaturesSection = () => {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-blue-400">
            Features
          </p>

          <h2 className="mb-5 text-4xl font-bold leading-tight text-white md:text-5xl">
            Everything You Need To Understand Repositories Faster
          </h2>

          <p className="text-lg leading-relaxed text-[#8b949e]">
            RepoPilot AI combines repository analysis, AI intelligence,
            architecture understanding, and developer-focused insights
            into one seamless experience.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;