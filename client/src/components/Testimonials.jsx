const testimonials = [
  {
    name: "Rajesh Sharma",
    text: "Excellent ACP work. Completed before deadline. Highly recommended!",
  },
  {
    name: "Priya Singh",
    text: "Professional team with great finishing quality.",
  },
  {
    name: "Amit Kumar",
    text: "Best aluminium fabrication service in Lucknow.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Client Testimonials
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition"
            >
              <p className="text-gray-600 mb-4">"{item.text}"</p>
              <h4 className="font-semibold text-blue-900">
                - {item.name}
              </h4>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;