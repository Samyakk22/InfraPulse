const os = require("os");
const si = require("systeminformation");
const cpuCheck = require("../services/diagnostics/cpuCheck");
const memoryCheck = require("../services/diagnostics/memoryCheck");
const diskCheck = require("../services/diagnostics/diskCheck");
const networkCheck = require("../services/diagnostics/networkCheck");
const healthScore = require("../services/diagnostics/healthScore");
const recommendationEngine = require("../services/diagnostics/recommendationEngine");
const serviceCheck = require("../services/diagnostics/serviceCheck");

const getDiagnostics = async (req, res) => {
    try {
        // CPU
        const cpuLoad = await si.currentLoad();

        // Memory
        const mem = await si.mem();
        // Disk
        const disks = await si.fsSize();
        // Network
        const networkInterfaces = await si.networkInterfaces();

        // Uptime
        const uptime = os.uptime();

        const days = Math.floor(uptime / (24 * 3600));
        const hours = Math.floor((uptime % (24 * 3600)) / 3600);
        const minutes = Math.floor((uptime % 3600) / 60);

        const cpu = cpuCheck(cpuLoad.currentLoad);

const memory = memoryCheck(
    mem.used,
    mem.total
);

const disk = diskCheck(
    disks[0].used,
    disks[0].size
);

const network = networkCheck({
    interface: networkInterfaces[0]?.iface || "Unknown",
    ip: networkInterfaces[0]?.ip4 || "Unavailable"
});

const overallHealth = healthScore({
    cpu,
    memory,
    disk,
    network
});

const recommendations = recommendationEngine({
    cpu,
    memory,
    disk,
    network
});

const services = serviceCheck([
    {
        name: "Application",
        running: true
    },
    {
        name: "SSH",
        running: true
    },
    {
        name: "Docker",
        running: true
    }
]);

       res.json({

    overallHealth,

    recommendations,

    cpu,

    memory,

    disk,

    network,

    services,

    system: {
        hostname: os.hostname(),
        platform: os.platform(),
        architecture: os.arch(),
        uptime: `${days}d ${hours}h ${minutes}m`
    }

});
    } catch (error) {
        console.error(error);

        res.status(500).json({
            message: "Failed to fetch system diagnostics."
        });
    }
};

module.exports = {
    getDiagnostics
};