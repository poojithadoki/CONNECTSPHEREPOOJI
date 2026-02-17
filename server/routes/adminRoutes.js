const express = require("express");
const router = express.Router();
const { getAdminDashboard } = require("../controllers/adminController");

// ✅ Pass function reference only
router.get("/dashboard", getAdminDashboard);

module.exports = router;
