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
    return { sent: false, reason: "not_configured" };
  }

  try {
    const info = await transporter.sendMail({
      from: `"Smart Healthcare" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html
    });

    // sendMail() resolving without an error only means Gmail's SMTP relay
    // accepted the message for delivery — it does NOT guarantee the
    // recipient's inbox received it. Check the response for any address
    // Gmail explicitly rejected, and log the full result so it's easy to
    // spot delivery problems (e.g. a mistyped email) in the server console.
    if (info.rejected && info.rejected.length > 0) {
      console.error(`Email to ${to} was rejected by the mail server:`, info.rejected);
      return { sent: false, reason: "rejected", error: `Rejected recipient(s): ${info.rejected.join(", ")}` };
    }

    console.log(`Email accepted for delivery to ${to}: "${subject}" (messageId: ${info.messageId})`);
    return { sent: true };
  } catch (err) {
    console.error("Failed to send email:", err.message);
    return { sent: false, reason: "error", error: err.message };
  }
}

module.exports = sendEmail;
