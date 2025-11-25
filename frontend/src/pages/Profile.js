import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "../component/DashboardLayout";

const Profile = () => {
  const [profile, setProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/profile");
        setProfile(res.data);
      } catch (err) {
        console.error("Gagal mengambil data profil:", err);
      }
    };
    fetchProfile();
  }, []);

  if (!profile)
    return (
      <DashboardLayout>
        <p className="text-gray-600">Memuat data profil...</p>
      </DashboardLayout>
    );

  return (
    <DashboardLayout>
      <div className="space-y-6">

        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800">Profil Sekolah</h2>

        {/* Card Container */}
        <div className="bg-white rounded-xl shadow p-6 space-y-6">

          {/* Sejarah */}
          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Sejarah</h3>
            <p className="text-gray-700 leading-relaxed">
              {profile.sejarah || "Belum ada data"}
            </p>
          </section>

          <hr />

          {/* Visi */}
          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Visi</h3>
            <p className="text-gray-700 leading-relaxed">
              {profile.visi || "Belum ada data"}
            </p>
          </section>

          <hr />

          {/* Misi */}
          <section>
            <h3 className="text-xl font-semibold text-blue-700 mb-1">Misi</h3>
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {profile.misi || "Belum ada data"}
            </p>
          </section>

        </div>

        {/* Edit Button */}
        <button
          onClick={() => navigate("/admin/profile")}
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Edit Profil
        </button>

      </div>
    </DashboardLayout>
  );
};

export default Profile;
