// routes/userRoutes.js
const express = require("express");
const router = express.Router();
const db = require("../data");

// @route  POST /api/users/register
// @desc   Register a new patient or doctor
router.post("/register", (req, res) => {
  const { name, email, password, role, specialization, age, gender } = req.body;

  if (!name || !email || !password || !role) {
    return res.status(400).json({ message: "Please fill all required fields" });
  }

  const existingUser = db.users.find((u) => u.email === email);
  if (existingUser) {
    return res.status(400).json({ message: "User already exists with this email" });
  }

  const newUser = {
    id: db.getNextUserId(),
    name,
    email,
    password, // Note: For a real app, always hash passwords (bcrypt) before saving
    role,
    specialization: specialization || null,
    age: age || null,
    gender: gender || null
  };

  db.users.push(newUser);
  db.save();
  res.status(201).json({ message: "Registration successful", user: newUser });
});

// @route  POST /api/users/login
// @desc   Login existing user
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = db.users.find((u) => u.email === email && u.password === password);
  if (!user) {
    return res.status(401).json({ message: "Invalid email or password" });
  }

  res.json({ message: "Login successful", user });
});

// @route  GET /api/users/doctors
// @desc   Get list of all doctors
router.get("/doctors", (req, res) => {
  const doctors = db.users.filter((u) => u.role === "doctor");
  res.json(doctors);
});

// @route  GET /api/users/doctors/:id
// @desc   Get a single doctor's details
router.get("/doctors/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const doctor = db.users.find((u) => u.id === id && u.role === "doctor");
  if (!doctor) {
    return res.status(404).json({ message: "Doctor not found" });
  }
  res.json(doctor);
});

module.exports = router;
