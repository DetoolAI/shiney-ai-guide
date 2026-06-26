import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import DepositROICalculator from "@/components/landing/DepositROICalculator";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const included = [
  "Branded detailing website on your own domain",
  "Quote & contact form — captures leads 24/7",
  "Missed call text-back (instant automated response)",
  "Instant lead follow-up via SMS and email",
  "5-star review funnel (automated post-service requests)",
  "One-click SMS & email marketing campaigns",
  "Pre-written detailing campaign templates",
  "Google Business Profile optimization",
  "On-site SEO setup",
  "Before & after gallery to showcase your work",
  "Re-engagement campaigns for past customers",
  "Onboarding call + 10-day setup",
  "Monthly support and improvements",
  "No contracts — cancel any time",
];

const faqs = [
  { q: "Why $297 and not $97 like other apps?", a: "Because we don't just give you software. We set it all up for you, train you on it, build your automations, and support you ongoing. You're not buying a tool — you're buying a done-for-you system." },
  { q: "What if I don't see results?", a: "Book the call and let's be honest with each other. If your business isn't a good fit, we'll tell you. We don't take money from people who won't benefit." },
  { q: "Are there any setup fees?", a: "No setup fees, ever. $297/month is all you pay." },
  { q: "Can I cancel any time?", a: "Yes. No contracts. No cancellation penalties. We earn your business every single month." },
  { q: "What happens after I pay?", a: "We schedule your onboarding call, build your full system within 10 days, and hop on a 25-minute launch call to go live together." },
  { q: "Do I need a complicated booking system?", a: "No. Most detailers start with a quote form, missed-call text-back, and review funnel. We keep it simple — you can always add more later." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors">
        {q}
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 leading-relaxed">{a}</div>}
    </div>
  );
};

const Pricing = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Simple Pricing.<br />No Surprises.</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">One plan. Everything included. Done for you in 10 days.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-primary rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-primary px-8 py-6 text-center">
                <p className="text-white/80 font-medium mb-1">The Complete Car Detailer Lead System</p>
                <div className="text-white">
                  <span className="text-6xl font-black">$297</span>
                  <span className="text-xl font-medium">/month</span>
                </div>
                <p className="text-white/70 mt-1 text-sm">No contracts. No setup fees. Cancel any time.</p>
              </div>
              <div className="px-8 py-8">
                <p className="font-bold text-gray-900 mb-4">Everything included:</p>
                <ul className="space-y-3 mb-8">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-700 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <BookCallLink className="block w-full text-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-8 py-4 text-lg">
                  Book A Free Call — Get Started
                </BookCallLink>
                <p className="text-center text-gray-400 text-xs mt-3">20-minute call • No pressure • We'll show you the platform live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-detool-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">Does $297/month make sense?</h2>
            <p className="text-gray-500 text-center mb-8">Drag the slider — see your detailing revenue math in real time.</p>
            <DepositROICalculator />
            <div className="text-center mt-8">
              <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
                Book A Free Call — Get Started
              </BookCallLink>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">That's before counting extra jobs from missed call recovery, faster follow-up, and review-driven Google traffic.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Pricing Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to see if this is right for you?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free 20-minute call. No pressure. We'll walk you through exactly what you'll get.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Pricing;
