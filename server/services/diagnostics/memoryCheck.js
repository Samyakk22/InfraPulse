function memoryCheck(usedMemory, totalMemory) {

    const usage = (usedMemory / totalMemory) * 100;

    let status = "Healthy";
    let score = 25;
    let message = "Memory usage is within normal limits.";

    if (usage >= 80 && usage < 90) {
        status = "Warning";
        score = 15;
        message = "Memory usage is high. Monitor running applications.";
    }

    if (usage >= 90) {
        status = "Critical";
        score = 5;
        message = "Memory usage is critically high.";
    }

    return {
        usage: Number(usage.toFixed(2)),
        used: Number((usedMemory / 1024 / 1024 / 1024).toFixed(2)),
        total: Number((totalMemory / 1024 / 1024 / 1024).toFixed(2)),
        status,
        score,
        message
    };
}

module.exports = memoryCheck;