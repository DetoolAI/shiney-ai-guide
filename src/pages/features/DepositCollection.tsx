import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Clients pay a deposit at the time of booking — no extra steps",
  "You choose the deposit amount (flat fee or % of service)",
  "No-shows drop dramatically when money is on the line",
  "Deposits apply to the final service price automatically",
  "Refund policies you set, not us",
  "Works with all major payment methods",
  "Automatic receipts sent to clients",
  "Full reporting on deposits collected",
];

const DepositCollection = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Automatic Deposit Collection</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Stop losing money to no-shows. Require a deposit at booking — clients who pay show up. It's that simple.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">The Deposit Math</h2>
            <div className="space-y-4">
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-700">25 bookings/week × $20 deposit</span>
                <span className="font-bold text-gray-900">$500/week</span>
              </div>
              <div className="flex justify-between border-b border-gray-200 pb-3">
                <span className="text-gray-700">Monthly deposit revenue</span>
                <span className="font-bold text-gray-900">$2,000/month</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold text-gray-900">Cost of Detool.AI</span>
                <span className="font-bold text-primary">$397/month</span>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">The deposit system alone covers the entire cost of the platform. Everything else is pure profit.</p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Everything included</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop losing money to no-shows?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll set up your deposit system in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default DepositCollection;
