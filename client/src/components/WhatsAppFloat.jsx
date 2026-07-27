const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919670333923"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-48 right-6 bg-[#25D366] hover:bg-[#1ebe5d] w-16 h-16 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300 z-50 group"
    >
      <i className="fab fa-whatsapp text-white text-3xl"></i>

      {/* ✅ Tooltip */}
      <span className="absolute right-20 bg-black text-white text-xs px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloat;