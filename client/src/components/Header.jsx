import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center gap-4">

        {/* ✅ Logo */}
        <Logo />

        {/* ✅ Director Info (Desktop only) */}
        <div className="hidden lg:block text-right">
          <p className="text-sm font-semibold">
            Vinod Vishwakarma
          </p>
          <p className="text-xs opacity-80">
            Managing Director
          </p>
          <p className="text-xs opacity-80 mt-1">
            📞 9670333923 | 9695583003
          </p>
        </div>

        {/* ✅ Action Buttons */}
        <div className="flex items-center gap-3">

          {/* ✅ WhatsApp Button */}
          <a
            href="https://wa.me/919670333923"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] hover:shadow-green-400/50 hover:shadow-xl px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm md:text-base whitespace-nowrap"
          >
            <i className="fab fa-whatsapp text-lg"></i>
            WhatsApp
          </a>

          {/* ✅ Call Button */}
          <a
            href="tel:+919670333923"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 hover:shadow-orange-400/50 hover:shadow-xl px-4 md:px-6 py-2 rounded-full font-semibold transition shadow-lg whitespace-nowrap text-sm md:text-base"
          >
            <i className="fas fa-phone-alt text-sm"></i>
            Call Now
          </a>

        </div>

      </div>
    </header>
  );
};

export default Header;