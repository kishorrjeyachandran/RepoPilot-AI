import Sidebar from "../components/Sidebar";
import DashboardTabs from "../components/DashboardTabs";
import AIChatPanel from "../components/AIChatPanel";
import { useState } from "react";
import { useAnalysis } from "../context/AnalysisContext";
import FileExplanationPanel from "../components/FileExplanationPanel";

const DashboardPage = () => {
  const { analysisData } = useAnalysis();
  console.log(analysisData);
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <main className="flex min-h-screen bg-[#0d1117] text-white">
      <Sidebar
  selectedFile={selectedFile}
  setSelectedFile={setSelectedFile}
/>

      <div className="flex-1 overflow-y-auto">
  <DashboardTabs />

  <div className="px-8 pb-10">
    <FileExplanationPanel selectedFile={selectedFile} />
  </div>
</div>

      <AIChatPanel />
    </main>
  );
};

export default DashboardPage;