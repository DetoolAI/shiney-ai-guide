import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const plans = [
  {
    name: "Starter Website",
    price: "$297",
    period: "/mo",
    desc: "Everything you need to look professional and never miss a lead.",
    features: [
      "Custom professional website",
      "Mobile-optimized and fast",
      "AI Chatbot on your site",
      "Missed call text-back",
      "Automated review requests",
      "One-click marketing campaigns",
      "On-site SEO setup",
      "Google Business optimization",
      "Contact and booking forms",
      "Live in 7-10 days",
      "No contracts, cancel anytime",
    ],
    highlight: false,
    cta: "Get Started",
  },
  {
    name: "Digital Marketing",
    price: "Custom",
    period: "",
    desc: "Full-stack growth system — leads, follow-up, outreach, and ads.",
    features: [
      "Everything in Starter",
      "AI lead follow-up (SMS + email)",
      "Automated appointment booking",
      "Lead scraping (Google Maps, Zillow)",
      "Multi-channel outreach campaigns",
      "Ringless voicemail drops",
      "Facebook and Instagram Ads",
      "Google Ads management",
      "CRM integration",
      "Dedicated account manager",
      "Weekly performance reports",
    ],
    highlight: true,
    cta: "Book A Call",
  },
  {
    name: "Full Growth Suite",
    price: "Custom",
    period: "",
    desc: "Every tool we have, fully managed. For businesses ready to scale.",
    features: [
      "Everything in Digital Marketing",
      "Custom AI chatbot trained on your brand",
      "Full paid traffic team",
      "A/B tested ad creatives",
      "Pipeline automation and CRM buildout",
      "Monthly strategy calls",
      "Priority support",
      "60-day ROI guarantee",
      "Free migration from existing systems",
      "No setup fees ever",
      "Scales with your business",
    ],
    highlight: false,
    cta: "Book A Call",
  },
];

const HomePricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            No surprise fees. No year-long contracts. Start with what you need and add on when you're ready.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 flex flex-col border ${
                plan.highlight
                  ? "bg-primary border-primary shadow-2xl scale-105"
                  : "bg-white border-gray-200 shadow-sm"
              }`}
            >
              <h3 className={`text-xl font-black mb-1 ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.name}</h3>
              <div className="mb-2">
                <span className={`text-4xl font-black ${plan.highlight ? "text-white" : "text-gray-900"}`}>{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-white/70" : "text-gray-400"}`}>{plan.period}</span>
              </div>
              <p className={`text-sm mb-6 ${plan.highlight ? "text-white/80" : "text-gray-500"}`}>{plan.desc}</p>

              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map((f, fi) => (
                  <li key={fi} className="flex items-start gap-2.5">
                    <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlight ? "text-white" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlight ? "text-white/90" : "text-gray-700"}`}>{f}</span>
                  </li>
                ))}
              </ul>

              <BookCallLink
                className={`block text-center py-3.5 rounded-xl font-bold text-sm transition-all ${
                  plan.highlight
                    ? "bg-white text-primary hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </BookCallLink>
              <p className={`text-xs text-center mt-3 ${plan.highlight ? "text-white/60" : "text-gray-400"}`}>
                No contracts · Cancel anytime
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePricingSection;
