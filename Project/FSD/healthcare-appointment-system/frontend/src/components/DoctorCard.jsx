import React from "react";
import { Link } from "react-router-dom";

const DoctorCard = ({ doctor }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-2">
      <h3 className="text-lg font-semibold">{doctor.name}</h3>
      <p className="text-blue-600">{doctor.specialization || "General Physician"}</p>
      <p className="text-sm text-gray-500">{doctor.experience} years experience</p>
      <Link
        to={`/book/${doctor._id}`}
        className="mt-2 bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700"
      >
        Book Appointment
      </Link>
    </div>
  );
};

export default DoctorCard;
