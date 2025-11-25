import React, { useState, useEffect } from "react";
import axios from "axios";
import DashboardLayout from "../component/DashboardLayout";

const Berita = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [news, setNews] = useState([]);
  const [editId, setEditId] = useState(null);

  const token = localStorage.getItem("token");

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNews(res.data);
    } catch (err) {
      console.error("Gagal memuat berita:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/news/${editId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Berita berhasil diperbarui!");
      } else {
        await axios.post("http://localhost:5000/api/news", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });
        alert("Berita berhasil disimpan!");
      }

      setTitle("");
      setContent("");
      setImage(null);
      setEditId(null);
      fetchNews();
    } catch (err) {
      alert("Gagal menyimpan berita!");
      console.error(err);
    }
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setTitle(item.title);
    setContent(item.content);
    setImage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Yakin ingin menghapus berita ini?")) return;
    try {
      await axios.delete(`http://localhost:5000/api/news/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      alert("Berita berhasil dihapus!");
      fetchNews();
    } catch (err) {
      alert("Gagal menghapus berita!");
    }
  };

  return (
    <DashboardLayout>
    <div className="p-6">

      {/* TITLE */}
      <h2 className="text-2xl font-bold text-blue-700 mb-6">Manajemen Berita</h2>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md space-y-4 mb-8"
      >
        <input
          type="text"
          placeholder="Judul Berita"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />

        <textarea
          placeholder="Isi berita"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="w-full px-4 py-2 border rounded-lg h-32 focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          className="block"
        />

        <div className="flex gap-3">
          <button
            type="submit"
            className={`px-6 py-2 text-white rounded-lg ${
              editId ? "bg-orange-500 hover:bg-orange-600" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            {editId ? "Perbarui Berita" : "Simpan Berita"}
          </button>

          {editId && (
            <button
              type="button"
              onClick={() => {
                setEditId(null);
                setTitle("");
                setContent("");
                setImage(null);
              }}
              className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
            >
              Batal
            </button>
          )}
        </div>
      </form>

      {/* LIST BERITA */}
      <h3 className="text-xl font-semibold mb-3">Daftar Berita</h3>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-3 text-left">Judul</th>
              <th className="p-3 text-left">Tanggal</th>
              <th className="p-3 text-left">Gambar</th>
              <th className="p-3 text-left">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {news.map((n, index) => (
              <tr
                key={n.id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} border-b`}
              >
                <td className="p-3">{n.title}</td>
                <td className="p-3">{new Date(n.created_at).toLocaleDateString()}</td>
                <td className="p-3">
                  {n.image && (
                    <img
                      src={
                        n.image.startsWith("http")
                          ? n.image
                          : `http://localhost:5000/${n.image.replace(/\\/g, "/")}`
                      }
                      alt="gambar berita"
                      className="w-24 rounded-lg shadow"
                    />
                  )}
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleEdit(n)}
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg mr-3 hover:bg-orange-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(n.id)}
                    className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
    </DashboardLayout>
  );
};

export default Berita;
