// src/pages/UserDashboard.jsx
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "../styles/User.css";

const User = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="page-container">
      <h1>User Dashboard</h1>
      <p>Welcome, {user.username}</p>
      <button onClick={logout}>Logout</button>

      <section>
        <h2>Check Staff Availability</h2>
        <p>Search or filter staff availability here...</p>
      </section>
    </div>
  );
};

export default User;
