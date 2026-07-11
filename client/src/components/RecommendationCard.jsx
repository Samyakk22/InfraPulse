function RecommendationCard({ recommendations }) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-lg">

      <h2 className="text-xl text-white font-bold mb-5">
        Recommendations
      </h2>

      <ul className="space-y-3">

        {recommendations.map((item, index) => (
          <li
            key={index}
            className="text-slate-300 flex gap-2"
          >
            <span>•</span>
            <span>{item}</span>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default RecommendationCard;