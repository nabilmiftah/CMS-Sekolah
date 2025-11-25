import React, { useEffect, useState } from "react";

const NewsSection = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/news");
        const data = await res.json();
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Memuat berita...</p>
      </div>
    );
  }

  return (
    <div className="w-full py-16 px-4 md:px-10 lg:px-20">
      {/* TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Berita Terbaru Di{" "}
          <span className="text-green-700">MA Sunan</span>{" "}
          <span className="text-green-800">Kalijaga</span>
        </h2>
        <p className="text-gray-500 mt-2">
          Berita Terbaru Tentang MA Sunan Kalijaga.
        </p>
      </div>

      {/* GRID NEWS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {news.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-gray-400">
                {new Date(item.date).toLocaleDateString("id-ID")}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 mt-1">By {item.author}</p>

              <button className="mt-4 text-green-600 font-medium hover:underline">
                Baca Selengkapnya
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* BUTTON SEMUA BERITA */}
      <div className="flex justify-center mt-10">
        <button className="bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all">
          Semua Berita
        </button>
      </div>
    </div>
  );
};

export default NewsSection;
