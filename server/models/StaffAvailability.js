const mongoose = require("mongoose");

const staffAvailabilitySchema = new mongoose.Schema({
  staff: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  date: { type: Date, required: true },
  times: [{ type: String }], // Array of available time slots
});

module.exports = mongoose.model("StaffAvailability", staffAvailabilitySchema);
