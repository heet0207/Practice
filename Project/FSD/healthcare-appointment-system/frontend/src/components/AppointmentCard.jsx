import React from "react";

const statusColors = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-blue-100 text-blue-700",
  completed: "bg-green-100 text-green-700",
  cancelled: "bg-red-100 text-red-700",
};

// onAction receives (id, newStatus) — pass a handler from the parent dashboard
const AppointmentCard = ({ appointment, role, onAction }) => {
  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="font-semibold">
          {role === "doctor" ? appointment.patient?.name : appointment.doctor?.name}
        </span>
        <span className={`text-xs px-2 py-1 rounded ${statusColors[appointment.status]}`}>
          {appointment.status}
        </span>
      </div>
      <p className="text-sm text-gray-600">
        {appointment.date} at {appointment.timeSlot}
      </p>
      {appointment.reason && <p className="text-sm text-gray-500">Reason: {appointment.reason}</p>}
      {appointment.notes && <p className="text-sm text-gray-500">Notes: {appointment.notes}</p>}

      {role === "doctor" && appointment.status !== "cancelled" && (
        <div className="flex gap-2 mt-2">
          {appointment.status === "pending" && (
            <button
              onClick={() => onAction(appointment._id, "confirmed")}
              className="text-sm bg-blue-600 text-white px-3 py-1 rounded"
            >
              Confirm
            </button>
          )}
          {appointment.status === "confirmed" && (
            <button
              onClick={() => onAction(appointment._id, "completed")}
              className="text-sm bg-green-600 text-white px-3 py-1 rounded"
            >
              Mark Completed
            </button>
          )}
        </div>
      )}

      {role === "patient" && ["pending", "confirmed"].includes(appointment.status) && (
        <button
          onClick={() => onAction(appointment._id, "cancelled")}
          className="text-sm bg-red-600 text-white px-3 py-1 rounded mt-2 w-fit"
        >
          Cancel
        </button>
      )}
    </div>
  );
};

export default AppointmentCard;
