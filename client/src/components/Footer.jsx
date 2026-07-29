const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white py-10">
      <div className="container mx-auto px-4 text-center">

        <h3 className="text-xl font-bold mb-4">
          Shri Vishwkarma Enterprises
        </h3>

        <p className="opacity-80 mb-2">
          Vinod Vishwakarma (Managing Director)
        </p>

        <p className="opacity-80 mb-2">
          📞 9670333923 | 9695583003
        </p>

        <p className="opacity-80 mb-4">
          ✉ shrivishwkarmaenterprises@gmail.com
        </p>

        {/* ✅ Main Address - Clickable */}
        <div className="mb-3">
          <a
  href="https://maps.app.goo.gl/1AGBCA4aTpUMRAVo6"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 text-sm opacity-80 hover:text-yellow-300 transition underline decoration-dotted"
>
  📍 1355/10, A-Block, Meena Market, Indira Nagar, Lucknow
</a>
        </div>

        {/* ✅ Office Address - Clickable */}
        <div className="mb-3">
          <a
            href="https://maps.app.goo.gl/ywX9YN3t8Mik5fEs9"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm opacity-80 hover:text-yellow-300 transition underline decoration-dotted"
          >
            📍 Office: S-8 Kishan Bazar, Vibhuti Khand, Gomti Nagar, Lucknow
          </a>
        </div>

        <p className="text-sm opacity-60 mt-6">
          © 2026 Shri Vishwkarma Enterprises. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;