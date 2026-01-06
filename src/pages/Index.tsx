import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProblemsSection from "@/components/ProblemsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ROICalculator from "@/components/ROICalculator";
import IntegrationsSection from "@/components/IntegrationsSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ExitIntentPopup from "@/components/ExitIntentPopup";

import { useNavigateToSection } from "@/hooks/useNavigateToSection";


const Index = () => {
  useNavigateToSection(); // This will handle hash navigation
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <AboutSection />
      <TestimonialsSection />
      <ProblemsSection />
      <FeaturesSection />
      <ROICalculator />
      <IntegrationsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
};

export default Index;