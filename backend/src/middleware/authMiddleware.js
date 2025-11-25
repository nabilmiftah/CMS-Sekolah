const jwt = require("jsonwebtoken");
require("dotenv").config();

/**
 * Middleware otentikasi & otorisasi
 * @param {Array} allowedRoles - daftar role yang boleh mengakses route
 */
const auth = (allowedRoles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Periksa token di header
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ message: "Token tidak ditemukan" });
    }

    const token = authHeader.split(" ")[1];

    try {
      // Verifikasi token JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; // simpan info user di req.user

      // Jika ada pembatasan role, periksa di sini
      if (allowedRoles.length > 0 && !allowedRoles.includes(req.user.role)) {
        return res.status(403).json({ message: "Akses ditolak, hanya untuk admin" });
      }

      next();
    } catch (error) {
      console.error("❌ Token tidak valid:", error.message);
      res.status(403).json({ message: "Token tidak valid" });
    }
  };
};

module.exports = auth;
