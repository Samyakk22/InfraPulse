function SystemInfoCard({
  hostname,
  platform,
  architecture,
  ip
}) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl font-bold text-white mb-6">
        System Information
      </h2>

      <div className="grid grid-cols-2 gap-6">

        <div>
          <p className="text-slate-400 text-sm">
            Hostname
          </p>

          <p className="text-white font-semibold mt-1">
            {hostname}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Platform
          </p>

          <p className="text-white font-semibold mt-1">
            {platform}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            Architecture
          </p>

          <p className="text-white font-semibold mt-1">
            {architecture}
          </p>
        </div>

        <div>
          <p className="text-slate-400 text-sm">
            IP Address
          </p>

          <p className="text-white font-semibold mt-1">
            {ip}
          </p>
        </div>

      </div>

    </div>
  );
}

export default SystemInfoCard;