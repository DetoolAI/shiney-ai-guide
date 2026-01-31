import LandingHero from "@/components/landing/LandingHero";
import QualifierSection from "@/components/landing/QualifierSection";
import OutcomeSection from "@/components/landing/OutcomeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import LeadScraperSection from "@/components/landing/LeadScraperSection";
import OutreachEngineSection from "@/components/landing/OutreachEngineSection";
import PaidTrafficSection from "@/components/landing/PaidTrafficSection";
import TrustSection from "@/components/landing/TrustSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LandingHero />
      <HowItWorksSection />
      <QualifierSection />
      <OutcomeSection />
      <LeadScraperSection />
      <OutreachEngineSection />
      <PaidTrafficSection />
      <TrustSection />
      <DemoRequestForm />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
