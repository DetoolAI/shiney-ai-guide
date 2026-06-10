import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Clients earn points on every visit automatically",
  "Redeem points for discounts, free services, or products",
  "Clients can check their points balance any time",
  "Points expiry settings to encourage regular visits",
  "Birthday bonus points to surprise clients",
  "Double points events to drive traffic on slow days",
  "Referral bonuses — reward clients who bring friends",
  "Full loyalty dashboard with engagement tracking",
];

const LoyaltyRewards = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Loyalty Rewards Program</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Keep your best clients coming back. A loyalty program that runs automatically — no punch cards, no spreadsheets.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <h2 className="text-xl font-bold text-gray-900 mb-4">How it works for your clients</h2>
            <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
              <p>1. Client books and visits — they automatically earn points.</p>
              <p>2. They get a text: "You earned 50 points on today's visit! You now have 250 points."</p>
              <p>3. When they hit a threshold, they get a text with their reward and a booking link.</p>
              <p>4. They redeem at their next visit. No app needed — it all happens via text.</p>
            </div>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to reward your best clients?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll design your loyalty program in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default LoyaltyRewards;
