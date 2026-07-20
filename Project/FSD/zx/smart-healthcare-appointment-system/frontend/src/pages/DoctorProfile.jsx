import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { getHealthTips } from "../healthTips";
import { IconCheck, IconClock } from "../icons";

function DoctorProfile() {
  const { id } = useParams();
  const [doctor, setDoctor] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) { navigate("/login"); return; }
    setUser(storedUser);
    fetchDoctor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchDoctor = async () => {
    const res = await API.get(`/users/doctors/${id}`);
    setDoctor(res.data);
  };

  if (!user || !doctor) return null;

  const initials = doctor.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
  const { tips, seekCareIf } = getHealthTips(doctor.specialization);

  return (
    <>
      <Topbar title="Doctor Profile" />
      <div className="page-body">
        <div className="card" style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div className="doctor-avatar" style={{ width: "64px", height: "64px", fontSize: "22px" }}>{initials}</div>
          <div>
            <h2 style={{ marginBottom: "2px" }}>{doctor.name}</h2>
            <p style={{ margin: 0 }}>{doctor.specialization}</p>
          </div>
          {user.role === "patient" && (
            <Link to="/book-appointment" style={{ marginLeft: "auto" }}>
              <button>Book appointment</button>
            </Link>
          )}
        </div>

        <div className="section-label"><IconCheck /> General wellness tips</div>
        <div className="card">
          <ul style={{ margin: 0, paddingLeft: "20px", color: "var(--muted)", lineHeight: 1.8, fontSize: "14.5px" }}>
            {tips.map((tip, i) => (
              <li key={i}>{tip}</li>
            ))}
          </ul>
        </div>

        <div className="section-label"><IconClock /> When to see a doctor</div>
        <div className="card">
          <p style={{ margin: 0 }}>Reach out to {doctor.name} if {seekCareIf}</p>
        </div>

        <p className="helper-text" style={{ marginTop: "8px" }}>
          These are general wellness tips only, not a diagnosis or treatment
          plan. For any medicine, dosage, or specific medical concern, please
          consult {doctor.name} or another licensed doctor directly.
        </p>
      </div>
    </>
  );
}

export default DoctorProfile;
