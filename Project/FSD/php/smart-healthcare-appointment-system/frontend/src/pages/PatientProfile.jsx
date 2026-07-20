import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { IconCalendar, IconClock } from "../icons";

function initials(name) {
  return name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function PatientProfile() {
  const { id } = useParams();
  const [patient, setPatient] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [user, setUser] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "doctor") { navigate("/login"); return; }
    setUser(storedUser);
    fetchPatient(storedUser.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchPatient = async (doctorId) => {
    try {
      const [patientRes, apptRes] = await Promise.all([
        API.get(`/users/patients/${id}`),
        API.get(`/appointments/doctor/${doctorId}`)
      ]);
      setPatient(patientRes.data);
      setAppointments(apptRes.data.filter((a) => Number(a.patientId) === Number(id)));
    } catch (err) {
      setNotFound(true);
    }
  };

  if (!user) return null;

  if (notFound) {
    return (
      <>
        <Topbar title="Patient Profile" />
        <div className="page-body">
          <div className="card empty-state">
            <div>Patient not found.</div>
            <div style={{ marginTop: "10px" }}>
              <Link to="/doctor-dashboard"><button className="btn-sm btn-secondary">Back to dashboard</button></Link>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (!patient) return null;

  return (
    <>
      <Topbar title="Patient Profile" />
      <div className="page-body">
        <div className="card" style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div className="doctor-avatar" style={{ width: "64px", height: "64px", fontSize: "22px" }}>{initials(patient.name)}</div>
          <div>
            <h2 style={{ marginBottom: "2px" }}>{patient.name}</h2>
            <p style={{ margin: 0 }}>{patient.email}</p>
          </div>
        </div>

        <div className="section-label">Patient details</div>
        <div className="card">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "16px" }}>
            <div>
              <div className="helper-text" style={{ marginTop: 0 }}>Age</div>
              <div style={{ fontSize: "15px", fontWeight: 600 }}>{patient.age || "Not provided"}</div>
            </div>
            <div>
              <div className="helper-text" style={{ marginTop: 0 }}>Gender</div>
              <div style={{ fontSize: "15px", fontWeight: 600 }}>{patient.gender || "Not provided"}</div>
            </div>
            <div>
              <div className="helper-text" style={{ marginTop: 0 }}>Email</div>
              <div style={{ fontSize: "15px", fontWeight: 600 }}>{patient.email}</div>
            </div>
          </div>
        </div>

        <div className="section-label"><IconCalendar /> Appointment history with you</div>
        {appointments.length === 0 ? (
          <div className="card empty-state">
            <div>No appointments with this patient yet.</div>
          </div>
        ) : (
          <div className="table-card">
            <table className="data-table">
              <thead>
                <tr><th>Date</th><th>Time</th><th>Location</th><th>Status</th></tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id}>
                    <td>{appt.date}</td>
                    <td>{appt.time}</td>
                    <td>{appt.city ? `${appt.city} - ${appt.pincode}` : "—"}</td>
                    <td>
                      <span className={`status-pill ${appt.status === "Confirmed" ? "status-confirmed" : appt.status === "Cancelled" ? "status-cancelled" : "status-pending"}`}>
                        {appt.status}
                      </span>
                      {appt.status === "Cancelled" && appt.cancelReason && (
                        <div className="helper-text" style={{ marginTop: "4px" }}><IconClock /> {appt.cancelReason}</div>
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

export default PatientProfile;
