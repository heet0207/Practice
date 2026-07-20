import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import PublicNavbar from "./components/PublicNavbar";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import BookAppointment from "./pages/BookAppointment";
import DoctorProfile from "./pages/DoctorProfile";
import Specialties from "./pages/Specialties";
import SpecialtyDoctors from "./pages/SpecialtyDoctors";

const AUTH_ROUTE_PREFIXES = ["/patient-dashboard", "/doctor-dashboard", "/book-appointment", "/doctor/", "/specialties"];

function Layout() {
  const location = useLocation();
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const matchesAuthRoute = AUTH_ROUTE_PREFIXES.some((p) => location.pathname.startsWith(p));
    setIsAuthed(!!user && matchesAuthRoute);
  }, [location]);

  if (isAuthed) {
    return (
      <div className="app-shell">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/patient-dashboard" element={<PatientDashboard />} />
            <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
            <Route path="/book-appointment" element={<BookAppointment />} />
            <Route path="/doctor/:id" element={<DoctorProfile />} />
            <Route path="/specialties" element={<Specialties />} />
            <Route path="/specialties/:slug" element={<SpecialtyDoctors />} />
          </Routes>
        </div>
      </div>
    );
  }

  return (
    <>
      {location.pathname === "/" && <PublicNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/patient-dashboard" element={<PatientDashboard />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/doctor/:id" element={<DoctorProfile />} />
        <Route path="/specialties" element={<Specialties />} />
        <Route path="/specialties/:slug" element={<SpecialtyDoctors />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
