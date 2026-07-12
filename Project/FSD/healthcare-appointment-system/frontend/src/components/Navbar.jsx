import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="font-bold text-lg">
        Smart Healthcare Appointment System
      </Link>
      <div className="flex gap-4 items-center">
        <Link to="/doctors">Find Doctors</Link>
        {!user && <Link to="/login">Login</Link>}
        {!user && <Link to="/register">Register</Link>}
        {user?.role === "patient" && <Link to="/dashboard/patient">My Dashboard</Link>}
        {user?.role === "doctor" && <Link to="/dashboard/doctor">My Dashboard</Link>}
        {user?.role === "admin" && <Link to="/dashboard/admin">Admin Panel</Link>}
        {user && (
          <button
            onClick={handleLogout}
            className="bg-white text-blue-600 px-3 py-1 rounded font-medium"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
