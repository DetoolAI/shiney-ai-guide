import LandingHero from "@/components/landing/LandingHero";
import QualifierSection from "@/components/landing/QualifierSection";
import OutcomeSection from "@/components/landing/OutcomeSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import LeadScraperSection from "@/components/landing/LeadScraperSection";
import OutreachEngineSection from "@/components/landing/OutreachEngineSection";
import PaidTrafficSection from "@/components/landing/PaidTrafficSection";
import TrustSection from "@/components/landing/TrustSection";
import AboutSection from "@/components/landing/AboutSection";
import BeforeAfterSection from "@/components/landing/BeforeAfterSection";
import ReviewsSection from "@/components/landing/ReviewsSection";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import FAQSection from "@/components/landing/FAQSection";
import FinalCTA from "@/components/landing/FinalCTA";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Detool.AI — AI Lead Follow-Up & Booking Automation for Service Businesses"
        description="Detool.AI responds to leads instantly, follows up 24/7 via SMS & email, and books appointments automatically. Trusted by 150+ agents & teams. Setup in 3 days."
        path="/"
        jsonLd={[
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Detool.AI",
            "url": "https://detool.ai",
            "logo": "https://detool.ai/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png",
            "image": "https://detool.ai/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png",
            "description": "AI-powered lead follow-up and booking automation for real estate agents and service businesses. We respond, follow up, and book appointments 24/7.",
            "email": "detoolai@gmail.com",
            "priceRange": "$$",
            "areaServed": "US",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "6",
              "bestRating": "5"
            },
            "review": [
              { "@type": "Review", "author": { "@type": "Person", "name": "Jayden Gutierrez" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "My experience with this marketing agency was a 10/10, definitely recommend." },
              { "@type": "Review", "author": { "@type": "Person", "name": "Spencer Shadrach" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "We worked together & the communication was great. Would work together again." },
              { "@type": "Review", "author": { "@type": "Person", "name": "Leah M" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it." },
              { "@type": "Review", "author": { "@type": "Person", "name": "Vanessa Iheme" }, "reviewRating": { "@type": "Rating", "ratingValue": "5" }, "reviewBody": "I had a great experience with Detool Ai. Such a professional and affordable marketing agency. Offered 24/7 support, delivered on time, and did an amazing job." }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              { "@type": "Question", "name": "How quickly can Detool.AI be set up?", "acceptedAnswer": { "@type": "Answer", "text": "Most clients are fully live within 3 days. We handle the entire setup — AI training, channel connections, and automation rules." } },
              { "@type": "Question", "name": "What channels does the AI respond on?", "acceptedAnswer": { "@type": "Answer", "text": "Detool.AI handles SMS, email, Instagram DMs, and Facebook messages." } },
              { "@type": "Question", "name": "Does it work with my existing CRM?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Detool.AI integrates with GoHighLevel, HubSpot, Follow Up Boss, and more." } },
              { "@type": "Question", "name": "Is there a long-term contract?", "acceptedAnswer": { "@type": "Answer", "text": "No long-term contracts. We work month-to-month." } },
              { "@type": "Question", "name": "Do I need to hire anyone to manage it?", "acceptedAnswer": { "@type": "Answer", "text": "No. Detool.AI runs 24/7 on its own without any additional headcount." } }
            ]
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Detool.AI",
            "url": "https://detool.ai",
            "potentialAction": { "@type": "SearchAction", "target": "https://detool.ai/?q={search_term_string}", "query-input": "required name=search_term_string" }
          },
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "AI Lead Follow-Up & Booking Automation",
            "provider": { "@type": "Organization", "name": "Detool.AI" },
            "description": "Automated lead response, follow-up via SMS and email, and appointment booking for service businesses and real estate agents.",
            "areaServed": "United States",
            "offers": { "@type": "Offer", "url": "https://detool.ai/pricing" }
          }
        ]}
      />
      <LandingHero />
      <HowItWorksSection />
      <QualifierSection />
      <OutcomeSection />
      <LeadScraperSection />
      <OutreachEngineSection />
      <PaidTrafficSection />
      <BeforeAfterSection />
      <TrustSection />
      <AboutSection />
      <ReviewsSection />
      <DemoRequestForm />
      <FAQSection />
      <FinalCTA />
      <LandingFooter />
    </div>
  );
};

export default Index;
