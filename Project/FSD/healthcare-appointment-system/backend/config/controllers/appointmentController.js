const Appointment = require("../models/Appointment");

// @route  POST /api/appointments
// @desc   Patient books a new appointment
const bookAppointment = async (req, res) => {
  try {
    const { doctorId, date, timeSlot, reason } = req.body;

    if (!doctorId || !date || !timeSlot) {
      return res.status(400).json({ message: "doctorId, date, and timeSlot are required" });
    }

    // Check whether this exact doctor+date+timeSlot is already booked
    const existing = await Appointment.findOne({
      doctor: doctorId,
      date,
      timeSlot,
      status: { $ne: "cancelled" },
    });

    if (existing) {
      return res.status(400).json({ message: "This slot is already booked. Please choose another." });
    }

    const appointment = await Appointment.create({
      patient: req.user._id,
      doctor: doctorId,
      date,
      timeSlot,
      reason,
      status: "pending",
    });

    res.status(201).json(appointment);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: "This slot is already booked. Please choose another." });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  GET /api/appointments/my
// @desc   Get appointments for the logged-in patient or doctor
const getMyAppointments = async (req, res) => {
  try {
    const filter =
      req.user.role === "doctor" ? { doctor: req.user._id } : { patient: req.user._id };

    const appointments = await Appointment.find(filter)
      .populate("patient", "name email phone")
      .populate("doctor", "name specialization")
      .sort({ date: 1 });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  GET /api/appointments (admin)
// @desc   Get all appointments in the system
const getAllAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "name email")
      .populate("doctor", "name specialization")
      .sort({ createdAt: -1 });

    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  PUT /api/appointments/:id/status
// @desc   Doctor/Admin updates appointment status (confirmed, completed, cancelled)
const updateAppointmentStatus = async (req, res) => {
  try {
    const { status, notes } = req.body;
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    // Only the assigned doctor or an admin can update status
    if (
      req.user.role !== "admin" &&
      appointment.doctor.toString() !== req.user._id.toString()
    ) {
      return res.status(403).json({ message: "Not authorized to update this appointment" });
    }

    appointment.status = status || appointment.status;
    if (notes !== undefined) appointment.notes = notes;

    await appointment.save();
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  DELETE /api/appointments/:id
// @desc   Patient cancels their own appointment
const cancelAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    if (appointment.patient.toString() !== req.user._id.toString()) {
      return res.status(403).json({ message: "Not authorized to cancel this appointment" });
    }

    appointment.status = "cancelled";
    await appointment.save();

    res.json({ message: "Appointment cancelled", appointment });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = {
  bookAppointment,
  getMyAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  cancelAppointment,
};
