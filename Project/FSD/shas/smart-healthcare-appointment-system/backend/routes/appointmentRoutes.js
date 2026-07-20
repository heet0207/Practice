// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../data");

// @route  POST /api/appointments/book
// @desc   Book a new appointment
router.post("/book", (req, res) => {
  const { patientId, doctorId, date, time } = req.body;

  if (!patientId || !doctorId || !date || !time) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newAppointment = {
    id: db.getNextAppointmentId(),
    patientId,
    doctorId,
    date,
    time,
    status: "Pending"
  };

  db.appointments.push(newAppointment);
  res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
});

// @route  GET /api/appointments/patient/:patientId
// @desc   Get all appointments for a specific patient
router.get("/patient/:patientId", (req, res) => {
  const patientId = parseInt(req.params.patientId);
  const result = db.appointments
    .filter((a) => a.patientId === patientId)
    .map((a) => {
      const doctor = db.users.find((u) => u.id === a.doctorId);
      return { ...a, doctorName: doctor ? doctor.name : "Unknown" };
    });
  res.json(result);
});

// @route  GET /api/appointments/doctor/:doctorId
// @desc   Get all appointments for a specific doctor
router.get("/doctor/:doctorId", (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const result = db.appointments
    .filter((a) => a.doctorId === doctorId)
    .map((a) => {
      const patient = db.users.find((u) => u.id === a.patientId);
      return { ...a, patientName: patient ? patient.name : "Unknown" };
    });
  res.json(result);
});

// @route  PUT /api/appointments/:id
// @desc   Update appointment status (Confirm/Cancel)
router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const appointment = db.appointments.find((a) => a.id === id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = status;
  res.json({ message: "Appointment updated", appointment });
});

// @route  DELETE /api/appointments/:id
// @desc   Cancel/delete an appointment
router.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = db.appointments.findIndex((a) => a.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  db.appointments.splice(index, 1);
  res.json({ message: "Appointment cancelled" });
});

module.exports = router;
