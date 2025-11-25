require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");

// Import routes
const authRoutes = require("./routes/authRoutes");
const newsRoutes = require("./routes/newsRoutes");
const profileRoutes = require("./routes/profileRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
console.log("Folder uploads diakses dari:", path.join(__dirname, "uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/news", newsRoutes);
app.use("/api/profile", require("./routes/profileRoutes"));



app.get("/", (req, res) => {
  res.send("Backend CMS Sekolah Berjalan!");
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);
