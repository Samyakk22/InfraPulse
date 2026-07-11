function diskCheck(usedDisk, totalDisk) {

    const usage = (usedDisk / totalDisk) * 100;

    let status = "Healthy";
    let score = 25;
    let message = "Disk usage is within normal limits.";

    if (usage >= 85 && usage < 95) {
        status = "Warning";
        score = 15;
        message = "Disk usage is high. Consider cleaning unnecessary files.";
    }

    if (usage >= 95) {
        status = "Critical";
        score = 5;
        message = "Disk usage is critically high. Immediate cleanup is recommended.";
    }

    return {
        usage: Number(usage.toFixed(2)),
        used: Number((usedDisk / 1024 / 1024 / 1024).toFixed(2)),
        total: Number((totalDisk / 1024 / 1024 / 1024).toFixed(2)),
        free: Number(((totalDisk - usedDisk) / 1024 / 1024 / 1024).toFixed(2)),
        status,
        score,
        message
    };
}

module.exports = diskCheck;