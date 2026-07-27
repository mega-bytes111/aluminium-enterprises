const features = [
  "5+ Years Experience",
  "100+ Successful Projects",
  "GST Verified Company",
  "Free Site Visit",
  "24/7 Customer Support",
  "Quality Workmanship",
];

const WhyChooseUs = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/10 p-6 rounded-xl backdrop-blur-md hover:bg-white/20 transition"
            >
              ✅ {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;