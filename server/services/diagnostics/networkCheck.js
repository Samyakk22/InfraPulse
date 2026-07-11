function networkCheck(network) {

    let status = "Healthy";
    let score = 25;
    let message = "Network interface is available.";

    if (!network.ip || network.ip === "Unavailable") {
        status = "Critical";
        score = 0;
        message = "No active IPv4 address found.";
    }

    return {
        interface: network.interface,
        ip: network.ip,
        status,
        score,
        message
    };
}

module.exports = networkCheck;