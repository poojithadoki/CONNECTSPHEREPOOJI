const User = require("../models/User");

// Get all staff
exports.getAllStaff = async (req, res) => {
  try {
    const staff = await User.find({ role: "staff" }).select("-password");
    res.status(200).json(staff);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};

// Delete staff
exports.deleteStaff = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Staff deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
};
