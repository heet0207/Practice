import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import DoctorList from "./pages/DoctorList";
import BookAppointment from "./pages/BookAppointment";
import PatientDashboard from "./pages/PatientDashboard";
import DoctorDashboard from "./pages/DoctorDashboard";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<DoctorList />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route
            path="/book/:doctorId"
            element={
              <PrivateRoute roles={["patient"]}>
                <BookAppointment />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/patient"
            element={
              <PrivateRoute roles={["patient"]}>
                <PatientDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/doctor"
            element={
              <PrivateRoute roles={["doctor"]}>
                <DoctorDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
