import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UserNavbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const username = localStorage.getItem("username") || "User";

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div></div>

      <div className="profile-section">
        <div className="profile" onClick={() => setOpen(!open)}>
          👤 {username}
        </div>

        {open && (
          <div className="dropdown">
            <p>My Profile</p>
            <p>Settings</p>
            <p className="logout" onClick={handleLogout}>
              Logout
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserNavbar;
