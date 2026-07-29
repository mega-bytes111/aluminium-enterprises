import { useState } from "react";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaInstagram,
} from "react-icons/fa";
import Logo from "./Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-3 shadow-xl sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">

        {/* ✅ Logo */}
        <Logo />

        {/* ✅ Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">

          <a
            href="#about"
            className="font-semibold hover:text-yellow-300 transition"
          >
            About
          </a>

          <a
            href="https://wa.me/919670333923"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+919670333923"
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm"
          >
            <FaPhoneAlt />
            Call Now
          </a>

          <a
            href="https://instagram.com/shrivishwkarmaenterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 px-4 py-2 rounded-full font-semibold transition shadow-lg text-sm"
          >
            <FaInstagram />
            Instagram
          </a>

        </div>

        {/* ✅ Mobile Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-2xl transition-transform duration-300"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* ✅ Animated Mobile Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        } bg-blue-800 text-white`}
      >
        <div className="px-6 py-4 space-y-3">

          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="block py-2 font-semibold border-b border-blue-600"
          >
            About
          </a>

          <h3 className="font-semibold text-lg border-b border-blue-600 pb-2">
            Contact
          </h3>

          <a
            href="https://wa.me/919670333923"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="tel:+919670333923"
            className="flex items-center gap-2 py-2"
          >
            <FaPhoneAlt />
            Call 1
          </a>

          <a
            href="tel:+919695583003"
            className="flex items-center gap-2 py-2"
          >
            <FaPhoneAlt />
            Call 2
          </a>

          <a
            href="https://m.me/shrivishwkarmaenterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2"
          >
            💬 Messenger
          </a>

          <a
            href="https://instagram.com/shrivishwkarmaenterprises"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 py-2"
          >
            <FaInstagram />
            Instagram
          </a>

          <a
            href="mailto:shrivishwkarmaenterprises@gmail.com"
            className="flex items-center gap-2 py-2"
          >
            <FaEnvelope />
            Email
          </a>

        </div>
      </div>

    </header>
  );
};

export default Header;