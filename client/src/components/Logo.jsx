const Logo = () => {
  return (
    <div className="bg-white rounded-2xl px-4 py-2 shadow-xl flex items-center gap-4 transition-all duration-300 hover:shadow-2xl">

      {/* ✅ Official Logo Image (Premium Hover Effect) */}
      <img
        src="/images/logo.jpg"
        alt="Shri Vishwkarma Enterprises"
        className="h-12 md:h-16 w-auto object-contain rounded-xl transition-all duration-300 ease-in-out hover:scale-105 hover:brightness-110"
      />

      {/* ✅ Company Name Text */}
      <div className="leading-tight border-l-2 border-blue-900 pl-4">
        <p className="font-extrabold text-sm md:text-base text-red-600">
          Shri Vishwkarma
        </p>
        <p className="font-extrabold text-sm md:text-base text-red-600">
          Enterprises
        </p>
        <p className="text-[11px] text-blue-900 font-medium mt-1">
          Structural Glazing & ACP Works
        </p>
      </div>

    </div>
  );
};

export default Logo;