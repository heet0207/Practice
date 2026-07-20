import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    setUser(stored);
    // Re-check whenever the route changes (e.g. right after login/logout)
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const dashboardPath =
    user?.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  return (
    <div className="navbar">
      <Link to="/" className="brand" style={{ textDecoration: "none" }}>
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="13" fill="rgba(255,255,255,0.14)" />
          <path
            d="M4 13h3.2l1.6-4.5 2.6 9 2-6.5 1.4 2h6.2"
            stroke="#ffffff"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <h2>Smart Healthcare</h2>
      </Link>

      <div className="links">
        {user ? (
          <>
            <Link to={dashboardPath}>Dashboard</Link>
            <a href="#logout" onClick={(e) => { e.preventDefault(); handleLogout(); }}>
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar;
