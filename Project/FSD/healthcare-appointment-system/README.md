# Smart Healthcare Appointment System (FSD-2 Project)

A full-stack MERN application for booking and managing healthcare appointments,
with separate flows for Patients, Doctors, and Admins.

## Tech Stack
- **Frontend:** React, React Router, Tailwind CSS, Axios
- **Backend:** Node.js, Express.js, JWT auth, bcrypt
- **Database:** MongoDB (Mongoose)

## Folder Structure
```
healthcare-appointment-system/
├── backend/
│   ├── config/db.js
│   ├── models/ (User.js, Appointment.js)
│   ├── middleware/auth.js
│   ├── controllers/ (authController.js, doctorController.js, appointmentController.js)
│   ├── routes/ (authRoutes.js, doctorRoutes.js, appointmentRoutes.js)
│   ├── server.js
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── api/axios.js
    │   ├── context/AuthContext.jsx
    │   ├── components/ (Navbar, DoctorCard, AppointmentCard, PrivateRoute)
    │   ├── pages/ (Login, Register, DoctorList, BookAppointment, PatientDashboard, DoctorDashboard, AdminDashboard)
    │   └── App.jsx
    └── public/index.html
```

## Setup Instructions

### 1. Backend
```bash
cd backend
npm install
cp .env.example .env
# edit .env with your MongoDB URI and a JWT secret
npm run dev
```
Backend runs on **http://localhost:5000**

### 2. Frontend
```bash
cd frontend
npm install
npm start
```
Frontend runs on **http://localhost:3000**

### 3. MongoDB
Use a local MongoDB instance (`mongodb://127.0.0.1:27017/healthcare_appointment_system`)
or a free MongoDB Atlas cluster — just paste the connection string into `.env`.

## Creating an Admin User
There's no public admin signup (by design). After registering a normal user,
manually update their role in MongoDB:
```js
db.users.updateOne({ email: "admin@example.com" }, { $set: { role: "admin" } })
```

## Core Features Implemented
- JWT-based authentication with role-based access (patient / doctor / admin)
- Doctor search/listing by specialization
- Appointment booking with double-booking prevention (unique index on doctor+date+timeSlot)
- Patient dashboard: view & cancel own appointments
- Doctor dashboard: confirm / complete appointments, add notes
- Admin dashboard: view all appointments, doctor count, completed visit stats

## Possible Extensions (good for viva/demo talking points)
- Email/SMS reminders via Nodemailer (dependency already included)
- Real-time slot updates via Socket.io
- File uploads for medical reports/prescriptions (Multer)
- Doctor availability calendar UI
