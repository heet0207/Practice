import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";
import DoctorCard from "../components/DoctorCard";

function BookAppointment() {
  const [doctors, setDoctors] = useState([]);
  const [form, setForm] = useState({ doctorId: "", date: "", time: "" });
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "patient") {
      navigate("/login");
      return;
    }
    setUser(storedUser);
    fetchDoctors();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDoctors = async () => {
    const res = await API.get("/users/doctors");
    setDoctors(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    try {
      await API.post("/appointments/book", {
        patientId: user.id,
        doctorId: parseInt(form.doctorId),
        date: form.date,
        time: form.time
      });
      setMessage("Appointment booked successfully!");
      setTimeout(() => navigate("/patient-dashboard"), 1200);
    } catch (err) {
      setMessage(err.response?.data?.message || "Booking failed");
    }
  };

  return (
    <div>
      <div className="card">
        <h2>Book an Appointment</h2>
        {message && <p>{message}</p>}
        <form onSubmit={handleSubmit}>
          <select name="doctorId" value={form.doctorId} onChange={handleChange} required>
            <option value="">Select Doctor</option>
            {doctors.map((doc) => (
              <option key={doc.id} value={doc.id}>
                {doc.name} ({doc.specialization})
              </option>
            ))}
          </select>
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <input type="time" name="time" value={form.time} onChange={handleChange} required />
          <button type="submit">Book Appointment</button>
        </form>
      </div>

      <h3>Available Doctors</h3>
      {doctors.map((doc) => (
        <DoctorCard key={doc.id} doctor={doc} />
      ))}
    </div>
  );
}

export default BookAppointment;
