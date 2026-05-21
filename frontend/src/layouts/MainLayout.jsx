// src/layouts/MainLayout.jsx

import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen bg-[#08090a] text-white">
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;