function HealthCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <p className="text-gray-500">
        Overall Health
      </p>

      <h2 className="text-5xl font-bold text-green-600 mt-3">
        100%
      </h2>

      <p className="text-green-600 font-semibold mt-2">
        Healthy
      </p>
    </div>
  );
}

export default HealthCard;