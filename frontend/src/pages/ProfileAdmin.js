import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../component/DashboardLayout";

const ProfileAdmin = () => {
  const [form, setForm] = useState({
    sejarah: "",
    visi: "",
    misi: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profile");
        if (res.data) {
          setForm({
            sejarah: res.data.sejarah || "",
            visi: res.data.visi || "",
            misi: res.data.misi || "",
          });
        }
      } catch (err) {
        console.error("Gagal mengambil profil:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      alert("Token tidak ditemukan! Silakan login ulang.");
      return;
    }

    try {
      await axios.put("http://localhost:5000/api/profile", form, {
        headers: { Authorization: `Bearer ${token}` },
      });

      alert("Profil berhasil diperbarui!");
    } catch (err) {
      console.error("Gagal memperbarui profil:", err.response || err);
      alert("Terjadi kesalahan saat menyimpan data.");
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto p-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Kelola Profil Sekolah
        </h2>

        {/* Card */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-6 space-y-6"
        >
          {/* Sejarah */}
          <div>
            <label className="block font-semibold text-blue-700 mb-1">
              Sejarah Sekolah
            </label>
            <textarea
              name="sejarah"
              value={form.sejarah}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            />
          </div>

          {/* Visi */}
          <div>
            <label className="block font-semibold text-blue-700 mb-1">
              Visi Sekolah
            </label>
            <textarea
              name="visi"
              value={form.visi}
              onChange={handleChange}
              rows="3"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            />
          </div>

          {/* Misi */}
          <div>
            <label className="block font-semibold text-blue-700 mb-1">
              Misi Sekolah
            </label>
            <textarea
              name="misi"
              value={form.misi}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-400 focus:border-blue-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-3 rounded-lg shadow hover:bg-blue-700 transition"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </DashboardLayout>
  );
};

export default ProfileAdmin;
