import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Star, Check } from "lucide-react";

const results = [
  { label: "Setup Time", value: "48 Hours" },
  { label: "Deposit Collection", value: "Automated" },
  { label: "Review Rating", value: "5.0 ★" },
  { label: "Missed Calls Recovered", value: "100%" },
];

const built = [
  "Branded booking website with custom domain",
  "Online scheduling with real-time availability",
  "Automatic $25 deposit collection at booking",
  "Appointment confirmation & reminder texts",
  "Missed call text-back (fires within 10 seconds)",
  "Post-visit review request funnel",
  "One-click campaign for filling slow weeks",
  "Client loyalty points system",
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Case Study</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Crème de la Crème Nails</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">How we built a complete booking & automation system for a nail salon — in 48 hours.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {results.map((r, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <p className="text-2xl font-black text-primary mb-1">{r.value}</p>
                  <p className="text-gray-500 text-sm">{r.label}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 mb-10">
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed mb-4">
                "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-black">C</div>
                <div>
                  <p className="font-bold text-gray-900">Crème de la Crème N/LLC</p>
                  <p className="text-xs text-gray-400">Nail Salon · Google Review</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Built</h2>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {["Booking Flow", "Admin Dashboard", "Member Portal"].map((label) => (
                <div key={label} className="aspect-video rounded-2xl bg-gradient-to-br from-detool-dark via-gray-800 to-primary/40 flex items-center justify-center">
                  <span className="text-white/80 font-semibold text-sm">{label} Screenshot</span>
                </div>
              ))}
            </div>

            <div className="bg-detool-cream border border-gray-200 rounded-2xl p-8 mb-10">
              <ul className="space-y-3">
                {built.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                Crème de la Crème came to us as a growing nail salon with a real problem: clients would call, get voicemail, and never book. When clients did book, no-shows were eating into revenue because there was no deposit system in place.
              </p>
              <p>
                We built them a fully branded booking website with automatic $25 deposit collection built in. We set up missed call text-back so that every missed call immediately gets a text with their booking link. We launched a post-visit review funnel so happy clients go straight to Google. And we set up a loyalty program to keep clients coming back.
              </p>
              <p>
                The entire system was live in 48 hours. The launch call took 25 minutes. From that point on, it runs automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Want us to build this for your salon?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free 20-minute call. We'll show you exactly what your system will look like.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default OurWork;
