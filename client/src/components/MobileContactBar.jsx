const MobileContactBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white flex justify-around py-3 md:hidden z-50 text-sm">

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
  className="flex items-center gap-1 text-blue-300 font-semibold"
>
  <i className="fab fa-facebook-messenger text-lg"></i>
  Messenger
</a>

      <a href="mailto:shrivishwkarmaenterprises@gmail.com">
        ✉ Email
      </a>

    </div>
  );
};

export default MobileContactBar;