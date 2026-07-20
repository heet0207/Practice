import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import AppointmentCard from "../components/AppointmentCard";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "doctor") {
      navigate("/login");
      return;
    }
    setUser(storedUser);
    fetchAppointments(storedUser.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAppointments = async (doctorId) => {
    const res = await API.get(`/appointments/doctor/${doctorId}`);
    setAppointments(res.data);
  };

  const handleConfirm = async (id) => {
    await API.put(`/appointments/${id}`, { status: "Confirmed" });
    fetchAppointments(user.id);
  };

  const handleCancel = async (id) => {
    await API.put(`/appointments/${id}`, { status: "Cancelled" });
    fetchAppointments(user.id);
  };

  if (!user) return null;

  return (
    <div>
      <div className="card">
        <h2>Welcome, {user.name}</h2>
        <p>Specialization: {user.specialization}</p>
      </div>

      <h3>Appointment Requests</h3>
      {appointments.length === 0 && <p>No appointments yet.</p>}
      {appointments.map((appt) => (
        <AppointmentCard
          key={appt.id}
          appointment={appt}
          personLabel={`Patient: ${appt.patientName}`}
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      ))}
    </div>
  );
}

export default DoctorDashboard;
