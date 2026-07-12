import React, { useEffect, useState } from "react";
import api from "../api/axios";
import AppointmentCard from "../components/AppointmentCard";

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = async () => {
    const { data } = await api.get("/appointments/my");
    setAppointments(data);
  };

  useEffect(() => {
    fetchAppointments();
  }, []);

  const handleAction = async (id, status) => {
    // Patients only ever trigger "cancelled" via this dashboard
    await api.delete(`/appointments/${id}`);
    fetchAppointments();
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4">My Appointments</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {appointments.map((appt) => (
          <AppointmentCard key={appt._id} appointment={appt} role="patient" onAction={handleAction} />
        ))}
        {appointments.length === 0 && <p className="text-gray-500">No appointments yet.</p>}
      </div>
    </div>
  );
};

export default PatientDashboard;
