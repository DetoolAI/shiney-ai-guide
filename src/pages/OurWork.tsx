import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Check } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const results = [
  { label: "Setup Time", value: "10 Days" },
  { label: "Lead Capture", value: "Quote Form" },
  { label: "Automations", value: "5+" },
  { label: "Missed Calls Recovered", value: "100%" },
];

const built = [
  "Branded website with custom domain",
  "Quote & contact form on every page",
  "Missed call text-back (fires within 10 seconds)",
  "Instant SMS follow-up on new leads",
  "Post-service review request funnel",
  "One-click campaign for slow weeks",
  "Google Business Profile optimization",
  "Re-engagement texts for past customers",
];

const OurWork = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Product Demo</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">See The All-In-One System</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Website, lead capture, automations, and follow-up — built for any business and running in the background.
          </p>
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

            <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>

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
                This is what $297/month gets you — not a template tossed over the fence, but a done-for-you system
                built for any business.
              </p>
              <p>
                Your customers get a professional site where they can request a quote or book anytime. When they call and you&apos;re
                with someone, missed-call text-back fires automatically. After every visit, happy customers get nudged to
                leave a Google review. Slow week? One click blasts your list and fills openings.
              </p>
              <p>
                We build it, launch it, and walk you through everything in about 10 days. After that, it runs while you
                work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Want this built for your business?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free 20-minute call. We&apos;ll show you exactly what your system will look like.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default OurWork;
