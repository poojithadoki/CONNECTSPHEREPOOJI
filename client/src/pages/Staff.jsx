import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/Staff.css";

const Staff = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user || user.role !== "staff") {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="staff-container">
      <div className="staff-header">
        <div>
          <h1>Staff Dashboard</h1>
          <p>
            Welcome, <span className="highlight">{user?.name}</span> (Staff)
          </p>
        </div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>

      <div className="staff-cards">
        <div className="staff-card">
          <h3>Update Availability</h3>
          <p>Mark yourself as available or unavailable for today.</p>
        </div>

        <div className="staff-card">
          <h3>View Assignments</h3>
          <p>Check tasks or assignments assigned to you.</p>
        </div>
      </div>
    </div>
  );
};

export default Staff;
