import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Clients log in to see their upcoming and past appointments",
  "Book, reschedule, or cancel from the portal",
  "View and redeem loyalty points",
  "Manage their membership subscription",
  "Update contact info and notification preferences",
  "View invoices and payment history",
  "No app to download — works in any browser",
  "Branded with your salon's colors and logo",
];

const MemberPortal = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Client Member Portal</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Give your clients a beautiful self-service portal where they can manage everything — appointments, memberships, loyalty points — all in one place.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {["Upcoming & past appointments", "Loyalty points & rewards", "Membership management"].map((item, i) => (
              <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <span className="text-primary font-black">{i + 1}</span>
                </div>
                <p className="font-semibold text-gray-900 text-sm">{item}</p>
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
          <h2 className="text-3xl font-black text-white mb-4">Give your clients a premium experience</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll set up your client portal in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default MemberPortal;
