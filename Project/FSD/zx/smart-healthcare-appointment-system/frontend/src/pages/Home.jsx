import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dashboardPath = user?.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard";

  return (
    <div className="container">
      <div className="card">
        <div className="section-label" style={{ margin: "0 0 8px" }}>Book care, without the phone tag</div>
        <h1>Smart Healthcare Appointment System</h1>
        <p>
          Find a doctor, pick a time that works, and track every visit in one
          place — patients and doctors on the same schedule, no back-and-forth.
        </p>
        <div style={{ display: "flex", gap: "10px", marginTop: "18px" }}>
          {user ? (
            <Link to={dashboardPath}><button>Go to dashboard</button></Link>
          ) : (
            <>
              <Link to="/register"><button>Get started</button></Link>
              <Link to="/login"><button className="btn-secondary">Log in</button></Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
