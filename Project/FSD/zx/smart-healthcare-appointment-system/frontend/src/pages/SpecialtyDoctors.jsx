import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";
import { SPECIALTIES } from "../specialtyIcons";
import { IconInbox } from "../icons";

function SpecialtyDoctors() {
  const { slug } = useParams();
  const [doctors, setDoctors] = useState([]);
  const [user, setUser] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  const specialty = SPECIALTIES.find((s) => s.slug === slug);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) { navigate("/login"); return; }
    setUser(storedUser);
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  const fetchDoctors = async () => {
    const res = await API.get("/users/doctors");
    setDoctors(res.data);
    setLoaded(true);
  };

  if (!user || !specialty) return null;

  const matches = doctors.filter((d) => specialty.specializations.includes(d.specialization));
  const { Icon } = specialty;

  return (
    <>
      <Topbar title={specialty.label} />
      <div className="page-body">
        <Link to="/specialties" className="helper-text" style={{ display: "inline-block", marginBottom: "18px", textDecoration: "none" }}>
          &larr; Back to all specialties
        </Link>

        <div className="card" style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div className="specialty-icon" style={{ width: "52px", height: "52px" }}><Icon /></div>
          <div>
            <h2 style={{ marginBottom: "2px" }}>{specialty.label}</h2>
            <p style={{ margin: 0 }}>
              {matches.length} {matches.length === 1 ? "doctor" : "doctors"} available
            </p>
          </div>
        </div>

        {!loaded ? null : matches.length === 0 ? (
          <div className="card empty-state">
            <IconInbox />
            <div>No doctors are listed under {specialty.label} yet.</div>
            <div style={{ marginTop: "10px" }}>
              <Link to="/book-appointment"><button className="btn-sm btn-secondary">See all available doctors</button></Link>
            </div>
          </div>
        ) : (
          <div className="doctor-grid">
            {matches.map((doc) => {
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
        )}
      </div>
    </>
  );
}

export default SpecialtyDoctors;
