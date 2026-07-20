import React from "react";

function AppointmentCard({ appointment, personLabel, onCancel, onConfirm }) {
  const statusClass =
    appointment.status === "Confirmed"
      ? "status-confirmed"
      : appointment.status === "Cancelled"
      ? "status-cancelled"
      : "status-pending";

  return (
    <div className="card">
      <p>{personLabel}</p>
      <p>Date: {appointment.date}</p>
      <p>Time: {appointment.time}</p>
      <p>
        Status: <span className={statusClass}>{appointment.status}</span>
      </p>
      {onConfirm && appointment.status === "Pending" && (
        <button onClick={() => onConfirm(appointment.id)}>Confirm</button>
      )}
      {onCancel && appointment.status !== "Cancelled" && (
        <button onClick={() => onCancel(appointment.id)} style={{ marginLeft: "8px", backgroundColor: "#b91c1c" }}>
          Cancel
        </button>
      )}
    </div>
  );
}

export default AppointmentCard;
