const express = require("express");
const { getNews, createNews, updateNews, deleteNews } = require("../controllers/newsController");
const auth = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

const router = express.Router();

// Konfigurasi upload gambar
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/news");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// 🟢 Semua user bisa lihat berita
router.get("/", getNews);

// 🔒 Hanya admin yang bisa buat, edit, hapus berita
router.post("/", auth(["admin"]), upload.single("image"), createNews);
router.put("/:id", auth(["admin"]), upload.single("image"), updateNews);
router.delete("/:id", auth(["admin"]), deleteNews);

module.exports = router;
