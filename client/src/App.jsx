import { Routes, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Location from "./pages/Location";
import Services from "./pages/Services";
import Register from "./pages/Register";
import Login from "./pages/Login";
//  import Admin from "./pages/Admin";
import Staff from "./pages/Staff";
import User from "./pages/User";
import NotFound from "./pages/NotFound";
import UserDashboard from "./pages/UserDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import AdminDashboard from "./pages/AdminDashboard";


// Context
import { AuthProvider } from "./context/AuthContext";

// Components
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Landing Page as Default */}
        <Route path="/" element={<LandingPage />} />

        {/* Public Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/services" element={<Services />} /> {/* Corrected plural */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
  path="/user/dashboard"
  element={
    <ProtectedRoute role="user">
      <UserDashboard />
    </ProtectedRoute>
  }
/>
<Route
  path="/staff/dashboard"
  element={
    <ProtectedRoute role="staff">
      <StaffDashboard />
    </ProtectedRoute>
  }
/>

        {/* Protected Routes */}
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute role="admin">
              <AdminDashboard/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/staff/*"
          element={
            <ProtectedRoute role="staff">
              <Staff />
            </ProtectedRoute>
          }
        />

        <Route
          path="/user/*"
          element={
            <ProtectedRoute role="user">
              <User />
            </ProtectedRoute>
          }
        />

        {/* 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
