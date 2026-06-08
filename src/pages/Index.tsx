import LandingHero from "@/components/landing/LandingHero";
import ReviewsSection from "@/components/landing/ReviewsSection";
import ServicesSection from "@/components/landing/ServicesSection";
import ProcessSection from "@/components/landing/ProcessSection";
import WhoWeServeSection from "@/components/landing/WhoWeServeSection";
import WhyDifferentSection from "@/components/landing/WhyDifferentSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Detool.AI — Website Design & Automation For Service Businesses"
        description="We build custom websites and set up automation tools for service businesses. Missed call text-back, automated reviews, AI chatbot. Starting at $297/mo."
        path="/"
      />
      <LandingHero />
      <ReviewsSection />
      <ServicesSection />
      <ProcessSection />
      <WhoWeServeSection />
      <WhyDifferentSection />
      <DemoRequestForm />
      <FAQSection />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
