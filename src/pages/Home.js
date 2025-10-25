import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import PromoBanner from "../components/PromoBanner";
import WhyChooseUsSection from "../sections/WhyChooseUsSection";
import ProductSection from "../sections/ProductSection";
import ServicesSection from "../sections/ServicesSection";
import OurClientsSection from "../sections/OurClientsSection";
import ArticlesSection from "../sections/ArticlesSection";
import ContactSection from "../sections/ContactSection";
import AppointmentBannerSection from "../sections/AppointmentBannerSection";
import SocialVisitSection from "../components/SocialVisitSection";
import site from "../content/site";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded focus:bg-white focus:px-3 focus:py-2 focus:ring-2 focus:ring-blue-600"
      >
        Skip to content
      </a>
      <Navbar />
      <Hero />
      <ServicesSection />
      <ProductSection />
      <PromoBanner />
      <WhyChooseUsSection />
      <OurClientsSection />
      <SocialVisitSection socials={site.footer.socials} />
      <ArticlesSection />
      <ContactSection />
      <AppointmentBannerSection />
      <Footer />
    </div>
  );
}
