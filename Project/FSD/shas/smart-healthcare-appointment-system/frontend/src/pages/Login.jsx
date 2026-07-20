import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("user"));
    if (stored) {
      navigate(stored.role === "doctor" ? "/doctor-dashboard" : "/patient-dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await API.post("/users/login", form);
      const user = res.data.user;

      // Save logged-in user to localStorage (simple session handling)
      localStorage.setItem("user", JSON.stringify(user));

      if (user.role === "doctor") {
        navigate("/doctor-dashboard");
      } else if (user.role === "patient") {
        navigate("/patient-dashboard");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="card">
      <h2>Login</h2>
      {error && <p className="error-msg">{error}</p>}
      {!error && <p className="helper-text" style={{ marginTop: "-6px" }}>Access your dashboard as a patient or doctor.</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p className="helper-text">
        Demo accounts — Doctor: aisha@hospital.com / 123456 · Patient:
        priya@gmail.com / 123456
      </p>
    </div>
  );
}

export default Login;
