// src/pages/DashboardPage.jsx

import Sidebar from "../components/Sidebar";
import DashboardTabs from "../components/DashboardTabs";
import AIChatPanel from "../components/AIChatPanel";

import { useAnalysis } from "../context/AnalysisContext";

const DashboardPage = () => {
  const { analysisData } = useAnalysis();

  return (
    <main className="flex min-h-screen bg-[#08090a] text-white">
      <Sidebar analysisData={analysisData} />

      <div className="flex-1 overflow-y-auto px-8 py-8">
        <DashboardTabs analysisData={analysisData} />
      </div>

      <AIChatPanel />
    </main>
  );
};

export default DashboardPage;