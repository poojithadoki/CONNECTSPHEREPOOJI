import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-card">
        <h1 className="about-title">About ConnectSphere</h1>

        <p className="about-description">
          ConnectSphere is an innovative digital platform designed to bridge the gap between citizens and organizations. 
          It allows users to check staff availability across banks, hospitals, universities, and other institutions in real time.
        </p>

        <div className="about-section">
          <h2 className="about-subtitle">Our Mission</h2>
          <p className="about-description">
            To enhance transparency, reduce waiting times, and make organizational communication seamless, reliable, and user-friendly.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-subtitle">Our Vision</h2>
          <p className="about-description">
            To become the go-to platform for citizens seeking accurate, up-to-date information about organizational staff availability and institutional data.
          </p>
        </div>

        <div className="about-section">
          <h2 className="about-subtitle">Why Choose ConnectSphere?</h2>
          <ul className="about-features">
            <li>Real-time staff availability updates across multiple organizations.</li>
            <li>Notifications and alerts for schedule changes and updates.</li>
            <li>Comprehensive institutional data for better decision-making.</li>
            <li>Secure, reliable, and easy-to-use platform for everyone.</li>
          </ul>
        </div>

        <Link to="/" className="about-back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
