import { useEffect, useState } from "react";

import API_BASE_URL from "../config";

import Header from "../components/Header";
import SummaryCard from "../components/SummaryCard";
import StatusCard from "../components/StatusCard";
import RecommendationCard from "../components/RecommendationCard";
import SystemInfoCard from "../components/SystemInfoCard";

function Dashboard() {
  const [systemData, setSystemData] = useState(null);

  const runDiagnostics = () => {
    fetch(`${API_BASE_URL}/api/system/diagnostics`)
      .then((res) => res.json())
      .then((data) => setSystemData(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    runDiagnostics();
  }, []);

  if (!systemData) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white text-2xl">
        Running Diagnostics...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 p-8">

      {/* Header */}
      <div className="flex justify-between items-center mb-8">

        <Header />

        <button
          onClick={runDiagnostics}
          className="bg-blue-600 hover:bg-blue-700 transition px-5 py-3 rounded-xl text-white font-semibold"
        >
          Run New Scan
        </button>

      </div>

      {/* Summary */}
      <SummaryCard
        overallHealth={systemData.overallHealth}
        cpu={systemData.cpu}
        memory={systemData.memory}
        disk={systemData.disk}
        network={systemData.network}
      />

      {/* Diagnostics */}
      <h2 className="text-white text-2xl font-bold mt-10 mb-5">
        Diagnostics
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

        <StatusCard
          title="CPU Usage"
          value={`${systemData.cpu.usage}%`}
          status={systemData.cpu.status}
          message={systemData.cpu.message}
        />

        <StatusCard
          title="Memory Usage"
          value={`${systemData.memory.usage}%`}
          status={systemData.memory.status}
          message={systemData.memory.message}
        />

        <StatusCard
          title="Disk Usage"
          value={`${systemData.disk.usage}%`}
          status={systemData.disk.status}
          message={systemData.disk.message}
        />

        <StatusCard
          title="Network"
          value={systemData.network.interface}
          status={systemData.network.status}
          message={systemData.network.message}
        />

        <StatusCard
          title="Services"
          value={systemData.services.status}
          status={systemData.services.status}
          message="Critical services are being monitored."
        />

      </div>

      {/* Recommendations */}
      <div className="mt-10">

        <RecommendationCard
          recommendations={systemData.recommendations}
        />

      </div>

      {/* System Information */}
      <div className="mt-10">

        <SystemInfoCard
          hostname={systemData.system.hostname}
          platform={systemData.system.platform}
          architecture={systemData.system.architecture}
          ip={systemData.network.ip}
        />

      </div>

    </div>
  );
}

export default Dashboard;