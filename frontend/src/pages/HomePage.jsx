import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AnalyzeInput from "../components/AnalyzeInput";

const HomePage = () => {
  return (
    <main className="min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* GRID BACKGROUND */}
      <div
        className="fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        {/* NAVBAR */}
        <Navbar />

        {/* HERO */}
        <section className="mx-auto w-full max-w-[1600px] px-6 pt-10 md:px-10 xl:px-14">
          <HeroSection />
        </section>

        {/* ANALYZE */}
        <section className="mx-auto mt-10 w-full max-w-[1600px] px-6 pb-20 md:px-10 xl:px-14">
          <AnalyzeInput />
        </section>
      </div>
    </main>
  );
};

export default HomePage;