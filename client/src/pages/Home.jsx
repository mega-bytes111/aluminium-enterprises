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
import WhatsAppFloat from "../components/WhatsAppFloat";

const Home = () => {
  return (
    <div className="bg-gray-50 min-h-screen relative overflow-x-hidden">

      <Header />
      <Hero />

      <div className="container mx-auto px-4">
        <QuoteForm />
      </div>

      <FadeInSection>
        <Services />
      </FadeInSection>

      <FadeInSection>
        <Gallery />
      </FadeInSection>

      <FadeInSection>
        <Testimonials />
      </FadeInSection>

      <FadeInSection>
        <WhyChooseUs />
      </FadeInSection>

      <Footer />

      <ScrollTop />
      <WhatsAppFloat />

    </div>
  );
};

export default Home;