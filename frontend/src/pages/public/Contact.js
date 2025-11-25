import PublicNavbar from "../../component/PublicNavbar";
import PublicFooter from "../../component/PublicFooter";

export default function Contact() {
  return (
    <>
      <PublicNavbar />
      <div className="container mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Kontak & Lokasi</h1>

        <p>Email: info@smkcontoh.sch.id</p>
        <p>Telp: 021-123456</p>
        <p>Alamat: Jl. Pendidikan No. 1</p>

        <iframe
            title="lokasi-sekolah"
          className="w-full h-64 mt-6 rounded"
          src="https://maps.google.com/maps?q=jakarta&t=&z=13&ie=UTF8&iwloc=&output=embed"
        ></iframe>
      </div>
      <PublicFooter />
    </>
  );
}
