import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function initials(name) {
  return name.split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
}

function Topbar({ title }) {
  const [user, setUser] = useState(null);
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  if (!user) return null;

  return (
    <div className="topbar">
      <h1>{title}</h1>
      <div className="user-chip">
        <div className="avatar-sm">{initials(user.name)}</div>
        <div className="meta">
          <div>{user.name}</div>
          <div className="role">{user.role === "doctor" ? "Doctor" : "Patient"}</div>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
