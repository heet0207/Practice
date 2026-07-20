import React from "react";

function getInitials(name) {
  return name
    .replace("Dr. ", "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function DoctorCard({ doctor }) {
  return (
    <div className="card doctor-card">
      <div className="doctor-avatar">{getInitials(doctor.name)}</div>
      <div className="doctor-info">
        <h3>{doctor.name}</h3>
        <p>{doctor.specialization}</p>
      </div>
    </div>
  );
}

export default DoctorCard;
