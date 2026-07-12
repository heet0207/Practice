import React, { useEffect, useState } from "react";
import api from "../api/axios";
import DoctorCard from "../components/DoctorCard";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [search, setSearch] = useState("");

  const fetchDoctors = async (specialization = "") => {
    const { data } = await api.get("/doctors", { params: { specialization } });
    setDoctors(data);
  };

  useEffect(() => {
    fetchDoctors();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    fetchDoctors(search);
  };

  return (
    <div className="max-w-5xl mx-auto mt-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Find a Doctor</h2>
      <form onSubmit={handleSearch} className="mb-6 flex gap-2">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by specialization (e.g. Cardiologist)"
          className="border p-2 rounded flex-1"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Search</button>
      </form>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {doctors.map((doc) => (
          <DoctorCard key={doc._id} doctor={doc} />
        ))}
        {doctors.length === 0 && <p className="text-gray-500">No doctors found.</p>}
      </div>
    </div>
  );
};

export default DoctorList;
