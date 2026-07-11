const express = require("express");
const cors = require("cors");

const systemRoutes = require("./routes/systemRoutes");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/system", systemRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "InfraPulse Backend Running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});