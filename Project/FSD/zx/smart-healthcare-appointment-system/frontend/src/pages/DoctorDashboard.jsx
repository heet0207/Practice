import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { IconCalendar, IconClock, IconCheck, IconInbox, IconMail } from "../icons";

function DoctorDashboard() {
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [mailStatus, setMailStatus] = useState({}); // { [apptId]: "sending" | "sent" | "error" }
  const [cancelTarget, setCancelTarget] = useState(null); // appointment being cancelled
  const [cancelReason, setCancelReason] = useState("");
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

  const openCancelModal = (appt) => { setCancelTarget(appt); setCancelReason(""); };
  const closeCancelModal = () => { setCancelTarget(null); setCancelReason(""); };

  const confirmCancel = async () => {
    if (!cancelTarget) return;
    await API.put(`/appointments/${cancelTarget.id}`, { status: "Cancelled", reason: cancelReason.trim() });
    closeCancelModal();
    fetchAppointments(user.id);
  };

  const handleMail = async (id) => {
    setMailStatus((s) => ({ ...s, [id]: "sending" }));
    try {
      await API.post(`/appointments/${id}/send-confirmation`);
      setMailStatus((s) => ({ ...s, [id]: "sent" }));
      setTimeout(() => setMailStatus((s) => ({ ...s, [id]: undefined })), 2500);
    } catch (err) {
      setMailStatus((s) => ({ ...s, [id]: "error" }));
      setTimeout(() => setMailStatus((s) => ({ ...s, [id]: undefined })), 2500);
    }
  };

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
                <tr><th>Patient</th><th>Date</th><th>Time</th><th>Location</th><th>Status</th><th></th></tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td className="person-cell">
                      <Link to={`/patient/${appt.patientId}`} style={{ fontWeight: 600, textDecoration: "none", color: "var(--primary-dark)" }}>
                        {appt.patientName}
                      </Link>
                    </td>
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
                      {appt.status === "Pending" && (
                        <button className="btn-sm" onClick={() => handleConfirm(appt.id)}>Confirm</button>
                      )}
                      {appt.status === "Confirmed" && (
                        <button
                          className="btn-sm btn-secondary"
                          onClick={() => handleMail(appt.id)}
                          disabled={mailStatus[appt.id] === "sending"}
                        >
                          <IconMail />
                          {mailStatus[appt.id] === "sending"
                            ? "Sending..."
                            : mailStatus[appt.id] === "sent"
                            ? "Sent!"
                            : mailStatus[appt.id] === "error"
                            ? "Failed — retry"
                            : "Mail confirmation"}
                        </button>
                      )}
                      {appt.status !== "Cancelled" && (
                        <button className="btn-danger btn-sm" onClick={() => openCancelModal(appt)}>Cancel</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {cancelTarget && (
        <div className="modal-overlay" onClick={closeCancelModal}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3>Cancel appointment</h3>
            <p className="helper-text">
              Let {cancelTarget.patientName} know why you're cancelling their appointment
              on {cancelTarget.date} at {cancelTarget.time}. This will be included in their notification.
            </p>
            <textarea
              autoFocus
              placeholder="e.g. I have an emergency surgery that day — let's reschedule."
              value={cancelReason}
              onChange={(e) => setCancelReason(e.target.value)}
            />
            <div className="modal-actions">
              <button className="btn-secondary" onClick={closeCancelModal}>Go back</button>
              <button className="btn-danger" onClick={confirmCancel}>Cancel appointment</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DoctorDashboard;
