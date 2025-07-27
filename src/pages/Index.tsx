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


const Index = () => {
  console.log("Index component is rendering");
  
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
      
    </div>
  );
};

export default Index;