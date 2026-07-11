const express = require("express");
const router = express.Router();

const { getDiagnostics } = require("../controllers/systemController");

router.get("/diagnostics", getDiagnostics);

module.exports = router;