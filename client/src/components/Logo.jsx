const Logo = () => {
  return (
    <div className="bg-white rounded-xl px-4 py-2 shadow-xl flex items-center gap-4">

      <svg
        width="90"
        height="60"
        viewBox="0 0 240 140"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* ✅ Blue Gradient */}
          <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1e3a8a" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>

          {/* ✅ Red Gradient */}
          <linearGradient id="redGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4d4d" />
            <stop offset="100%" stopColor="#b91c1c" />
          </linearGradient>

          {/* ✅ White Gloss Gradient */}
          <linearGradient id="glossGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        {/* ✅ Ellipse Base */}
        <ellipse
          cx="120"
          cy="75"
          rx="110"
          ry="55"
          fill="url(#blueGrad)"
          stroke="#d1d5db"
          strokeWidth="4"
        />

        {/* ✅ Glossy Shine */}
        <ellipse
          cx="120"
          cy="55"
          rx="90"
          ry="30"
          fill="url(#glossGrad)"
        />

        {/* ✅ S - Metallic Red */}
        <text
          x="55"
          y="95"
          fontSize="75"
          fontWeight="900"
          fill="url(#redGrad)"
          fontFamily="Arial Black, sans-serif"
        >
          S
        </text>

        {/* ✅ V - White */}
        <text
          x="105"
          y="95"
          fontSize="75"
          fontWeight="900"
          fill="#ffffff"
          fontFamily="Arial Black, sans-serif"
        >
          V
        </text>

        {/* ✅ E - White */}
        <text
          x="155"
          y="95"
          fontSize="75"
          fontWeight="900"
          fill="#ffffff"
          fontFamily="Arial Black, sans-serif"
        >
          E
        </text>
      </svg>

      {/* ✅ Company Name */}
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