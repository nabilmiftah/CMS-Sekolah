import PublicNavbar from "../../component/PublicNavbar";
import PublicFooter from "../../component/PublicFooter";
import HeroSection from "../../component/HeroSection";
import NewsSection from "../../component/NewsSection";


export default function Home() {
  return (
    <>
      <PublicNavbar />
      <HeroSection />
      <NewsSection />
      {/* <div className="p-6 container mx-auto">
        <section className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-xl shadow hover:bg-gray-100 cursor-pointer">
            <h2 className="font-bold text-xl">Berita Terbaru</h2>
            <p className="mt-2 text-gray-700">Informasi terkini dapat dilihat di sini.</p>
            <a className="mt-4 inline-block text-blue-600" href="/news">Lihat Berita →</a>
          </div>

          <div className="p-6 border rounded-xl shadow hover:bg-gray-100 cursor-pointer">
            <h2 className="font-bold text-xl">Profil Sekolah</h2>
            <p className="mt-2 text-gray-700">Pelajari lebih jauh mengenai SMK Contoh.</p>
            <a className="mt-4 inline-block text-blue-600" href="/profile">Lihat Profil →</a>
          </div>

          <div className="p-6 border rounded-xl shadow hover:bg-gray-100 cursor-pointer">
            <h2 className="font-bold text-xl">Kontak & Lokasi</h2>
            <p className="mt-2 text-gray-700">Hubungi kami atau lihat lokasi sekolah.</p>
            <a className="mt-4 inline-block text-blue-600" href="/contact">Lihat Kontak →</a>
          </div>
        </section>
      </div> */}

      <PublicFooter />
    </>
  );
}
