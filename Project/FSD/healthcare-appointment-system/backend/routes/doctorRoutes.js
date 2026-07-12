const express = require("express");
const router = express.Router();
const { getDoctors, getDoctorById, updateAvailability } = require("../controllers/doctorController");
const { protect } = require("../middleware/auth");

router.get("/", getDoctors); // public: browse doctors
router.get("/:id", getDoctorById); // public: view doctor profile
router.put("/availability", protect, updateAvailability); // doctor only

module.exports = router;
