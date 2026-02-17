const express = require("express");
const router = express.Router();

const { registerStaff } = require("../controllers/authController");
const { getAllStaff, deleteStaff } = require("../controllers/staffController");
const { protect } = require("../middleware/authMiddleware");

// Admin registers staff
router.post("/register", protect(["admin"]), registerStaff);

// Admin gets all staff
router.get("/", protect(["admin"]), getAllStaff);

// Admin deletes staff
router.delete("/:id", protect(["admin"]), deleteStaff);

module.exports = router;
