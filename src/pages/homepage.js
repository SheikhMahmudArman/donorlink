import React, { useState } from "react";
import "./homepage.css";

const donorsList = [
  { id: 1, name: "Fatima Rahman", bloodGroup: "A+", location: "Dhaka", lastDonation: "2 weeks ago", available: true },
  { id: 2, name: "Rafiq Ahmed", bloodGroup: "O-", location: "Chittagong", lastDonation: "1 month ago", available: true },
  { id: 3, name: "Nadia Hossain", bloodGroup: "B+", location: "Sylhet", lastDonation: "3 weeks ago", available: false },
  { id: 4, name: "Kamal Uddin", bloodGroup: "AB+", location: "Rajshahi", lastDonation: "1 week ago", available: true },
];

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

export default function Homepage() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");

  const filteredDonors =
    selectedBloodGroup === "All"
      ? donorsList
      : donorsList.filter(d => d.bloodGroup === selectedBloodGroup);

  const getInitials = (name) =>
    name.split(" ").map(n => n[0]).join("");

  return (
    <>
      <header className="header">
        <h1>Donor Link</h1>
      </header>

      <main className="main-content">
        <div className="filter">
          <select
            value={selectedBloodGroup}
            onChange={(e) => setSelectedBloodGroup(e.target.value)}
          >
            {bloodGroups.map(bg => (
              <option key={bg} value={bg}>{bg}</option>
            ))}
          </select>
        </div>

        <div className="donors-grid">
          {filteredDonors.map(donor => (
            <div key={donor.id} className="donor-card">
              <div className="donor-initials">
                {getInitials(donor.name)}
              </div>
              <h3>{donor.name}</h3>
              <p><strong>Blood:</strong> {donor.bloodGroup}</p>
              <p><strong>Location:</strong> {donor.location}</p>
              <p><strong>Last Donation:</strong> {donor.lastDonation}</p>
              <button className="contact-btn">Contact</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}