const User = require("../models/User");

// @route  GET /api/doctors
// @desc   Get all doctors, optional ?specialization= filter
const getDoctors = async (req, res) => {
  try {
    const filter = { role: "doctor" };
    if (req.query.specialization) {
      filter.specialization = new RegExp(req.query.specialization, "i");
    }

    const doctors = await User.find(filter).select("-password");
    res.json(doctors);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  GET /api/doctors/:id
// @desc   Get single doctor by id
const getDoctorById = async (req, res) => {
  try {
    const doctor = await User.findOne({ _id: req.params.id, role: "doctor" }).select("-password");
    if (!doctor) {
      return res.status(404).json({ message: "Doctor not found" });
    }
    res.json(doctor);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @route  PUT /api/doctors/availability
// @desc   Doctor updates their own weekly availability
const updateAvailability = async (req, res) => {
  try {
    if (req.user.role !== "doctor") {
      return res.status(403).json({ message: "Only doctors can update availability" });
    }

    const { availability } = req.body; // expects [{ day, slots: [...] }]
    req.user.availability = availability;
    await req.user.save();

    res.json({ message: "Availability updated", availability: req.user.availability });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

module.exports = { getDoctors, getDoctorById, updateAvailability };
