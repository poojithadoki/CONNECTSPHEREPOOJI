import { Link } from "react-router-dom";
import "../styles/Services.css";

const servicesData = [
  {
    title: "Check Staff Availability",
    description:
      "Quickly view the availability status of staff and workers in different organizations such as hospitals, banks, and universities. Ensure you know who is available at a glance.",
  },
  {
    title: "Notifications",
    description:
      "Receive instant notifications for staff status changes, upcoming schedules, and important updates. Stay informed without constantly checking manually.",
  },
  {
    title: "Institution Data",
    description:
      "Access detailed information about institutions including contact details, staff count, departments, and other relevant data for effective planning and coordination.",
  },
  {
    title: "Advanced Search",
    description:
      "Search for staff or institutions quickly using filters such as location, department, or role. Find the right information in seconds.",
  },
  {
    title: "Reports & Analytics",
    description:
      "Generate insightful reports about staff availability and institution activity. Make data-driven decisions efficiently.",
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1 className="services-title">Our Services</h1>
      <p className="services-intro">
        ConnectSphere is designed to simplify organizational coordination by providing clear, detailed, and up-to-date information. 
        Here are the key services we offer:
      </p>

      <div className="services-grid">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>

      <Link to="/" className="back-button">
        Go Back
      </Link>
    </div>
  );
};

export default Services;
