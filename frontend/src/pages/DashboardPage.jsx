import Sidebar from "../components/Sidebar";
import DashboardTabs from "../components/DashboardTabs";
import AIChatPanel from "../components/AIChatPanel";

import { useAnalysis } from "../context/AnalysisContext";

const DashboardPage = () => {
  const { analysisData } = useAnalysis();

  return (
    <main className="grid-bg min-h-screen bg-[#050505] text-white">
      <div className="flex">
        <Sidebar analysisData={analysisData} />

        <div className="flex-1 overflow-y-auto px-10 py-10">
          <DashboardTabs analysisData={analysisData} />
        </div>

        <AIChatPanel />
      </div>
    </main>
  );
};

export default DashboardPage;