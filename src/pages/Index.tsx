import LandingHero from "@/components/landing/LandingHero";
import ReviewsSection from "@/components/landing/ReviewsSection";
import FeatureSections from "@/components/landing/FeatureSections";
import WhoWeServeSection from "@/components/landing/WhoWeServeSection";
import ProcessSection from "@/components/landing/ProcessSection";
import WhyDifferentSection from "@/components/landing/WhyDifferentSection";
import HomeAboutSection from "@/components/landing/HomeAboutSection";
import HomePricingSection from "@/components/landing/HomePricingSection";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Detool.AI — Website Design & Automation For Service Businesses"
        description="We build custom websites and automation tools for service businesses. Missed call text-back, automated reviews, AI chatbot. Starting at $297/mo."
        path="/"
      />
      {/* 1. Hero — dark navy, huge headline */}
      <LandingHero />
      {/* 2. Testimonials — proof right after hero */}
      <div id="reviews"><ReviewsSection /></div>
      {/* 3. Feature sections — website, reviews, missed call, marketing, chatbot */}
      <div id="features"><FeatureSections /></div>
      {/* 4. Who we serve */}
      <WhoWeServeSection />
      {/* 5. Process — how it works */}
      <ProcessSection />
      {/* 6. Why different */}
      <WhyDifferentSection />
      {/* 7. About */}
      <HomeAboutSection />
      {/* 8. Pricing */}
      <HomePricingSection />
      {/* 9. FAQ */}
      <FAQSection />
      {/* 10. Final CTA */}
      <FinalCTA />
      {/* 11. Footer */}
      <LandingFooter />
    </div>
  );
};

export default Index;
