import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const problems = [
  "High-ticket services mean no-shows cost you $100–$300 each",
  "Clients book once and don't come back for months",
  "Your spa feels premium but your booking experience doesn't",
  "You're spending money on ads but losing the leads to voicemail",
  "No system in place to sell memberships or packages",
];

const solutions = [
  "Deposit collection protects your high-value appointments",
  "Membership packages create predictable monthly revenue",
  "Branded booking website matches your spa's premium feel",
  "Automated rebooking nudges bring clients back on schedule",
  "One-click campaigns promote seasonal services and packages",
];

const Spas = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Spas</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">A premium spa experience deserves a premium booking system. Detool.AI makes your front-end match the quality of your services.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The spa pain points</h2>
              <ul className="space-y-3">
                {problems.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600">
                    <span className="text-red-400 font-bold mt-0.5">✗</span>
                    <span className="text-sm leading-relaxed">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What we fix</h2>
              <ul className="space-y-3">
                {solutions.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Memberships are perfect for spas</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Monthly facials. Regular massages. Recurring body treatments. These are services clients want on a schedule. A spa membership program locks that revenue in and builds a loyal client base that keeps your rooms full.</p>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to elevate your spa's booking experience?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call. We'll build your complete system in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
          <p className="text-white/40 mt-3 text-sm">$397/month · No contracts · Cancel any time</p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Spas;
