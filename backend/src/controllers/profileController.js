const db = require("../config/db");

// GET Profile
exports.getProfile = (req, res) => {
  const sql = "SELECT * FROM profile LIMIT 1";

  db.query(sql, (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal mengambil data" });

    res.status(200).json(result[0] || {});
  });
};

// UPDATE or INSERT Profile
exports.updateProfile = (req, res) => {
  const { sejarah, visi, misi } = req.body;

  const checkSql = "SELECT * FROM profile LIMIT 1";

  db.query(checkSql, (err, result) => {
    if (err) return res.status(500).json({ message: "Gagal memeriksa data" });

    // JIKA BELUM ADA PROFIL → INSERT
    if (result.length === 0) {
      const insertSql = `
        INSERT INTO profile (sejarah, visi, misi) 
        VALUES (?, ?, ?)
      `;

      db.query(insertSql, [sejarah, visi, misi], (err2) => {
        if (err2) {
          console.log("INSERT ERROR:", err2);
          return res.status(500).json({ message: "Gagal menambahkan profil" });
        }

        return res.status(201).json({ message: "Profil berhasil dibuat" });
      });

    } else {
      // JIKA SUDAH ADA PROFIL → UPDATE
      const id = result[0].id;

      const updateSql = `
        UPDATE profile 
        SET sejarah=?, visi=?, misi=?, updated_at=CURRENT_TIMESTAMP 
        WHERE id=?
      `;

      db.query(updateSql, [sejarah, visi, misi, id], (err3) => {
        if (err3) {
          console.log("UPDATE ERROR:", err3);
          return res.status(500).json({ message: "Gagal mengupdate profil" });
        }

        return res.status(200).json({ message: "Profil berhasil diupdate" });
      });
    }
  });
};
