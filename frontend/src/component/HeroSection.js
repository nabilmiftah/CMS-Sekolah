export default function HeroSection() {
    return (
    <section className="bg-gray-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              <span className="text-green-600">MA</span> SUNAN
              <br />
              KALIJAGA
            </h1>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Mencetak penerus bangsa yang cerdas dan adaptif. 
              Kami membekali siswa dengan prestasi global dan 
              keislaman yang teguh, siap bersaing di dunia 
              internasional.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl">
                Get Started
                <span className="text-xl">›</span>
              </button>
              
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-gray-600 font-medium">We are in Socials Media :</span>
              <div className="flex gap-3">
                <a 
                  href="#facebook" 
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Facebook"
                >
                </a>
                <a 
                  href="#instagram" 
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Instagram"
                >
                 
                </a>
                <a 
                  href="#youtube" 
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="YouTube"
                >
                  
                </a>
                <a 
                  href="#telegram" 
                  className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Telegram"
                >
                  
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
                alt="MA Sunan Kalijaga Building"
                className="w-full h-auto object-cover"
              />
              
              {/* Floating Card */}
              <div className="absolute top-6 right-6 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex-shrink-0"></div>
                  <div>
                    <p className="text-xs text-gray-500 mb-1">BEASISWA</p>
                    <p className="text-sm font-semibold text-gray-900">
                      Lembaga Sultan Hasanudin
                    </p>
                    <p className="text-xs text-gray-400 mt-1">24 Oktober 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
}