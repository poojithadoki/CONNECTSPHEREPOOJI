const express = require("express");
const router = express.Router();
const { getUserDashboard, getStaffList } = require("../controllers/userController");

// User dashboard
router.get("/dashboard", getUserDashboard);

// Get all staff list
router.get("/stafflist", getStaffList);

module.exports = router;
