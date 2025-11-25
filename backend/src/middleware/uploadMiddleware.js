const multer = require("multer");
const path = require("path");

// Konfigurasi penyimpanan
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/news/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // contoh: 17313512345.jpg
  },
});

// Filter hanya gambar
const fileFilter = (req, file, cb) => {
  const allowedTypes = /jpeg|jpg|png|gif/;
  const ext = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mime = allowedTypes.test(file.mimetype);
  if (ext && mime) {
    cb(null, true);
  } else {
    cb(new Error("Hanya file gambar yang diperbolehkan!"));
  }
};

const upload = multer({
  storage,
  fileFilter,
});

module.exports = upload;
