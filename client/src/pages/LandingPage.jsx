// src/pages/LandingPage.jsx
import { useNavigate } from "react-router-dom";
import "../styles/LandingPage.css";
import logoImage from "../assets/connect_sphere.png"; // Your logo image

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-container" onClick={() => navigate("/")}>
          <img src={logoImage} alt="ConnectSphere Logo" className="logo-img" />
          <span className="logo-text">ConnectSphere</span>
        </div>

        <div className="nav-links">
          <button onClick={() => navigate("/services")} className="nav-btn">
            Services
          </button>
          <button onClick={() => navigate("/about")} className="nav-btn">
            About
          </button>
          <button onClick={() => navigate("/location")} className="nav-btn">
            Location
          </button>
          <button onClick={() => navigate("/register")} className="nav-btn">
            Register
          </button>
          <button onClick={() => navigate("/login")} className="nav-btn-primary">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="hero-title">
            Connect Citizens and Organizations <br /> Seamlessly
          </h1>
          <p className="hero-desc">
            ConnectSphere is your all-in-one platform to manage requests,
            approvals, and verifications efficiently and securely.
          </p>
          <div className="hero-buttons">
            <button
              onClick={() => navigate("/login")}
              className="hero-btn-primary"
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/services")}
              className="hero-btn-secondary"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className="hero-image-container">
          <img
            src={logoImage}
            alt="Illustration"
            className="hero-image"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Explore Our Features</h2>

        <div className="features-grid">
          <FeatureCard
            title="Service"
            desc="View and manage our services efficiently."
            onClick={() => navigate("/service")}
          />
          <FeatureCard
            title="About"
            desc="Learn more about ConnectSphere and our mission."
            onClick={() => navigate("/about")}
          />
          <FeatureCard
            title="Location"
            desc="Find offices or centers near you."
            onClick={() => navigate("/location")}
          />
          <FeatureCard
            title="Notifications"
            desc="Check your latest updates and alerts."
            onClick={() => navigate("/register")}
          />
          <FeatureCard
            title="Login"
            desc="Access your account securely."
            onClick={() => navigate("/login")}
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 ConnectSphere. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

/* Feature Card Component */
const FeatureCard = ({ title, desc, onClick }) => (
  <div className="feature-card" onClick={onClick}>
    <h3>{title}</h3>
    <p>{desc}</p>
  </div>
);

export default LandingPage;
