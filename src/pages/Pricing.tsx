import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import DepositROICalculator from "@/components/landing/DepositROICalculator";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";
import PlansSection from "@/components/landing/PlansSection";

const faqs = [
  { q: "What's the difference between $99 and $297?", a: "$99/mo is Website Only — a custom-designed site (up to 5 pages) with a lead form, basic SEO, hosting and maintenance. $297/mo adds missed-call text-back, a review funnel, automated follow-up and marketing campaigns. Start with the website and upgrade any time." },
  { q: "Why $297 and not $97 like other apps?", a: "Because we don't just give you software. We set it all up for you, train you on it, build your automations, and support you ongoing. You're not buying a tool — you're buying a done-for-you system." },
  { q: "What if I don't see results?", a: "Book the call and let's be honest with each other. If your business isn't a good fit, we'll tell you. We don't take money from people who won't benefit." },
  { q: "Are there any setup fees?", a: "No setup fees, ever. $99/month or $297/month is all you pay." },
  { q: "Can I cancel any time?", a: "Yes. No contracts. No cancellation penalties. We earn your business every single month." },
  { q: "What happens after I pay?", a: "You land on a thank-you page, get a receipt + onboarding form by email, we build your system in 10 days, then it goes live — you do nothing. Reply with your logo + 3 photos and we start the same day." },
  { q: "Do I need a complicated booking system?", a: "No. Most businesses start with a lead form, missed-call text-back, and review funnel. We keep it simple — you can always add more later." },
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
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Two plans. Both done for you in 10 days. Cancel anytime.</p>
        </div>
      </section>

      <PlansSection id="plans" title="Choose your plan" />

      {/* ROI Calculator */}
      <section className="py-20 bg-detool-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-4">Does $297/month make sense?</h2>
            <p className="text-gray-500 text-center mb-8">Drag the slider — see your revenue math in real time.</p>
            <DepositROICalculator />
            <div className="text-center mt-8">
              <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
                Get started - $297/mo
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
            Get started - $297/mo
          </BookCallLink>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Pricing;
