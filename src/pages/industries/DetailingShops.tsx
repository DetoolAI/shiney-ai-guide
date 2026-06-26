import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const problems = [
  "Walk-ins and phone calls slip through when the bay is full",
  "Website looks outdated compared to competitors",
  "Ceramic coating leads need fast follow-up or they shop around",
  "Google reviews haven't been updated in months",
  "No system to bring customers back for maintenance details",
];

const solutions = [
  "Missed call text-back + quote form on your site",
  "Professional branded website that builds trust",
  "Automated follow-up on high-ticket coating inquiries",
  "Review requests after every service",
  "One-click campaigns for maintenance packages",
];

const DetailingShops = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Detailing Shops</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Fixed location or high-ticket coatings — you need a system that captures leads, follows up fast, and keeps your Google presence sharp.
          </p>
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

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to fill your bays?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call. We'll build your complete system in 10 days.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
          <p className="text-white/40 mt-3 text-sm">$297/month · No contracts · Cancel any time</p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default DetailingShops;
