import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import AppointmentCard from "../components/AppointmentCard";
import DoctorCard from "../components/DoctorCard";

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
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
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAppointments = async (patientId) => {
    const res = await API.get(`/appointments/patient/${patientId}`);
    setAppointments(res.data);
  };

  const fetchDoctors = async () => {
    const res = await API.get("/users/doctors");
    setDoctors(res.data);
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
        <p>Book a visit with any of our doctors, or check the status of your existing appointments below.</p>
        <Link to="/book-appointment">
          <button>+ Book new appointment</button>
        </Link>
      </div>

      <h3>Your appointments</h3>
      {appointments.length === 0 && (
        <div className="card empty-state">No appointments booked yet — find a doctor below and book your first visit.</div>
      )}
      {appointments.map((appt) => (
        <AppointmentCard
          key={appt.id}
          appointment={appt}
          personLabel={`Doctor: ${appt.doctorName}`}
          onCancel={handleCancel}
        />
      ))}

      <h3>Available doctors</h3>
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
}

export default PatientDashboard;
