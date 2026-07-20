import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { IconCalendar, IconClock, IconCheck, IconPlus, IconInbox, IconStethoscope } from "../icons";

function PatientDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "patient") { navigate("/login"); return; }
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

  const pendingCount = appointments.filter((a) => a.status === "Pending").length;
  const confirmedCount = appointments.filter((a) => a.status === "Confirmed").length;

  return (
    <>
      <Topbar title="Patient Dashboard" />
      <div className="page-body">
        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-icon"><IconCalendar /></div>
            <div><div className="stat-value">{appointments.length}</div><div className="stat-label">Total appointments</div></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><IconClock /></div>
            <div><div className="stat-value">{pendingCount}</div><div className="stat-label">Awaiting confirmation</div></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><IconCheck /></div>
            <div><div className="stat-value">{confirmedCount}</div><div className="stat-label">Confirmed</div></div>
          </div>
        </div>

        <div className="section-label">
          <span>Your appointments</span>
          <Link to="/book-appointment" style={{ marginLeft: "auto" }}>
            <button className="btn-sm"><IconPlus /> Book appointment</button>
          </Link>
        </div>

        {appointments.length === 0 ? (
          <div className="card empty-state">
            <IconInbox />
            <div>No appointments booked yet — find a doctor and book your first visit.</div>
          </div>
        ) : (
          <div className="table-card">
            <table className="data-table">
              <thead>
                <tr><th>Doctor</th><th>Date</th><th>Time</th><th>Location</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.doctorName}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.city ? `${appt.city} - ${appt.pincode}` : "—"}</td>
                    <td>
                      <span className={`status-pill ${appt.status === "Confirmed" ? "status-confirmed" : appt.status === "Cancelled" ? "status-cancelled" : "status-pending"}`}>
                        {appt.status}
                      </span>
                      {appt.status === "Cancelled" && appt.cancelReason && (
                        <div className="helper-text" style={{ marginTop: "4px" }}>{appt.cancelReason}</div>
                      )}
                    </td>
                    <td className="row-actions">
                      {appt.status !== "Cancelled" && (
                        <button className="btn-danger btn-sm" onClick={() => handleCancel(appt.id)}>Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="section-label">
          <span>Browse by specialties</span>
          <Link to="/specialties" style={{ marginLeft: "auto" }}>
            <button className="btn-sm btn-secondary"><IconStethoscope /> View all</button>
          </Link>
        </div>
        <div className="card" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <p style={{ margin: 0 }}>
            Not sure who to book with? Find doctors organized by specialty — Cardiology,
            Dermatology, Orthopaedics, and more.
          </p>
        </div>

        <div className="section-label">Available doctors</div>
        <div className="doctor-grid">
          {doctors.map((doc) => {
            const initials = doc.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
            return (
              <Link key={doc.id} to={`/doctor/${doc.id}`} style={{ textDecoration: "none" }}>
                <div className="card doctor-card">
                  <div className="doctor-avatar">{initials}</div>
                  <div className="doctor-info">
                    <h3>{doc.name}</h3>
                    <p>{doc.specialization}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PatientDashboard;
