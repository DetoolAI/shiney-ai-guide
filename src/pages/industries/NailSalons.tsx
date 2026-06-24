import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const problems = [
  "No-shows costing you $50–$200 every single week",
  "Clients call, get voicemail, and book somewhere else",
  "Slow Tuesdays with no way to fill the chairs fast",
  "Regulars drift away and you can't bring them back",
  "Managing bookings through Instagram DMs and texts",
];

const solutions = [
  "Deposit collection stops no-shows before they happen",
  "Missed call text-back captures every lead automatically",
  "One-click campaigns fill slow days in hours",
  "Loyalty rewards keep regulars coming back every 2–3 weeks",
  "Branded booking website replaces the DM chaos",
];

const NailSalons = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Nail Salons</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">The complete booking and automation system built for nail salons. Stop losing clients. Start filling your books on autopilot.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sound familiar?</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Here's the fix</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What Crème de la Crème Nails said</h2>
          <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
            "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!"
          </blockquote>
          <p className="text-gray-400 text-sm">— Crème de la Crème N/LLC, Nail Salon Client</p>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to run your nail salon smarter?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call. We'll build your complete system in 10 days.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
          <p className="text-white/40 mt-3 text-sm">$397/month · No contracts · Cancel any time</p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default NailSalons;
