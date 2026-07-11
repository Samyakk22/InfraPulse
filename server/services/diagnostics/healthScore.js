function healthScore(results) {

    const totalScore =
        results.cpu.score +
        results.memory.score +
        results.disk.score +
        results.network.score;

    let status = "Healthy";

    if (totalScore < 80)
        status = "Warning";

    if (totalScore < 50)
        status = "Critical";

    return {
        score: totalScore,
        status
    };
}

module.exports = healthScore;