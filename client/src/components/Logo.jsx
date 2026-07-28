const Logo = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-2 shadow-xl flex items-center gap-4">

      {/* ✅ Official Logo Image */}
      <img
        src="/images/logo.png"
        alt="Shri Vishwkarma Enterprises"
        className="h-12 md:h-16 w-auto object-contain"
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