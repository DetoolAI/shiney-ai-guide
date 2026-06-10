import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const included = [
  "Branded booking website on your own domain",
  "Online appointment scheduling with real-time availability",
  "Automatic deposit collection at time of booking",
  "Confirmation texts and appointment reminders",
  "Missed call text-back (instant automated response)",
  "5-star review funnel (automated post-visit requests)",
  "One-click SMS & email marketing campaigns",
  "Pre-written beauty campaign templates",
  "Loyalty rewards program",
  "Client membership & subscription billing",
  "Client member portal (book, manage, track rewards)",
  "No-show reduction workflows",
  "Re-engagement campaigns for lapsed clients",
  "Onboarding call + 48-hour setup",
  "Monthly support and improvements",
  "No contracts — cancel any time",
];

const faqs = [
  { q: "Why $397 and not $97 like other apps?", a: "Because we don't just give you software. We set it all up for you, train you on it, build your automations, and support you ongoing. You're not buying a tool — you're buying a done-for-you system." },
  { q: "What if I don't see results?", a: "Book the call and let's be honest with each other. If your business isn't a good fit, we'll tell you. We don't take money from people who won't benefit." },
  { q: "Are there any setup fees?", a: "No setup fees, ever. $397/month is all you pay." },
  { q: "Can I cancel any time?", a: "Yes. No contracts. No cancellation penalties. We earn your business every single month." },
  { q: "What happens after I pay?", a: "We schedule your onboarding call, build your full system within 48 hours, and hop on a 25-minute launch call to go live together." },
  { q: "Do I need a separate booking tool like Vagaro or Booksy?", a: "No. Our system replaces those tools and adds automation on top. Many of our clients switch over and immediately save money." },
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

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Simple Pricing.<br />No Surprises.</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">One plan. Everything included. Done for you in 48 hours.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border-2 border-primary rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-primary px-8 py-6 text-center">
                <p className="text-white/80 font-medium mb-1">The Complete Beauty Business System</p>
                <div className="text-white">
                  <span className="text-6xl font-black">$397</span>
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
                <Link
                  to="/book-a-call"
                  className="block w-full text-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-8 py-4 text-lg"
                >
                  Book A Free Call — Get Started
                </Link>
                <p className="text-center text-gray-400 text-xs mt-3">20-minute call • No pressure • We'll show you the platform live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Box */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Does $397/month make sense?</h2>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 space-y-4">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">25 deposits/week × $20 each</span>
                <span className="font-bold text-gray-900">$500/week</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Monthly secured revenue from deposits</span>
                <span className="font-bold text-gray-900">$2,000/month</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Cost of Detool.AI</span>
                <span className="font-bold text-primary">$397/month</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-bold text-gray-900 text-lg">Profit from deposits alone</span>
                <span className="font-black text-primary text-xl">$1,603/month</span>
              </div>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">That's before counting the extra bookings from missed call recovery, marketing campaigns, and loyalty programs.</p>
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

      <section style={{ background: "#0f1b2d" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Ready to see if this is right for you?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free 20-minute call. No pressure. We'll walk you through exactly what you'll get.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Pricing;
