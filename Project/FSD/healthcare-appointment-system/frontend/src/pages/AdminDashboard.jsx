import React, { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const [apptRes, docRes] = await Promise.all([
        api.get("/appointments"),
        api.get("/doctors"),
      ]);
      setAppointments(apptRes.data);
      setDoctors(docRes.data);
    };
    fetchData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Admin Panel</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-3xl font-bold text-blue-600">{appointments.length}</p>
          <p className="text-gray-500">Total Appointments</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-3xl font-bold text-blue-600">{doctors.length}</p>
          <p className="text-gray-500">Registered Doctors</p>
        </div>
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <p className="text-3xl font-bold text-blue-600">
            {appointments.filter((a) => a.status === "completed").length}
          </p>
          <p className="text-gray-500">Completed Visits</p>
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3">All Appointments</h3>
      <div className="bg-white rounded-lg shadow overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3">Patient</th>
              <th className="p-3">Doctor</th>
              <th className="p-3">Date</th>
              <th className="p-3">Time</th>
              <th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt._id} className="border-t">
                <td className="p-3">{appt.patient?.name}</td>
                <td className="p-3">{appt.doctor?.name}</td>
                <td className="p-3">{appt.date}</td>
                <td className="p-3">{appt.timeSlot}</td>
                <td className="p-3 capitalize">{appt.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
