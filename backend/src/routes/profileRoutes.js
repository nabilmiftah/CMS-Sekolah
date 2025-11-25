const express = require("express");
const { getProfile, updateProfile } = require("../controllers/profileController");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

// Public: lihat profil
router.get("/", getProfile);

// Update profil (hanya user login)
router.put("/", auth(["admin"]), updateProfile);

module.exports = router;
