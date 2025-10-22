import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroComp from "../components/HeroComp";
import site from "../content/site";
import FAQSection from "../sections/FaqSection";
import faqItems from "../content/faq";

export default function FAQ() {
  const h = site.heroInteractive;

  return (
    <div className="bg-white text-slate-900">
      <Navbar />
      <HeroComp
        title="FAQ"
        subtitle="Pertanyaan yang sering diajukan seputar pemasangan, garansi, dan layanan."
        image={h.image}
        overlay="bg-slate-900/50"
      />
      <FAQSection items={faqItems} />
      <Footer />
    </div>
  );
}
