import { Link } from "react-router-dom";

function UserSidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">ConnectSphere</h2>

      <ul>
        <li><Link to="/user-dashboard">Dashboard</Link></li>
        <li><Link to="#">My Requests</Link></li>
        <li><Link to="#">Organizations</Link></li>
        <li><Link to="#">Settings</Link></li>
      </ul>
    </div>
  );
}

export default UserSidebar;
