const MobileContactBar = () => {
  return (
    <div className="hidden md:flex fixed bottom-0 left-0 right-0 bg-blue-900 text-white justify-around py-3 z-40 text-sm shadow-lg">

      <a href="tel:+919670333923">
        📞 Call 1
      </a>

      <a href="tel:+919695583003">
        📞 Call 2
      </a>

      <a
        href="https://m.me/YOUR_PAGE_USERNAME"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 Messenger
      </a>

      <a href="mailto:shrivishwkarmaenterprises@gmail.com">
        ✉ Email
      </a>

    </div>
  );
};

export default MobileContactBar;