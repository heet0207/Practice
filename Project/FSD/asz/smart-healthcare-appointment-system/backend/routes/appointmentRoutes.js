// routes/appointmentRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../data");
const sendEmail = require("../utils/sendEmail");

// @route  POST /api/appointments/book
// @desc   Book a new appointment
router.post("/book", async (req, res) => {
  const { date, time, city, pincode } = req.body;
  const patientId = Number(req.body.patientId);
  const doctorId = Number(req.body.doctorId);

  if (!patientId || !doctorId || !date || !time || !city || !pincode) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ message: "Pincode must be a 6-digit number" });
  }

  const patient = db.users.find((u) => Number(u.id) === patientId);
  const doctor = db.users.find((u) => Number(u.id) === doctorId);

  if (!patient) {
    return res.status(400).json({ message: "Patient account not found. Please log in again." });
  }
  if (!doctor) {
    return res.status(400).json({ message: "Selected doctor not found." });
  }

  // Snapshot patient/doctor info directly onto the appointment. Looking these
  // up fresh from db.users every time an appointment is displayed or mailed
  // is fragile (a renamed/removed account silently breaks the join and shows
  // "Unknown" everywhere) — storing a copy at booking time keeps the record
  // self-contained and reliable.
  const newAppointment = {
    id: db.getNextAppointmentId(),
    patientId,
    doctorId,
    patientName: patient.name,
    patientEmail: patient.email || null,
    doctorName: doctor.name,
    doctorSpecialization: doctor.specialization || null,
    date,
    time,
    city,
    pincode,
    status: "Pending",
    cancelReason: null
  };

  db.appointments.push(newAppointment);
  db.save();

  if (patient.email) {
    await sendEmail({
      to: patient.email,
      subject: "Appointment Request Received",
      html: `<p>Hi ${patient.name},</p>
             <p>Your appointment request with <strong>${doctor.name}</strong>
             on <strong>${date} at ${time}</strong> has been received and is pending confirmation.</p>
             <p>Visit location: <strong>${city} - ${pincode}</strong></p>
             <p>You'll get another email once the doctor confirms it.</p>`
    });
  }

  if (doctor.email) {
    await sendEmail({
      to: doctor.email,
      subject: "New Appointment Request",
      html: `<p>Hi ${doctor.name},</p>
             <p>You have a new appointment request from <strong>${patient.name}</strong>
             on <strong>${date} at ${time}</strong>.</p>
             <p>Patient location: <strong>${city} - ${pincode}</strong></p>
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
      // Prefer the snapshot taken at booking time; fall back to a live
      // lookup only for older records created before snapshots existed.
      const doctorName = a.doctorName || db.users.find((u) => Number(u.id) === Number(a.doctorId))?.name || "Unknown";
      return { ...a, doctorName };
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
      const patientName = a.patientName || db.users.find((u) => Number(u.id) === Number(a.patientId))?.name || "Unknown";
      return { ...a, patientName };
    });
  res.json(result);
});

// @route  PUT /api/appointments/:id
// @desc   Update appointment status (Confirm/Cancel). When cancelling, an
//         optional "reason" can be supplied so the patient knows why.
router.put("/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const { status, reason } = req.body;

  const appointment = db.appointments.find((a) => a.id === id);
  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }

  appointment.status = status;
  appointment.cancelReason = status === "Cancelled" ? (reason || "No reason provided") : null;
  db.save();

  const patientEmail = appointment.patientEmail || db.users.find((u) => u.id === appointment.patientId)?.email;
  const patientName = appointment.patientName || "there";
  const doctorName = appointment.doctorName || db.users.find((u) => u.id === appointment.doctorId)?.name || "the doctor";

  if (patientEmail && (status === "Confirmed" || status === "Cancelled")) {
    const reasonLine = status === "Cancelled"
      ? `<p>Reason: <strong>${appointment.cancelReason}</strong></p>`
      : "";
    await sendEmail({
      to: patientEmail,
      subject: `Appointment ${status}`,
      html: `<p>Hi ${patientName},</p>
             <p>Your appointment with <strong>${doctorName}</strong>
             on <strong>${appointment.date} at ${appointment.time}</strong> has been
             <strong>${status.toLowerCase()}</strong>.</p>
             ${reasonLine}`
    });
  }

  res.json({ message: "Appointment updated", appointment });
});

// @route  POST /api/appointments/:id/send-confirmation
// @desc   Manually (re)send the "your appointment is confirmed & booked" email
router.post("/:id/send-confirmation", async (req, res) => {
  const id = parseInt(req.params.id);
  const appointment = db.appointments.find((a) => a.id === id);

  if (!appointment) {
    return res.status(404).json({ message: "Appointment not found" });
  }
  if (appointment.status !== "Confirmed") {
    return res.status(400).json({ message: "Only confirmed appointments can be mailed" });
  }

  const patientEmail = appointment.patientEmail || db.users.find((u) => u.id === appointment.patientId)?.email;
  const patientName = appointment.patientName || "there";
  const doctorName = appointment.doctorName || db.users.find((u) => u.id === appointment.doctorId)?.name || "the doctor";

  if (!patientEmail) {
    return res.status(400).json({ message: "This patient has no email on file" });
  }

  const result = await sendEmail({
    to: patientEmail,
    subject: "Your Appointment is Confirmed & Booked",
    html: `<p>Hi ${patientName},</p>
           <p>Good news — it's confirmed! Your appointment with
           <strong>${doctorName}</strong> on
           <strong>${appointment.date} at ${appointment.time}</strong> is booked.</p>
           <p>Visit location: <strong>${appointment.city} - ${appointment.pincode}</strong></p>
           <p>See you then!</p>`
  });

  if (!result.sent && result.reason === "not_configured") {
    return res.status(200).json({
      message: "Email not sent — no email account is configured on the server yet. See backend/.env.example.",
      emailConfigured: false
    });
  }
  if (!result.sent) {
    return res.status(502).json({ message: `Email failed to send: ${result.error}`, emailConfigured: true });
  }

  res.json({ message: "Confirmation email sent", emailConfigured: true });
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
