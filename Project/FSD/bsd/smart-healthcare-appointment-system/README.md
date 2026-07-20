# Smart Healthcare Appointment System (FSD-2 Project)

A simple full-stack project built with **React (JSX)** for the frontend
and **Node.js + Express** for the backend. Data is stored in-memory
(`backend/data.js`) so you can run the project immediately without
setting up MySQL. A `database/healthcare_db.sql` file is included in
case your teacher wants a real database version later.

## Features
- Patient & Doctor registration/login
- Patient can book appointments with doctors
- Patient can view/cancel their own appointments
- Doctor can view appointment requests and Confirm/Cancel them
- Admin user included in demo data (role: admin)

## Demo Accounts
| Role    | Email                | Password |
|---------|-----------------------|----------|
| Doctor  | aisha@hospital.com    | 123456   |
| Doctor  | rohan@hospital.com    | 123456   |
| Patient | priya@gmail.com       | 123456   |
| Admin   | admin@hospital.com    | admin123 |

## How to Run

### 1. Backend
```
cd backend
npm install
npm start
```
Backend runs on: http://localhost:5000

### 2. Frontend
Open a new terminal:
```
cd frontend
npm install
npm start
```
Frontend runs on: http://localhost:3000

Make sure the backend is running first, since the frontend calls
`http://localhost:5000/api/...` for login, register, and appointments.

## Folder Structure
```
smart-healthcare-appointment-system/
├── backend/          -> Express server, routes, in-memory data
├── frontend/          -> React app (pages, components)
├── database/          -> Optional MySQL schema
└── README.md
```

## Notes for Submission
- Passwords are stored in plain text here for simplicity (a real
  production app should hash them with bcrypt) — mention this as a
  "future improvement" in your report if asked.
- Data resets every time you restart the backend server, since it's
  stored in memory, not a real database.
