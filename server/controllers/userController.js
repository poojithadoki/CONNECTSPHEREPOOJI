const User = require("../models/User");

// ✅ Define getUserDashboard
const getUserDashboard = async (req, res) => {
  try {
    res.json({ message: "User dashboard data loaded successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error loading dashboard" });
  }
};

// ✅ Define getStaffList
const getStaffList = async (req, res) => {
  try {
    const staff = await User.find({ role: "staff" }).select("-password");
    res.json(staff);
  } catch (error) {
    res.status(500).json({ message: "Error fetching staff list" });
  }
};

module.exports = {
  getUserDashboard,
  getStaffList,
};
