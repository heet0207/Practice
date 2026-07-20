import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import AppointmentCard from "../components/AppointmentCard";

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "patient") {
      navigate("/login");
      return;
    }
    setUser(storedUser);
    fetchAppointments(storedUser.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAppointments = async (patientId) => {
    const res = await API.get(`/appointments/patient/${patientId}`);
    setAppointments(res.data);
  };

  const handleCancel = async (id) => {
    await API.delete(`/appointments/${id}`);
    fetchAppointments(user.id);
  };

  if (!user) return null;

  return (
    <div>
      <div className="card">
        <h2>Welcome, {user.name}</h2>
        <Link to="/book-appointment">
          <button>+ Book New Appointment</button>
        </Link>
      </div>

      <h3>Your Appointments</h3>
      {appointments.length === 0 && (
        <div className="card empty-state">No appointments booked yet — find a doctor and book your first visit.</div>
      )}
      {appointments.map((appt) => (
        <AppointmentCard
          key={appt.id}
          appointment={appt}
          personLabel={`Doctor: ${appt.doctorName}`}
          onCancel={handleCancel}
        />
      ))}
    </div>
  );
}

export default PatientDashboard;
