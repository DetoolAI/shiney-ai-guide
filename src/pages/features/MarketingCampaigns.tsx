import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Send SMS or email campaigns to your entire client list in one click",
  "Pre-written beauty campaign templates included",
  "Segment clients by last visit, service type, or total spend",
  "Schedule campaigns in advance",
  "Track opens, clicks, and resulting bookings",
  "Re-engagement campaigns for clients who haven't been back in 60+ days",
  "Birthday campaigns with special offers",
  "Flash sale campaigns to fill slow days instantly",
];

const templates = [
  { title: "Slow Day Filler", desc: "\"Hey [Name], we have a few openings this week — book now and save your spot! [link]\"" },
  { title: "New Service Launch", desc: "\"We just added [service] and you're one of the first to know. Book a spot before they fill up: [link]\"" },
  { title: "Bring-a-Friend", desc: "\"Refer a friend this month and you both get 15% off your next visit. Share this link: [link]\"" },
  { title: "Lapsed Client Win-Back", desc: "\"We miss you [Name]! It's been a while — come back and get [offer]. Book here: [link]\"" },
];

const MarketingCampaigns = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">One-Click Marketing Campaigns</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Fill slow weeks, launch new services, and re-engage old clients — all from a single button. No marketing degree required.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Campaign templates included</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {templates.map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
                <p className="text-gray-500 text-sm italic leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1b2d" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to fill your schedule on demand?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll set up your campaigns in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default MarketingCampaigns;
