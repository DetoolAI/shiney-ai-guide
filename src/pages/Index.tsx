import LandingHero from "@/components/landing/LandingHero";
import QualifierSection from "@/components/landing/QualifierSection";
import OutcomeSection from "@/components/landing/OutcomeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import LeadScraperSection from "@/components/landing/LeadScraperSection";
import OutreachEngineSection from "@/components/landing/OutreachEngineSection";
import PaidTrafficSection from "@/components/landing/PaidTrafficSection";
import TrustSection from "@/components/landing/TrustSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Detool.AI — Websites, AI Automation & Lead Follow-Up"} description={"Websites, AI automation, outreach, and paid traffic that close leads. One team building the system that books your appointments."} path={"/"} />
      <LandingHero />
      <HowItWorksSection />
      <QualifierSection />
      <OutcomeSection />
      <LeadScraperSection />
      <OutreachEngineSection />
      <PaidTrafficSection />
      <TrustSection />
      <ReviewsSection />
      <DemoRequestForm />
      <FAQSection />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
