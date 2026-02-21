import React from "react";
import "./homepage.css";

function Homepage() {
  return (
    <div className="page">
      <header className="header">
        <div className="header-content">
          <div className="blood-icon">🩸</div>
          <h1>
            Save <span>Lives</span>
          </h1>
          <p>Connect with verified blood donors instantly</p>
        </div>

        <div className="wave"></div>
      </header>

      <section className="main-content">
        <div className="filter">
          <select>
            <option>All Blood Groups</option>
            <option>A+</option>
            <option>B+</option>
            <option>O+</option>
            <option>AB+</option>
          </select>
        </div>

        <div className="donors-grid">
          {[
            { name: "Rahul Kumar", group: "O+", initials: "RK" },
            { name: "Anita Sharma", group: "A+", initials: "AS" },
            { name: "Mohit Jain", group: "B+", initials: "MJ" },
          ].map((donor, index) => (
            <div className="donor-card" key={index}>
              <div className="status-dot"></div>
              <div className="donor-initials">{donor.initials}</div>
              <h3>{donor.name}</h3>
              <p className="blood-group">{donor.group}</p>
              <button className="contact-btn">
                <span>📞</span> Contact
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Homepage;