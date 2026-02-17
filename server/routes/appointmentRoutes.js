const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  requestAppointment,
  updateAppointmentStatus,
  getUserNotifications,
  getStaffAppointments,
} = require("../controllers/appointmentController");

// User requests appointment
router.post("/request", protect(["user"]), requestAppointment);

// Staff updates appointment
router.put("/update", protect(["staff"]), updateAppointmentStatus);

// Get user notifications
router.get("/notifications", protect(["user"]), getUserNotifications);

// Staff sees pending appointments
router.get("/staff", protect(["staff"]), getStaffAppointments);

module.exports = router;
