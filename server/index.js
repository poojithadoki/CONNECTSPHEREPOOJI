require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const { protect } = require("./middleware/authMiddleware");

const app = express();
const PORT = process.env.PORT || 5000;

// ======================
// Connect to MongoDB
// ======================
connectDB();

// ======================
// Middleware
// ======================
app.use(express.json()); // Parse JSON requests
app.use(
  cors({
    origin: "http://localhost:5173", // Frontend origin
    credentials: true,               // Allow cookies (if needed)
  })
);

// ======================
// Routes
// ======================
app.use("/api/appointments", require("./routes/appointmentRoutes"));

app.use("/api/auth", require("./routes/authRoutes")); // Public routes

// Protected routes
app.use("/api/user", protect(["user"]), require("./routes/userRoutes"));
// app.use("/api/staff", protect(["staff"]), require("./routes/staffRoutes"));
app.use("/api/staff", require("./routes/staffRoutes"));


app.use("/api/admin", protect(["admin"]), require("./routes/adminRoutes"));

// ======================
// Test route
// ======================
app.get("/", (req, res) => res.send("ConnectSphere backend running"));

// ======================
// Error handling
// ======================

// 404 Not Found
app.use((req, res) => res.status(404).json({ message: "Route not found" }));

// Global server error
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error" });
});

// ======================
// Start server
// ======================
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
