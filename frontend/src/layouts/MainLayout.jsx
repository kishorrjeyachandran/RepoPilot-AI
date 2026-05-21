import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Noise */}
      <div className="noise" />

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#f5d90a]/[0.03] blur-[120px]" />

      <Navbar />

      {children}
    </main>
  );
};

export default MainLayout;