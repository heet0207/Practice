const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

// Single User schema shared by Patient, Doctor, and Admin — role field decides behavior
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["patient", "doctor", "admin"],
      default: "patient",
    },
    phone: {
      type: String,
      default: "",
    },
    // Doctor-specific fields (ignored for patients/admins)
    specialization: {
      type: String,
      default: "",
    },
    experience: {
      type: Number,
      default: 0,
    },
    availability: [
      {
        day: { type: String }, // e.g. "Monday"
        slots: [{ type: String }], // e.g. ["10:00 AM", "10:30 AM"]
      },
    ],
  },
  { timestamps: true }
);

// Hash password before saving, only if it was modified
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Instance method to compare entered password with hashed password
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
