function cpuCheck(cpuUsage) {

    let status = "Healthy";
    let score = 25;
    let message = "CPU utilization is within normal limits.";

    if (cpuUsage >= 70 && cpuUsage < 90) {
        status = "Warning";
        score = 15;
        message = "CPU usage is high. Monitor running processes.";
    }

    if (cpuUsage >= 90) {
        status = "Critical";
        score = 5;
        message = "CPU usage is critically high.";
    }

    return {
        usage: Number(cpuUsage.toFixed(2)),
        status,
        score,
        message
    };
}

module.exports = cpuCheck;