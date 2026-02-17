import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UserDashboard.css";

const UserDashboard = () => {
  const [staffList, setStaffList] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [selectedStaff, setSelectedStaff] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Fetch staff
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/user/stafflist", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setStaffList(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) fetchStaff();
  }, [token]);

  // Fetch notifications
  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const res = await fetch(
          "http://localhost:5000/api/appointments/notifications",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (token) fetchNotifications();
  }, [token]);

  // Request Appointment
  const handleRequest = async () => {
    if (!selectedStaff || !date || !time) {
      setMessage("All fields are required");
      return;
    }

    try {
      const res = await fetch(
        "http://localhost:5000/api/appointments/request",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            staffId: selectedStaff,
            date,
            time,
          }),
        }
      );

      const data = await res.json();
      setMessage(data.message);

      setSelectedStaff("");
      setDate("");
      setTime("");
    } catch (err) {
      setMessage("Error requesting appointment",err);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">ConnectSphere</h2>
        <ul>
          <li className="active">Dashboard</li>
          <li>Appointments</li>
          <li>Profile</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        {/* Top Navbar */}
        <div className="topbar">
          <h3>Welcome back, {user?.name}</h3>

          <div className="profile-section">
            <div
              className="profile-circle"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              {user?.name?.charAt(0).toUpperCase()}
            </div>

            {dropdownOpen && (
              <div className="dropdown-menu">
                <p>{user?.email}</p>
                <hr />
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        </div>

        {/* Cards */}
        <div className="card-container">
          <div className="card">
            <h4>Total Staff</h4>
            <p>{staffList.length}</p>
          </div>

          <div className="card">
            <h4>Accepted Appointments</h4>
            <p>{appointments.length}</p>
          </div>
        </div>

        {/* Appointment Section */}
        <div className="appointment-section">
          <h3>Request Appointment</h3>

          <div className="form-row">
            <select
              value={selectedStaff}
              onChange={(e) => setSelectedStaff(e.target.value)}
            >
              <option value="">Select Staff</option>
              {staffList.map((staff) => (
                <option key={staff._id} value={staff._id}>
                  {staff.name}
                </option>
              ))}
            </select>

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />

            <button onClick={handleRequest}>Request</button>
          </div>

          {message && <p className="message">{message}</p>}
        </div>

        {/* Notifications */}
        <div className="notifications-section">
          <h3>Accepted Appointments</h3>

          {loading ? (
            <p>Loading...</p>
          ) : appointments.length === 0 ? (
            <p>No accepted appointments yet.</p>
          ) : (
            appointments.map((appointment) => (
              <div key={appointment._id} className="notification-card">
                <p><strong>Staff:</strong> {appointment.staff?.name}</p>
                <p><strong>Date:</strong> {new Date(appointment.date).toLocaleDateString()}</p>
                <p><strong>Time:</strong> {appointment.time}</p>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
