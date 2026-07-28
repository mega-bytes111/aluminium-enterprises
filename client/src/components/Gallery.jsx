import { useState } from "react";

const images = [
  "/images/gallery/project1.webp",
  "/images/gallery/project2.webp",
  "/images/gallery/project3.webp",
  "/images/gallery/project4.webp",
  "/images/gallery/project5.webp",
  "/images/gallery/project6.webp",
  "/images/gallery/project7.webp",
  "/images/gallery/project8.webp",
  "/images/gallery/project9.webp",
  "/images/gallery/project10.webp",
  "/images/gallery/project11.webp",
  "/images/gallery/project12.webp",
  "/images/gallery/project13.webp",
  "/images/gallery/project14.webp",
  "/images/gallery/project15.webp",
  "/images/gallery/project16.webp",
  "/images/gallery/project17.webp",
  "/images/gallery/project18.webp",
  "/images/gallery/project19.webp",
  "/images/gallery/project20.webp",
  "/images/gallery/project21.webp",
  "/images/gallery/project22.webp",
  "/images/gallery/project23.webp",
  "/images/gallery/project24.webp",
];

const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(8);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-12">
          Our Project Gallery
        </h2>

        {/* ✅ Masonry Layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">

          {images.slice(0, visibleCount).map((img, index) => (
            <div
              key={index}
              className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 cursor-pointer"
              onClick={() => setSelectedImage(img)}
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                loading="lazy"
                className="w-full object-cover rounded-2xl transform hover:scale-105 transition duration-500"
              />
            </div>
          ))}

        </div>

        {/* ✅ Explore More */}
        {visibleCount < images.length && (
          <div className="text-center mt-12">
            <button
              onClick={handleLoadMore}
              className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-semibold transition shadow-lg"
            >
              Explore More
            </button>
          </div>
        )}

      </div>

      {/* ✅ FULL SCREEN MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full View"
            className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;