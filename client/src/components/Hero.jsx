const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
      <div className="container mx-auto px-4">

        {/* ✅ Manager Photo */}
        <div className="flex flex-col items-center mb-8">

          <img
            src="/images/manager.jpg"
            alt="Vinod Vishwakarma"
            className="w-40 h-40 md:w-48 md:h-48 object-cover rounded-full border-4 border-white shadow-2xl"
          />

          {/* ✅ Name & Designation */}
          <p className="mt-4 text-lg font-semibold">
            Vinod Vishwakarma
          </p>
          <p className="text-sm opacity-80">
            Managing Director
          </p>

        </div>

        {/* ✅ Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Shri Vishwkarma Enterprises <br />
          <span className="text-yellow-400">
            Structural Glazing & ACP Solutions
          </span>
        </h2>

        {/* ✅ Description */}
        <p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 mb-8">
          Experts in ACP Cladding, Structural Glazing, Toughened Glass,
          Aluminium Railings & Interior Works in Lucknow.
        </p>

        {/* ✅ Stats Section */}
        <div className="flex justify-center gap-6 text-sm md:text-base">
          <div className="bg-white/10 px-6 py-3 rounded-xl">
            <div className="text-2xl font-bold text-yellow-400">5+</div>
            Years Experience
          </div>

          <div className="bg-white/10 px-6 py-3 rounded-xl">
            <div className="text-2xl font-bold text-yellow-400">100+</div>
            Projects Done
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;