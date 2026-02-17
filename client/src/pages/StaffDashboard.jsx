import { useState, useEffect } from "react";
import "../styles/StaffDashboard.css";


const StaffDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState("");
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/appointments/staff", {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch appointments");
        }

        const data = await res.json();
        setAppointments(data);
      } catch (err) {
        console.error(err);
      }
    };

    if (token) {
      fetchAppointments();
    }
  }, [token]);

  const handleStatus = async (id, status) => {
    try {
      const res = await fetch("http://localhost:5000/api/appointments/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ appointmentId: id, status }),
      });

      const data = await res.json();
      setMessage(data.message);
      setAppointments(prev => prev.filter(a => a._id !== id));
    } catch (err) {
      console.error(err);
      setMessage("Error updating appointment");
    }
  };

  return (
    <div className="dashboard-container">
      <h2>Staff Dashboard</h2>

      {appointments.length === 0 ? (
        <p>No pending appointments</p>
      ) : (
        appointments.map(a => (
          <div key={a._id} className="appointment-card">
            <p>User: {a.user?.name}</p>
            <p>Email: {a.user?.email}</p>
            <p>Date: {new Date(a.date).toLocaleDateString()}</p>
            <p>Time: {a.time}</p>

            <button onClick={() => handleStatus(a._id, "accepted")}>
              Accept
            </button>

            <button onClick={() => handleStatus(a._id, "rejected")}>
              Reject
            </button>
          </div>
        ))
      )}

      {message && <p>{message}</p>}
    </div>
  );
};

export default StaffDashboard;
