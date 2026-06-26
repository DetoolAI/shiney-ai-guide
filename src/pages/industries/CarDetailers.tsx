import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const problems = [
  "You're on a job and miss calls — leads book with the next detailer on Google",
  "Website visitors leave because there's no easy quote form",
  "Slow weeks with no way to blast past customers fast",
  "Happy clients never leave Google reviews",
  "Leads fill out a form and never hear back fast enough",
];

const solutions = [
  "Missed call text-back captures every lead in seconds",
  "Quote & contact form on your site — works while you're detailing",
  "One-click campaigns fill slow weeks in hours",
  "Automated review funnel stacks 5-star Google reviews",
  "Instant follow-up so hot leads don't go cold",
];

const CarDetailers = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Car Detailers</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            The complete lead machine for auto detailing businesses. More calls answered, more quotes, more 5-star reviews — without hiring a receptionist.
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

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">What our clients say</h2>
          <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-6">
            "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!"
          </blockquote>
          <p className="text-gray-400 text-sm">— Detool.AI Client</p>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to grow your detailing business?</h2>
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

export default CarDetailers;
