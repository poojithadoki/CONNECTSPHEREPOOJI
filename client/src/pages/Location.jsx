import { Link } from "react-router-dom";
import "../styles/Location.css";

// Sample location data
const locationsData = [
  {
    name: "ConnectSphere HQ",
    address: "123 Main Street, Cityville",
    mapLink: "https://www.google.com/maps?q=123+Main+Street,+Cityville",
  },
  {
    name: "Bank Office Branch",
    address: "456 Finance Ave, Moneytown",
    mapLink: "https://www.google.com/maps?q=456+Finance+Ave,+Moneytown",
  },
  {
    name: "Hospital Branch",
    address: "789 Health Blvd, Medicity",
    mapLink: "https://www.google.com/maps?q=789+Health+Blvd,+Medicity",
  },
];

const Location = () => {
  return (
    <div className="location-container">
      <div className="location-card">
        <h1 className="location-title">Our Locations</h1>
        <p className="location-description">
          ConnectSphere operates across multiple branches to ensure seamless
          access and support for citizens. Here are our main office locations:
        </p>

        <div className="location-list">
          {locationsData.map((location, index) => (
            <div className="location-item" key={index}>
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <iframe
                src={`${location.mapLink}&output=embed`}
                title={location.name}
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: "12px", marginTop: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          ))}
        </div>

        <Link to="/" className="back-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
};

export default Location;
