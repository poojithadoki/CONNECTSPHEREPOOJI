import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/Admin.css";

const Admin = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="admin-container">
      <div className="admin-card">
        <div className="admin-header">
          <h1 className="admin-title">Admin Dashboard</h1>
          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>

        <p className="admin-welcome">
          Welcome, <span>{user?.username}</span> (Admin)
        </p>

        <section className="admin-section">
          <h2 className="section-title">Management Options</h2>

          <ul className="admin-options">
            <li className="option-item">Manage Users</li>
            <li className="option-item">Manage Staff</li>
            <li className="option-item">View Availability</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admin;
