import React from "react";

function DoctorCard({ doctor }) {
  return (
    <div className="card">
      <h3>{doctor.name}</h3>
      <p>Specialization: {doctor.specialization}</p>
    </div>
  );
}

export default DoctorCard;
