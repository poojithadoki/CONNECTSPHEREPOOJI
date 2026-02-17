const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");
const authorizeRoles = require("../middleware/roleMiddleware");

router.get(
  "/dashboard",
  protect,
  authorizeRoles("user"),
  (req, res) => {
    res.json({ message: "User dashboard" });
  }
);

router.get(
  "/admin",
  protect,
  authorizeRoles("admin"),
  (req, res) => {
    res.json({ message: "Admin panel" });
  }
);

module.exports = router;
