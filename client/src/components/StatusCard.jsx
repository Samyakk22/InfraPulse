function StatusCard({
  title,
  value,
  status,
  message
}) {

  const colors = {
    Healthy: "text-green-400",
    Warning: "text-yellow-400",
    Critical: "text-red-400"
  };

  const dots = {
    Healthy: "🟢",
    Warning: "🟡",
    Critical: "🔴"
  };

  return (
    <div className="bg-slate-800 rounded-2xl shadow-xl p-6 border border-slate-700 hover:border-blue-500 transition-all duration-300">

      <div className="flex justify-between items-center">

        <h3 className="text-slate-300 font-medium">
          {title}
        </h3>

        <span className={`${colors[status]} font-semibold`}>
          {dots[status]} {status}
        </span>

      </div>

      <h2 className="text-4xl text-white font-bold mt-5">
        {value}
      </h2>

      <p className="text-slate-400 mt-4 text-sm">
        {message}
      </p>

    </div>
  );
}

export default StatusCard;