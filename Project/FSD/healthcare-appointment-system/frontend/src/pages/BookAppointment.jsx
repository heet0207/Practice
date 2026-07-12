import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../api/axios";

const BookAppointment = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [form, setForm] = useState({ date: "", timeSlot: "", reason: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    const fetchDoctor = async () => {
      const { data } = await api.get(`/doctors/${doctorId}`);
      setDoctor(data);
    };
    fetchDoctor();
  }, [doctorId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    try {
      await api.post("/appointments", { doctorId, ...form });
      setSuccess("Appointment booked successfully!");
      setTimeout(() => navigate("/dashboard/patient"), 1200);
    } catch (err) {
      setError(err.response?.data?.message || "Booking failed");
    }
  };

  if (!doctor) return <p className="text-center mt-10">Loading doctor details...</p>;

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-1">Book Appointment</h2>
      <p className="text-gray-500 mb-4">
        with Dr. {doctor.name} ({doctor.specialization})
      </p>

      {error && <p className="text-red-600 mb-3">{error}</p>}
      {success && <p className="text-green-600 mb-3">{success}</p>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="text-sm text-gray-600">Date</label>
        <input name="date" type="date" value={form.date} onChange={handleChange} required className="border p-2 rounded" />

        <label className="text-sm text-gray-600">Time Slot</label>
        <input name="timeSlot" type="text" placeholder="e.g. 10:30 AM" value={form.timeSlot} onChange={handleChange} required className="border p-2 rounded" />

        <label className="text-sm text-gray-600">Reason for visit</label>
        <textarea name="reason" value={form.reason} onChange={handleChange} className="border p-2 rounded" rows={3} />

        <button type="submit" className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default BookAppointment;
