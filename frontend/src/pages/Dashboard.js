import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <aside className="w-64 bg-blue-700 text-white p-6 space-y-6">
        <h2 className="text-2xl font-bold tracking-wide">CMS Sekolah</h2>

        <nav className="space-y-3">
          <Link
            to="/dashboard"
            className="block py-2 px-4 rounded-lg bg-blue-800 hover:bg-blue-600 transition"
          >
            Dashboard
          </Link>

          <Link
            to="/news"
            className="block py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Berita
          </Link>

          <Link
            to="/profile"
            className="block py-2 px-4 rounded-lg hover:bg-blue-600 transition"
          >
            Profil Sekolah
          </Link>

          <Link
            to="/"
            className="block py-2 px-4 rounded-lg hover:bg-red-600 bg-red-500 transition mt-4"
          >
            Logout
          </Link>
        </nav>
      </aside>

      {/* MAIN CONTENT */}
      <div className="flex-1">

        {/* HEADER */}
        <header className="bg-white shadow p-4">
          <h1 className="text-xl font-semibold">Dashboard Cekolah Kita</h1>
        </header>

        {/* CONTENT */}
        <main className="p-6">

          {/* STAT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-600">Jumlah Berita</h3>
              <p className="text-3xl font-bold text-blue-700 mt-2">12</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-600">Profil Sekolah</h3>
              <p className="text-3xl font-bold text-blue-700 mt-2">1</p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-gray-600">Admin Aktif</h3>
              <p className="text-3xl font-bold text-blue-700 mt-2">3</p>
            </div>

          </div>

        </main>
      </div>
    </div>
  );
}

export default Dashboard;
