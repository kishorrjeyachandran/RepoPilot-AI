// src/layouts/DashboardLayout.jsx

import Sidebar from "../components/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <main className="flex min-h-screen bg-[#050505] text-white">
      <Sidebar />

      <div className="flex-1 overflow-hidden">
        {children}
      </div>
    </main>
  );
};

export default DashboardLayout;