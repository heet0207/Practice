// utils/sendEmail.js
// Sends an email using Nodemailer + Gmail SMTP.
//
// SETUP REQUIRED before this will work:
// 1. Copy .env.example to .env in the backend folder
// 2. Fill in EMAIL_USER (your Gmail address) and EMAIL_PASS
//    (a 16-character Gmail "App Password" — NOT your normal password)
//    How to get an App Password: Google Account > Security >
//    2-Step Verification (must be ON) > App Passwords > generate one
//    for "Mail".
// 3. Restart the backend server after adding the .env file.
//
// If EMAIL_USER / EMAIL_PASS are not set, emails are skipped silently
// (logged to the console instead) so the rest of the app still works
// without email configured.

require("dotenv").config();
const nodemailer = require("nodemailer");

const isConfigured = process.env.EMAIL_USER && process.env.EMAIL_PASS;

let transporter = null;
if (isConfigured) {
  transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

async function sendEmail({ to, subject, html }) {
  if (!isConfigured) {
    console.log(`[email skipped — EMAIL_USER/EMAIL_PASS not set] Would send "${subject}" to ${to}`);
    return;
  }

  try {
    await transporter.sendMail({
      from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });
    console.log(`Email sent to ${to}: ${subject}`);
  } catch (err) {
    console.error("Failed to send email:", err.message);
  }
}

module.exports = sendEmail;
