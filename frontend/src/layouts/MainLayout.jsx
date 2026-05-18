import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0d1117] text-[#f0f6fc]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1d4ed820,transparent_40%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="absolute right-0 top-[300px] h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative z-10">
        <Navbar />

        {children}

        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;