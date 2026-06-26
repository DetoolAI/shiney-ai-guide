import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const problems = [
  "You're driving to a job and can't answer the phone",
  "Leads want a quote now — not tomorrow",
  "No website means you don't show up on Google Maps",
  "Competitors with more reviews steal your clicks",
  "Past customers forget to rebook",
];

const solutions = [
  "Missed call text-back while you're on the road",
  "Mobile-optimized site with instant quote form",
  "Google Business optimization to rank locally",
  "Review funnel after every detail",
  "One-click rebook campaigns to past clients",
];

const MobileDetailers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Mobile Detailers</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            You can't answer the phone with a polisher in your hand. We make sure every lead still gets a reply — and a path to book.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The mobile detailer struggle</h2>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How we fix it</h2>
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
          <h2 className="text-3xl font-black text-white mb-4">Ready to stop losing leads on the road?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call. We'll build your system in 10 days.</p>
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

export default MobileDetailers;
