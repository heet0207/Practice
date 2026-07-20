import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import Topbar from "../components/Topbar";

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ doctorId: "", date: "", time: "" });
  const [message, setMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "patient") { navigate("/login"); return; }
    setUser(storedUser);
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDoctors = async () => {
    const res = await API.get("/users/doctors");
    setDoctors(res.data);
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); setIsError(false);
    try {
      await API.post("/appointments/book", { patientId: user.id, doctorId: parseInt(form.doctorId), date: form.date, time: form.time });
      setMessage("Appointment booked successfully!");
      setTimeout(() => navigate("/patient-dashboard"), 1100);
    } catch (err) {
      setIsError(true);
      setMessage(err.response?.data?.message || "Booking failed");
    }
  };

  if (!user) return null;

  return (
    <>
      <Topbar title="Book an Appointment" />
      <div className="page-body">
        <div className="card">
          {message && <p className={isError ? "error-msg" : "success-msg"}>{message}</p>}
          <form onSubmit={handleSubmit}>
            <label className="field-label">Doctor</label>
            <select name="doctorId" value={form.doctorId} onChange={handleChange} required>
              <option value="">Select doctor</option>
              {doctors.map((doc) => (
                <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialization})</option>
              ))}
            </select>
            <label className="field-label">Date</label>
            <input type="date" name="date" value={form.date} onChange={handleChange} required />
            <label className="field-label">Time</label>
            <input type="time" name="time" value={form.time} onChange={handleChange} required />
            <button type="submit">Book appointment</button>
          </form>
        </div>

        <div className="section-label">Available doctors</div>
        <div className="doctor-grid">
          {doctors.map((doc) => {
            const initials = doc.name.replace("Dr. ", "").split(" ").map((w) => w[0]).join("").slice(0, 2).toUpperCase();
            return (
              <div key={doc.id} className="card doctor-card">
                <div className="doctor-avatar">{initials}</div>
                <div className="doctor-info">
                  <h3>{doc.name}</h3>
                  <p>{doc.specialization}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
