const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 text-center">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
  Shri Vishwkarma Enterprises <br />
  <span className="text-yellow-400">
    Structural Glazing & ACP Solutions
  </span>
</h2>

<p className="max-w-2xl mx-auto text-base md:text-lg opacity-90 mb-8">
  Experts in ACP Cladding, Structural Glazing, Toughened Glass,
  Aluminium Railings & Interior Works in Lucknow.
</p>

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