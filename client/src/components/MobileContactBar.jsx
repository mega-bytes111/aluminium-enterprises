import { FaPhoneAlt, FaEnvelope, FaInstagram } from "react-icons/fa";

const MobileContactBar = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 left-0 right-0 bg-blue-900 text-white justify-around items-center py-3 z-40 text-sm shadow-lg">

      {/* Call 1 */}
      <a
        href="tel:+919670333923"
        className="flex items-center gap-2 hover:text-yellow-300 transition"
      >
        <FaPhoneAlt />
        Call 1
      </a>

      {/* Call 2 */}
      <a
        href="tel:+919695583003"
        className="flex items-center gap-2 hover:text-yellow-300 transition"
      >
        <FaPhoneAlt />
        Call 2
      </a>

      {/* Messenger */}
      <a
        href="https://m.me/shrivishwkarmaenterprises"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-yellow-300 transition"
      >
        💬 Messenger
      </a>

      {/* Instagram */}
      <a
        href="https://instagram.com/YOUR_INSTAGRAM_ID"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 hover:text-pink-400 transition"
      >
        <FaInstagram />
        Instagram
      </a>

      {/* Email */}
      <a
        href="mailto:shrivishwkarmaenterprises@gmail.com"
        className="flex items-center gap-2 hover:text-yellow-300 transition"
      >
        <FaEnvelope />
        Email
      </a>

    </div>
  );
};

export default MobileContactBar;