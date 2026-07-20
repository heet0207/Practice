import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { IconPulse, IconCalendar, IconClock, IconCheck } from "../icons";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) navigate(stored.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const loginWithCredentials = async (email, password) => {
    setError("");
    try {
      const res = await API.post("/users/login", { email, password });
      const user = res.data.user;
      localStorage.setItem("user", JSON.stringify(user));
      navigate(user.role === "doctor" ? "/doctor-dashboard" : user.role === "patient" ? "/patient-dashboard" : "/");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  const handleSubmit = (e) => { e.preventDefault(); loginWithCredentials(form.email, form.password); };

  return (
    <div className="auth-shell">
      <div className="auth-side">
        <div className="brand"><IconPulse width="28" height="28" /><span>Smart Healthcare</span></div>
        <div>
          <h2>Care coordinated around your schedule</h2>
          <p>One dashboard for booking, tracking, and managing appointments — built for patients and doctors alike.</p>
          <div className="auth-feature"><IconCalendar /> Book in under a minute</div>
          <div className="auth-feature"><IconClock /> Real-time appointment status</div>
          <div className="auth-feature"><IconCheck /> Doctors confirm from their own dashboard</div>
        </div>
        <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.55)" }}>Smart Healthcare Appointment System</div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-box">
          <h1>Welcome back</h1>
          <p className="sub">Log in to access your dashboard.</p>

          {error && <p className="error-msg">{error}</p>}

          <form onSubmit={handleSubmit}>
            <label className="field-label">Email</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            <label className="field-label">Password</label>
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
            <button type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}>Login</button>
          </form>

          <div className="section-label">Quick demo login</div>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button type="button" className="btn-secondary btn-sm" onClick={() => loginWithCredentials("priya@gmail.com", "123456")}>Patient demo</button>
            <button type="button" className="btn-secondary btn-sm" onClick={() => loginWithCredentials("aisha@hospital.com", "123456")}>Doctor demo</button>
          </div>

          <p className="helper-text" style={{ marginTop: "18px" }}>
            No account? <Link to="/register" style={{ color: "var(--primary)", fontWeight: 600 }}>Register here</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
