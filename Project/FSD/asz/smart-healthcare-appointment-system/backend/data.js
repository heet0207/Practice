// data.js
// File-backed "database" using a JSON file (db.json).
// This replaces plain in-memory arrays so that registered users and
// appointments survive server restarts (e.g. nodemon auto-restarting
// when you edit a file). For a real production app you'd use MySQL/
// MongoDB instead — see database/healthcare_db.sql for that version.

const fs = require("fs");
const path = require("path");

const DB_FILE = path.join(__dirname, "db.json");

function loadInitialData() {
  return {
    users: [
      { id: 1, name: "Dr. Aisha Khan", email: "aisha@hospital.com", password: "123456", role: "doctor", specialization: "Cardiologist" },
      { id: 2, name: "Dr. Rohan Mehta", email: "rohan@hospital.com", password: "123456", role: "doctor", specialization: "Dermatologist" },
      { id: 5, name: "Dr. Neha Verma", email: "neha@hospital.com", password: "123456", role: "doctor", specialization: "Pediatrician" },
      { id: 6, name: "Dr. Karan Patel", email: "karan@hospital.com", password: "123456", role: "doctor", specialization: "Orthopedic Surgeon" },
      { id: 7, name: "Dr. Sneha Iyer", email: "sneha@hospital.com", password: "123456", role: "doctor", specialization: "Neurologist" },
      { id: 8, name: "Dr. Vikram Rao", email: "vikram@hospital.com", password: "123456", role: "doctor", specialization: "General Physician" },
      { id: 3, name: "Priya Sharma", email: "priya@gmail.com", password: "123456", role: "patient", age: 28, gender: "Female" },
      { id: 4, name: "Admin User", email: "admin@hospital.com", password: "admin123", role: "admin" }
    ],
    appointments: [
      {
        id: 1,
        patientId: 3,
        doctorId: 1,
        patientName: "Priya Sharma",
        patientEmail: "priya@gmail.com",
        doctorName: "Dr. Aisha Khan",
        doctorSpecialization: "Cardiologist",
        date: "2026-07-25",
        time: "10:00 AM",
        city: "Vadodara",
        pincode: "390001",
        status: "Pending",
        cancelReason: null
      }
    ],
    nextUserId: 9,
    nextAppointmentId: 2
  };
}

let db;
if (fs.existsSync(DB_FILE)) {
  db = JSON.parse(fs.readFileSync(DB_FILE, "utf-8"));
} else {
  db = loadInitialData();
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

function save() {
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

module.exports = {
  users: db.users,
  appointments: db.appointments,
  getNextUserId: () => {
    const id = db.nextUserId++;
    save();
    return id;
  },
  getNextAppointmentId: () => {
    const id = db.nextAppointmentId++;
    save();
    return id;
  },
  save
};
