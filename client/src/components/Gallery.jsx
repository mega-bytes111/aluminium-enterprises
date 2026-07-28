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
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-12">
          Our Project Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 group"
            >
              <img
                src={img}
                alt={`Project ${index + 1}`}
                loading="lazy"
                className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;