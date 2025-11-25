import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Public Pages
import Home from "./pages/public/Home";
// import Profile from "./pages/public/Profile";
import Contact from "./pages/public/Contact";

// Auth Page
import Login from "./pages/Login";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import ProfileAdmin from "./pages/ProfileAdmin";
import News from "./pages/News";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router>
      <Routes>

        {/* ==== PUBLIC ROUTES ==== */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/contact" element={<Contact />} />

        {/* ==== AUTH ==== */}
        <Route path="/login" element={<Login />} />

        {/* ==== ADMIN ROUTES ==== */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin/profile" element={<ProfileAdmin />} />

      </Routes>
    </Router>
  );
}

export default App;
