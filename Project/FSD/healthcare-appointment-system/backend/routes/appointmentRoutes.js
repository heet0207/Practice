const express = require("express");
const router = express.Router();
const {
  bookAppointment,
  getMyAppointments,
  getAllAppointments,
  updateAppointmentStatus,
  cancelAppointment,
} = require("../controllers/appointmentController");
const { protect, authorize } = require("../middleware/auth");

router.post("/", protect, authorize("patient"), bookAppointment);
router.get("/my", protect, getMyAppointments);
router.get("/", protect, authorize("admin"), getAllAppointments);
router.put("/:id/status", protect, authorize("doctor", "admin"), updateAppointmentStatus);
router.delete("/:id", protect, authorize("patient"), cancelAppointment);

module.exports = router;
