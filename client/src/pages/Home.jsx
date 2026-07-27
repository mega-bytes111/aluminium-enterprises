import Header from "../components/Header";
import Hero from "../components/Hero";
import QuoteForm from "../components/QuoteForm";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import FadeInSection from "../components/FadeInSection";
import ScrollTop from "../components/ScrollTop";
import MobileContactBar from "../components/MobileContactBar";
import WhatsAppFloat from "../components/WhatsAppFloat";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative">

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Quote Form */}
      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>

      {/* Services */}
      <FadeInSection>
        <Services />
      </FadeInSection>

      {/* Gallery */}
      <FadeInSection>
        <Gallery />
      </FadeInSection>

      {/* Testimonials */}
      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      {/* Why Choose Us */}
      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollTop />

      {/* Mobile Bottom Contact Bar */}
      <MobileContactBar />

      <WhatsAppFloat />

    </div>
  );
};

export default Home;