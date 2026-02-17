import { NavLink } from "react-router-dom";

function Sidebar({ role, closeSidebar }) {
  const menu = {
    admin: [
      { name: "Dashboard", path: "/admin" },
      { name: "Manage Users", path: "/admin/users" },
      { name: "Reports", path: "/admin/reports" },
      { name: "Settings", path: "/admin/settings" },
    ],
    staff: [
      { name: "Dashboard", path: "/staff" },
      { name: "Assigned Requests", path: "/staff/requests" },
      { name: "Approvals", path: "/staff/approvals" },
    ],
    user: [
      { name: "Dashboard", path: "/user" },
      { name: "My Requests", path: "/user/requests" },
      { name: "Upload Docs", path: "/user/upload" },
    ],
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div>
      <h2 style={{ marginBottom: "40px" }}>ConnectSphere</h2>
      {menu[role]?.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          onClick={closeSidebar}
          style={({ isActive }) => ({
            display: "block",
            padding: "10px 15px",
            borderRadius: "8px",
            marginBottom: "10px",
            background: isActive ? "#2563eb" : "transparent",
            color: "white",
          })}
        >
          {item.name}
        </NavLink>
      ))}

      <button
        onClick={handleLogout}
        style={{
          marginTop: "40px",
          background: "#10b981",
          color: "white",
          padding: "10px 15px",
          borderRadius: "8px",
          width: "100%",
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;
