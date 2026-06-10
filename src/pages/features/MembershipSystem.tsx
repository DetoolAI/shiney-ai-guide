import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Create monthly or annual membership tiers",
  "Clients pay automatically — no manual invoicing",
  "Members get exclusive pricing, priority booking, and perks",
  "Automatic renewal reminders and failed payment recovery",
  "Cancel, pause, or upgrade memberships in one click",
  "Member-only booking windows so VIP clients always get a spot",
  "Track MRR (monthly recurring revenue) in your dashboard",
  "Works for solo artists and multi-staff salons",
];

const tiers = [
  { name: "Basic Member", price: "$49/mo", perks: "1 service per month + 10% off all additional services" },
  { name: "VIP Member", price: "$89/mo", perks: "2 services per month + 20% off + priority booking" },
  { name: "Platinum Member", price: "$149/mo", perks: "Unlimited services + 30% off + dedicated slot every 2 weeks" },
];

const MembershipSystem = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Recurring Membership System</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Turn one-time clients into monthly subscribers. Predictable revenue, full chairs, and clients who never go anywhere else.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Example Membership Tiers</h2>
          <p className="text-gray-500 text-center mb-10">These are just examples — we build your tiers around your services and pricing.</p>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {tiers.map((t, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                <h3 className="font-bold text-gray-900 text-lg mb-1">{t.name}</h3>
                <p className="text-3xl font-black text-primary mb-3">{t.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{t.perks}</p>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to build a membership program?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll design your membership tiers around your services.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default MembershipSystem;
