import LandingHero from "@/components/landing/LandingHero";
import ReviewsSection from "@/components/landing/ReviewsSection";
import FeatureSections from "@/components/landing/FeatureSections";
import WhoWeServeSection from "@/components/landing/WhoWeServeSection";
import ProcessSection from "@/components/landing/ProcessSection";
import WhyDifferentSection from "@/components/landing/WhyDifferentSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Detool.AI — Website Design & Automation For Service Businesses"
        description="We build custom websites and automation tools for service businesses. Starting at $297/mo."
        path="/"
      />
      <LandingHero />
      <ReviewsSection />
      <FeatureSections />
      <WhoWeServeSection />
      <ProcessSection />
      <WhyDifferentSection />
      <DemoRequestForm />
      <FAQSection />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
