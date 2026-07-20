import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { IconCalendar, IconClock, IconCheck, IconInbox } from "../icons";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "doctor") { navigate("/login"); return; }
    setUser(storedUser);
    fetchAppointments(storedUser.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchAppointments = async (doctorId) => {
    const res = await API.get(`/appointments/doctor/${doctorId}`);
    setAppointments(res.data);
  };

  const handleConfirm = async (id) => { await API.put(`/appointments/${id}`, { status: "Confirmed" }); fetchAppointments(user.id); };
  const handleCancel = async (id) => { await API.put(`/appointments/${id}`, { status: "Cancelled" }); fetchAppointments(user.id); };

  if (!user) return null;

  const pendingCount = appointments.filter((a) => a.status === "Pending").length;
  const confirmedCount = appointments.filter((a) => a.status === "Confirmed").length;

  return (
    <>
      <Topbar title="Doctor Dashboard" />
      <div className="page-body">
        <div className="card" style={{ marginBottom: "22px" }}>
          <h2 style={{ marginBottom: "2px" }}>{user.name}</h2>
          <p>{user.specialization}</p>
        </div>

        <div className="stat-row">
          <div className="stat-card">
            <div className="stat-icon"><IconCalendar /></div>
            <div><div className="stat-value">{appointments.length}</div><div className="stat-label">Total requests</div></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><IconClock /></div>
            <div><div className="stat-value">{pendingCount}</div><div className="stat-label">Awaiting your review</div></div>
          </div>
          <div className="stat-card">
            <div className="stat-icon"><IconCheck /></div>
            <div><div className="stat-value">{confirmedCount}</div><div className="stat-label">Confirmed</div></div>
          </div>
        </div>

        <div className="section-label">Appointment requests</div>

        {appointments.length === 0 ? (
          <div className="card empty-state">
            <IconInbox />
            <div>No appointment requests yet.</div>
          </div>
        ) : (
          <div className="table-card">
            <table className="data-table">
              <thead>
                <tr><th>Patient</th><th>Date</th><th>Time</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.patientName}</td>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>
                      <span className={`status-pill ${appt.status === "Confirmed" ? "status-confirmed" : appt.status === "Cancelled" ? "status-cancelled" : "status-pending"}`}>
                        {appt.status}
                      </span>
                    </td>
                    <td className="row-actions">
                      {appt.status === "Pending" && (
                        <button className="btn-sm" onClick={() => handleConfirm(appt.id)}>Confirm</button>
                      )}
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
      </div>
    </>
  );
}

export default DoctorDashboard;
