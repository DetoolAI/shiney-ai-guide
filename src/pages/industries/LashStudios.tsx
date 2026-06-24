import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const problems = [
  "Lash appointments are long — no-shows waste your entire morning",
  "Fills and full sets don't get booked far enough in advance",
  "Clients forget their 2–3 week fill appointments",
  "You're too busy doing lashes to respond to DMs",
  "Competitors are getting the clients you're missing calls from",
];

const solutions = [
  "Deposits stop no-shows — lash clients pay $30–$50 upfront",
  "Automated rebooking reminders after every full set",
  "Missed call text-back captures calls while your hands are busy",
  "Online booking means clients book 24/7 without waiting on you",
  "Memberships lock in monthly lash fills on autopilot",
];

const LashStudios = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Built for</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Lash Studios</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">A 2-hour lash appointment with a no-show is 2 hours of pure lost revenue. Detool.AI stops that from happening — and fills your books automatically.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The lash studio struggle</h2>
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
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Why memberships work perfectly for lash studios</h2>
          <p className="text-gray-500 text-lg leading-relaxed">Lash fills happen every 2–3 weeks. That's a predictable, repeating service — exactly what memberships are built for. Lock clients into a monthly membership and you'll never have an empty chair again.</p>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to automate your lash studio?</h2>
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

export default LashStudios;
