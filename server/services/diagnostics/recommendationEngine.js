function recommendationEngine(results) {

    const recommendations = [];

    // CPU
    if (results.cpu.status === "Critical") {
        recommendations.push(
            "CPU usage is critically high. Check running processes and terminate unnecessary workloads."
        );
    } else if (results.cpu.status === "Warning") {
        recommendations.push(
            "CPU usage is above the recommended threshold. Monitor active processes."
        );
    } else {
        recommendations.push(
            "CPU utilization is healthy."
        );
    }

    // Memory
    if (results.memory.status === "Critical") {
        recommendations.push(
            "Memory usage is critically high. Restart memory-intensive services or increase available memory."
        );
    } else if (results.memory.status === "Warning") {
        recommendations.push(
            "Memory usage is high. Monitor applications for possible memory leaks."
        );
    } else {
        recommendations.push(
            "Memory utilization is healthy."
        );
    }

    // Disk
    if (results.disk.status === "Critical") {
        recommendations.push(
            "Disk space is critically low. Remove unnecessary files immediately."
        );
    } else if (results.disk.status === "Warning") {
        recommendations.push(
            "Disk usage is above the warning threshold. Clean temporary files and rotate logs."
        );
    } else {
        recommendations.push(
            "Disk utilization is healthy."
        );
    }

    // Network
    if (results.network.status === "Critical") {
        recommendations.push(
            "No active network connection detected. Verify network configuration."
        );
    } else {
        recommendations.push(
            "Network connectivity verified."
        );
    }

    return recommendations;
}

module.exports = recommendationEngine;