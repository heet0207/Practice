import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import { SPECIALTIES } from "../specialtyIcons";

function Specialties() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser) { navigate("/login"); return; }
    setUser(storedUser);
  }, [navigate]);

  if (!user) return null;

  return (
    <>
      <Topbar title="Browse by Specialties" />
      <div className="page-body">
        <p style={{ color: "var(--muted)", marginTop: 0, marginBottom: "22px", fontSize: "14.5px" }}>
          Pick a specialty to see the doctors available under it.
        </p>
        <div className="specialty-grid">
          {SPECIALTIES.map(({ slug, label, Icon }) => (
            <Link key={slug} to={`/specialties/${slug}`} className="specialty-card">
              <div className="specialty-icon"><Icon /></div>
              <div className="specialty-label">{label}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Specialties;
