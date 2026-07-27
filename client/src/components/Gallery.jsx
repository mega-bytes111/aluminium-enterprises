const images = [
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600",
  "https://images.unsplash.com/photo-1558036117-15e82a2c9a9a?w=600",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=600&2",
  "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&2",
];

const Gallery = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Our Project Gallery
        </h2>

        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg group cursor-pointer"
            >
              <img
                src={img}
                alt="project"
                className="w-full h-60 object-cover transform group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Gallery;