import LandingHero from "@/components/landing/LandingHero";
import QualifierSection from "@/components/landing/QualifierSection";
import OutcomeSection from "@/components/landing/OutcomeSection";
import DemoVideoSection from "@/components/landing/DemoVideoSection";
import TrustSection from "@/components/landing/TrustSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <QualifierSection />
      <OutcomeSection />
      <DemoVideoSection />
      <TrustSection />
      <DemoRequestForm />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
