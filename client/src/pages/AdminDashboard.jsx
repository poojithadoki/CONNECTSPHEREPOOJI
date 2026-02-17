import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateStaffForm from "../components/admin/CreateStaff";

import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const email = localStorage.getItem("email");

  const [activeSection, setActiveSection] = useState("staff");

  // Protect Route
  useEffect(() => {
    if (!token || role !== "admin") {
      navigate("/login");
    }
  }, [navigate, token, role]);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="admin-layout">

      {/* 🔝 TOP NAVBAR */}
      <div className="top-navbar">
        <h2>Admin Dashboard</h2>

        <div className="nav-right">

          <button
            className="nav-btn"
            onClick={() => setActiveSection("create")}
          >
            + Create Staff
          </button>

          <button
            className="nav-btn"
            onClick={() => setActiveSection("notifications")}
          >
            🔔 Notifications
          </button>

          <div className="profile-dropdown">
            <span className="profile-icon">👤</span>
            <div className="dropdown-content">
              <p>{email}</p>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>

        </div>
      </div>

      {/* 📚 SIDE NAVBAR */}
      <div className="admin-body">

        <div className="side-navbar">
          <button onClick={() => setActiveSection("staff")}>
            Manage Staff
          </button>

          <button onClick={() => setActiveSection("created")}>
            Created Staff
          </button>

          <button onClick={() => setActiveSection("notifications")}>
            Manage Notifications
          </button>

          <button onClick={() => setActiveSection("password")}>
            Update Password
          </button>
        </div>

        {/* 📄 MAIN CONTENT */}
        <div className="main-content">

          {activeSection === "staff" && (
            <div>
              <h3>Staff Management</h3>
              <p>View and delete staff members.</p>
            </div>
          )}

        {activeSection === "create" && <CreateStaffForm />}


          {activeSection === "notifications" && (
            <div>
              <h3>Notifications</h3>
              <p>View staff notifications here.</p>
            </div>
          )}

          {activeSection === "password" && (
            <div>
              <h3>Update Password</h3>
              <p>Admin password update form.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
