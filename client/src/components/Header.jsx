import { useState } from "react";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* Logo */}
        <Logo />

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">

          <a
            href="https://wa.me/919670333923"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm"
          >
            WhatsApp
          </a>

          <a
            href="tel:+919670333923"
            className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm"
          >
            Call Now
          </a>

        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 text-white px-6 py-4 space-y-3">

          <h3 className="font-semibold text-lg border-b border-blue-600 pb-2">
            Contact
          </h3>

          <a
            href="https://wa.me/919670333923"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2"
          >
            WhatsApp
          </a>

          <a href="tel:+919670333923" className="block py-2">
            Call 1
          </a>

          <a href="tel:+919695583003" className="block py-2">
            Call 2
          </a>

          <a
            href="mailto:shrivishwkarmaenterprises@gmail.com"
            className="block py-2"
          >
            Email
          </a>

        </div>
      )}
    </header>
  );
};

export default Header;