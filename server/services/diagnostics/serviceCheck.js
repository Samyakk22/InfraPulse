function serviceCheck(services) {
    const results = [];
    let warnings = 0;

    services.forEach(service => {
        if (service.running) {
            results.push({
                name: service.name,
                status: "Running"
            });
        } else {
            warnings++;
            results.push({
                name: service.name,
                status: "Stopped"
            });
        }
    });

    return {
        status: warnings === 0 ? "Healthy" : "Warning",
        services: results
    };
}

module.exports = serviceCheck;