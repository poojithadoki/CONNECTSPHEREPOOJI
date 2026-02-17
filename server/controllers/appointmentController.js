const Appointment = require("../models/Appointment");
const StaffAvailability = require("../models/StaffAvailability");
const User = require("../models/User");

// User: Request appointment
exports.requestAppointment = async (req, res) => {
  try {
    const { staffId, date, time } = req.body;

    const staffAvailable = await StaffAvailability.findOne({ staff: staffId, date });
    if (!staffAvailable || !staffAvailable.times.includes(time)) {
      return res.status(400).json({ message: "Selected time is not available" });
    }

    const appointment = new Appointment({
      user: req.user._id,
      staff: staffId,
      date,
      time,
    });

    await appointment.save();
    res.status(201).json({ message: "Appointment requested successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Staff: Update appointment status
exports.updateAppointmentStatus = async (req, res) => {
  try {
    const { appointmentId, status } = req.body;

    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({ message: "Appointment not found" });

    appointment.status = status;
    await appointment.save();
    res.json({ message: "Appointment updated" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// User: Get notifications (accepted appointments)
exports.getUserNotifications = async (req, res) => {
  try {
    const notifications = await Appointment.find({ user: req.user._id, status: "accepted" })
      .populate("staff", "name email")
      .sort({ createdAt: -1 });

    res.json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Staff: Get appointments for management
exports.getStaffAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find({ staff: req.user._id, status: "pending" })
      .populate("user", "name email")
      .sort({ date: 1 });

    res.json(appointments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
