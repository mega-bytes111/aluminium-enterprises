const services = [
  "ACP Cladding & Facades",
  "WHPL Cladding Work",
  "Entrance & Canopy Design",
  "ACP Signage & Hoardings",
  "Interior ACP Partitions",
  "Exterior ACP Facades",
  "Custom ACP Designs",
  "ACP Repair & Maintenance",
];

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
          Our ACP Fabrication Services
        </h2>

        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-xl shadow hover:shadow-xl hover:-translate-y-1 transition"
            >
              <h3 className="font-semibold text-gray-700 text-center">
                {service}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;