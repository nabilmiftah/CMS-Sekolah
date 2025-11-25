import { Link } from "react-router-dom";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-700 text-white p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6">CMS Sekolah</h2>

        <nav className="space-y-4">
          <Link to="/dashboard" className="block hover:text-blue-200">Dashboard</Link>
          <Link to="/news" className="block hover:text-blue-200">Berita</Link>
          <Link to="/profile" className="block hover:text-blue-200">Profil Sekolah</Link>
          <Link to="/" className="block hover:text-blue-200">Logout</Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
