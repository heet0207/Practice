import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import API from "../api";
import { IconPulse, IconCalendar, IconClock, IconCheck } from "../icons";

function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "patient", specialization: "", age: "", gender: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) navigate(stored.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setSuccess("");
    try {
      await API.post("/users/register", form);
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 1400);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="auth-shell">
      <div className="auth-side">
        <div className="brand"><IconPulse width="28" height="28" /><span>Smart Healthcare</span></div>
        <div>
          <h2>Set up your account in seconds</h2>
          <p>Register as a patient to start booking, or as a doctor to manage incoming requests.</p>
          <div className="auth-feature"><IconCalendar /> Free to register</div>
          <div className="auth-feature"><IconClock /> Instant access to your dashboard</div>
          <div className="auth-feature"><IconCheck /> Switch roles anytime with a new account</div>
        </div>
        <div style={{ fontSize: "12.5px", color: "rgba(255,255,255,0.55)" }}>Smart Healthcare Appointment System</div>
      </div>

      <div className="auth-form-side">
        <div className="auth-form-box">
          <h1>Create your account</h1>
          <p className="sub">Join as a patient or a doctor.</p>

          {error && <p className="error-msg">{error}</p>}
          {success && <p className="success-msg">{success}</p>}

          <form onSubmit={handleSubmit}>
            <label className="field-label">Full name</label>
            <input type="text" name="name" placeholder="Jane Doe" value={form.name} onChange={handleChange} required />
            <label className="field-label">Email</label>
            <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
            <label className="field-label">Password</label>
            <input type="password" name="password" placeholder="••••••••" value={form.password} onChange={handleChange} required />
            <label className="field-label">I am a</label>
            <select name="role" value={form.role} onChange={handleChange}>
              <option value="patient">Patient</option>
              <option value="doctor">Doctor</option>
            </select>

            {form.role === "doctor" && (
              <>
                <label className="field-label">Specialization</label>
                <input type="text" name="specialization" placeholder="e.g. Cardiologist" value={form.specialization} onChange={handleChange} />
              </>
            )}

            {form.role === "patient" && (
              <>
                <label className="field-label">Age</label>
                <input type="number" name="age" placeholder="28" value={form.age} onChange={handleChange} />
                <label className="field-label">Gender</label>
                <select name="gender" value={form.gender} onChange={handleChange}>
                  <option value="">Select gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </>
            )}

            <button type="submit" style={{ width: "100%", justifyContent: "center", marginTop: "4px" }}>Register</button>
          </form>

          <p className="helper-text" style={{ marginTop: "18px" }}>
            Already have an account? <Link to="/login" style={{ color: "var(--primary)", fontWeight: 600 }}>Log in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
