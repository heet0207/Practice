# Smart Healthcare Appointment System (FSD-2 Project)

A simple full-stack project built with **React (JSX)** for the frontend
and **Node.js + Express** for the backend. Data is stored in a local
`backend/db.json` file (created automatically on first run), so
registered users and appointments now survive server restarts. A
`database/healthcare_db.sql` file is included in case your teacher
wants a real MySQL version later.

## Features
- Patient & Doctor registration/login (duplicate emails are rejected)
- Patient can book appointments with doctors
- Patient can view/cancel their own appointments
- Doctor can view appointment requests and Confirm/Cancel them
- Email notifications sent on booking and on confirm/cancel (optional — see below)
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

## Enabling Email Notifications (optional)

Without any setup, the app works fine — emails are just skipped and
logged to the backend terminal instead. To actually send real emails:

1. In the `backend` folder, copy `.env.example` to a new file named `.env`
2. Open `.env` and fill in:
   - `EMAIL_USER` = your Gmail address
   - `EMAIL_PASS` = a Gmail **App Password** (not your normal password —
     generate one at https://myaccount.google.com/apppasswords after
     turning on 2-Step Verification)
3. Restart the backend (`npm start`)

Once set up, patients get an email when they book, and both the patient
and doctor get an email when an appointment is confirmed or cancelled.

### If the app says "Sent!" but no email arrives
A successful send only means Gmail's SMTP server *accepted* the message —
it doesn't guarantee instant inbox delivery. If that happens:
- Check the **Spam/Promotions folder** of the recipient address — new
  sender addresses often land there for the first few emails.
- Double check the patient's email address is spelled correctly (typos
  won't always bounce immediately).
- Check the backend terminal — every send now logs the Gmail `messageId`
  and any rejected recipients, which is the most reliable way to confirm
  what actually happened.
- Delivery can take a couple of minutes, especially the first time a new
  Gmail app password is used.
- If you're sending **to the same Gmail address you're sending from**,
  Gmail sometimes delays or filters those more aggressively — try a
  different "to" address to confirm the pipeline works.

## Folder Structure
```
smart-healthcare-appointment-system/
├── backend/          -> Express server, routes, file-backed data (db.json), email utility
├── frontend/          -> React app (pages, components)
├── database/          -> Optional MySQL schema
└── README.md
```

## Notes for Submission
- Passwords are stored in plain text here for simplicity (a real
  production app should hash them with bcrypt) — mention this as a
  "future improvement" in your report if asked.
- Data now persists in `backend/db.json` between restarts. Delete that
  file if you ever want to reset back to the original demo data.

