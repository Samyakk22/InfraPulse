function SummaryCard({ overallHealth, cpu, memory, disk, network }) {

  const warnings = [
    cpu.status,
    memory.status,
    disk.status,
    network.status
  ].filter(status => status === "Warning").length;

  const critical = [
    cpu.status,
    memory.status,
    disk.status,
    network.status
  ].filter(status => status === "Critical").length;

  const passed = 4 - warnings - critical;

  const color =
    overallHealth.status === "Healthy"
      ? "text-green-400"
      : overallHealth.status === "Warning"
      ? "text-yellow-400"
      : "text-red-400";

  const dot =
    overallHealth.status === "Healthy"
      ? "🟢"
      : overallHealth.status === "Warning"
      ? "🟡"
      : "🔴";

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

      <p className="text-slate-400 text-sm">
        Infrastructure Status
      </p>

      <h2 className={`text-4xl font-bold mt-3 ${color}`}>
        {dot} {overallHealth.status}
      </h2>

      <div className="grid grid-cols-3 gap-4 mt-8">

        <div>
          <p className="text-slate-400 text-sm">Passed</p>
          <h3 className="text-2xl font-bold text-green-400">
            {passed}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Warnings</p>
          <h3 className="text-2xl font-bold text-yellow-400">
            {warnings}
          </h3>
        </div>

        <div>
          <p className="text-slate-400 text-sm">Critical</p>
          <h3 className="text-2xl font-bold text-red-400">
            {critical}
          </h3>
        </div>

      </div>

    </div>
  );
}

export default SummaryCard;