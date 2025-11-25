export default function PublicNavbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">
              CEKOLAH <span className="text-green-600">KITA</span>
            </h1>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#beranda" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Beranda
            </a>
            <a 
              href="#tentang" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Tentang Kami
            </a>
            <a 
              href="#berita" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Berita
            </a>
            <a 
              href="#Contact" 
              className="text-gray-700 hover:text-green-600 font-medium transition-colors"
            >
              Contact
            </a>

            {/* button Login */}
            <a href="/login">
              <button class="bg-green-600 text-white px-6 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
                Login
              </button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
