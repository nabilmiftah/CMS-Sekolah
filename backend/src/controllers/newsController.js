const db = require("../config/db");
const path = require("path");

// 🟢 GET Semua Berita (Public)
exports.getNews = (req, res) => {
  const sql = `
    SELECT id, title, content, image, created_at
    FROM news
    ORDER BY created_at DESC
  `;

  db.query(sql, (err, result) => {
    if (err) {
      console.error("❌ ERROR getNews:", err);
      return res.status(500).json({ message: "Gagal mengambil berita" });
    }

    // tambahkan URL lengkap untuk field image
    const data = result.map((row) => ({
      ...row,
      image: row.image
        ? `${req.protocol}://${req.get("host")}/${row.image}`
        : null,
    }));

    res.status(200).json(data);
  });
};

// 🟢 CREATE Berita baru (Hanya Admin)
exports.createNews = (req, res) => {
  const { title, content } = req.body;
  const image = req.file ? `uploads/news/${req.file.filename}` : null;  
  const userId = req.user.id; // user dari token JWT

  if (!title || !content) {
    return res.status(400).json({ message: "Judul dan konten wajib diisi" });
  }

  const sql = "INSERT INTO news (title, content, image, user_id) VALUES (?, ?, ?, ?)";
  db.query(sql, [title, content, image, userId], (err, result) => {
    if (err) {
      console.error("❌ ERROR SQL createNews:", err);
      return res.status(500).json({ message: "Gagal menambahkan berita" });
    }

    res.status(201).json({
      message: "Berita berhasil ditambahkan",
      news: {
        id: result.insertId,
        title,
        content,
        image: image ? `${req.protocol}://${req.get("host")}/${image}` : null,
        user_id: userId,
      },
    });
  });
};

// 🟢 UPDATE Berita (Hanya Admin)
exports.updateNews = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const image = req.file ? req.file.path.replace(/\\/g, "/") : null;

  const sql = image
    ? "UPDATE news SET title=?, content=?, image=?, updated_at=NOW() WHERE id=?"
    : "UPDATE news SET title=?, content=?, updated_at=NOW() WHERE id=?";

  const values = image ? [title, content, image, id] : [title, content, id];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("❌ ERROR updateNews:", err);
      return res.status(500).json({ message: "Gagal mengupdate berita" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Berita tidak ditemukan" });
    }

    res.status(200).json({ message: "Berita berhasil diupdate" });
  });
};

// 🟢 DELETE Berita (Hanya Admin)
exports.deleteNews = (req, res) => {
  const { id } = req.params;

  const sql = "DELETE FROM news WHERE id=?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      console.error("❌ ERROR deleteNews:", err);
      return res.status(500).json({ message: "Gagal menghapus berita" });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Berita tidak ditemukan" });
    }

    res.status(200).json({ message: "Berita berhasil dihapus" });
  });
};
