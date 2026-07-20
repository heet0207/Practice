// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../data");
const sendEmail = require("../utils/sendEmail");

// @route  POST /api/appointments/book
// @desc   Book a new appointment
router.post("/book", async (req, res) => {
  const { date, time } = req.body;
  const patientId = Number(req.body.patientId);
  const doctorId = Number(req.body.doctorId);

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
  db.save();

  const patient = db.users.find((u) => u.id === patientId);
  const doctor = db.users.find((u) => u.id === doctorId);

  if (patient?.email) {
    await sendEmail({
      to: patient.email,
      subject: "Appointment Request Received",
      html: `<p>Hi ${patient.name},</p>
             <p>Your appointment request with <strong>${doctor?.name || "the doctor"}</strong>
             on <strong>${date} at ${time}</strong> has been received and is pending confirmation.</p>
             <p>You'll get another email once the doctor confirms it.</p>`
    });
  }

  if (doctor?.email) {
    await sendEmail({
      to: doctor.email,
      subject: "New Appointment Request",
      html: `<p>Hi ${doctor.name},</p>
             <p>You have a new appointment request from <strong>${patient?.name || "a patient"}</strong>
             on <strong>${date} at ${time}</strong>.</p>
             <p>Log in to your dashboard to confirm or cancel it.</p>`
    });
  }

  res.status(201).json({ message: "Appointment booked successfully", appointment: newAppointment });
});

// @route  GET /api/appointments/patient/:patientId
// @desc   Get all appointments for a specific patient
router.get("/patient/:patientId", (req, res) => {
  const patientId = parseInt(req.params.patientId);
  const result = db.appointments
    .filter((a) => Number(a.patientId) === patientId)
    .map((a) => {
      const doctor = db.users.find((u) => Number(u.id) === Number(a.doctorId));
      return { ...a, doctorName: doctor ? doctor.name : "Unknown" };
    });
  res.json(result);
});

// @route  GET /api/appointments/doctor/:doctorId
// @desc   Get all appointments for a specific doctor
router.get("/doctor/:doctorId", (req, res) => {
  const doctorId = parseInt(req.params.doctorId);
  const result = db.appointments
    .filter((a) => Number(a.doctorId) === doctorId)
    .map((a) => {
      const patient = db.users.find((u) => Number(u.id) === Number(a.patientId));
      return { ...a, patientName: patient ? patient.name : "Unknown" };
    });
  res.json(result);
});

// @route  PUT /api/appointments/:id
// @desc   Update appointment status (Confirm/Cancel)
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { status } = req.body;

  const appointment = db.appointments.find((a) => a.id === id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = status;
  db.save();

  const patient = db.users.find((u) => u.id === appointment.patientId);
  const doctor = db.users.find((u) => u.id === appointment.doctorId);

  if (patient?.email && (status === "Confirmed" || status === "Cancelled")) {
    await sendEmail({
      to: patient.email,
      subject: `Appointment ${status}`,
      html: `<p>Hi ${patient.name},</p>
             <p>Your appointment with <strong>${doctor?.name || "the doctor"}</strong>
             on <strong>${appointment.date} at ${appointment.time}</strong> has been
             <strong>${status.toLowerCase()}</strong>.</p>`
    });
  }

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
  db.save();
  res.json({ message: "Appointment cancelled" });
});

module.exports = router;
