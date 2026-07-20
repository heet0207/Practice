import React from "react";

function AppointmentCard({ appointment, personLabel, onCancel, onConfirm }) {
  const statusClass =
    appointment.status === "Confirmed"
      ? "status-confirmed"
      : appointment.status === "Cancelled"
      ? "status-cancelled"
      : "status-pending";

  return (
    <div className="card appt-card">
      <div className="appt-info">
        <p className="appt-person">{personLabel}</p>
        <p>{appointment.date} · {appointment.time}</p>
        <span className={`status-pill ${statusClass}`}>{appointment.status}</span>
      </div>
      <div className="appt-actions">
        {onConfirm && appointment.status === "Pending" && (
          <button onClick={() => onConfirm(appointment.id)}>Confirm</button>
        )}
        {onCancel && appointment.status !== "Cancelled" && (
          <button className="btn-danger" onClick={() => onCancel(appointment.id)}>
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}

export default AppointmentCard;
