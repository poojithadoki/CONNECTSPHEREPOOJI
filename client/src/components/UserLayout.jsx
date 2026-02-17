import UserSidebar from "./UserSidebar";
import UserNavbar from "./UserNavbar";
import "../styles/UserDashboard.css";

function UserLayout({ children }) {
  return (
    <div className="dashboard-container">
      <UserSidebar />

      <div className="dashboard-main">
        <UserNavbar />
        <div className="dashboard-content">
          {children}
        </div>
      </div>
    </div>
  );
}

export default UserLayout;
