const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">

        {/* ✅ Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">

          {/* ✅ Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-8 text-center">
            About Shri Vishwkarma Enterprises
          </h2>

          {/* ✅ Content */}
          <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
            Shri Vishwkarma Enterprises is a leading provider of Structural Glazing,
            ACP Cladding, Aluminium Works, Toughened Glass solutions and premium
            fabrication services in Lucknow.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6 text-center md:text-left">
            Under the leadership of Managing Director Vinod Vishwakarma,
            the company has successfully delivered high-quality projects
            across residential, commercial, and industrial sectors.
          </p>

          {/* ✅ Clickable Address Section */}
          <div className="mt-8 text-sm text-center md:text-left border-t pt-6 space-y-3">

            <a
              href="https://maps.app.goo.gl/1AGBCA4aTpUMRAVo6"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-blue-700 transition underline decoration-dotted"
            >
              📍 1355/10, A-Block, Meena Market, Indira Nagar, Lucknow
            </a>

            <a
              href="https://maps.app.goo.gl/ywX9YN3t8Mik5fEs9"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-gray-600 hover:text-blue-700 transition underline decoration-dotted"
            >
              📍 Office: S-8 Kishan Bazar, Vibhuti Khand, Gomti Nagar, Lucknow
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;