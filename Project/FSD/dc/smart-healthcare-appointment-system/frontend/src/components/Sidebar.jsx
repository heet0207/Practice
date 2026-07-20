import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { IconPulse, IconCalendar, IconUsers, IconLogout } from "../icons";

function Sidebar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);

  if (!user) return null;

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const dashboardPath = user.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  return (
    <div className="sidebar">
      <div className="brand">
        <IconPulse width="26" height="26" />
        <span>Smart Healthcare</span>
      </div>

      <nav>
        <NavLink to={dashboardPath} className={({ isActive }) => (isActive ? "active" : "")}>
          <IconCalendar /> Dashboard
        </NavLink>
        {user.role === "patient" && (
          <NavLink to="/book-appointment" className={({ isActive }) => (isActive ? "active" : "")}>
            <IconUsers /> Find a doctor
          </NavLink>
        )}
      </nav>

      <a href="#logout" className="footer-link" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
        <IconLogout /> Logout
      </a>
    </div>
  );
}

export default Sidebar;
