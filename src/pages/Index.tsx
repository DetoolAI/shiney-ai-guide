import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import ReviewsSection from "@/components/landing/ReviewsSection";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const features = [
  {
    title: "Branded Booking Website",
    description: "Your own professional booking site that works 24/7 — no phone tag, no missed appointments. Clients book, pay deposits, and confirm in minutes.",
    bullets: [
      "Custom domain and your branding",
      "Online booking with real-time availability",
      "Automatic confirmation and reminder texts",
      "Works on every phone and device",
    ],
  },
  {
    title: "Missed Call Text Back",
    description: "Every missed call automatically gets a text back within seconds. Never lose a client to voicemail again.",
    bullets: [
      "Instant automated text reply to every missed call",
      "Custom message with your booking link",
      "Works 24/7 even when you're with clients",
      "Captures leads that would have gone to a competitor",
    ],
  },
  {
    title: "5 Star Review Funnel",
    description: "After every appointment, clients get an automated message asking for a review. Happy clients leave reviews. Unhappy clients reach you first — not Google.",
    bullets: [
      "Automated post-appointment review requests",
      "Smart routing — good experiences go to Google, complaints come to you",
      "Build your reputation on autopilot",
      "More 5-star reviews = more new clients finding you",
    ],
  },
  {
    title: "One Click Campaigns",
    description: "Send a text or email campaign to all your clients in one click. Promote a slow week, launch a new service, or re-engage clients who haven't been back.",
    bullets: [
      "Pre-written beauty campaign templates included",
      "Segment by last visit date, service type, or spend",
      "Track opens, clicks, and bookings from each campaign",
      "Fill your schedule in hours, not weeks",
    ],
  },
];

const industries = [
  "Nail Salons", "Lash Studios", "Spas", "Brow Bars", "Hair Salons", "Waxing Studios",
];

const steps = [
  { num: "01", title: "Demo Call — 20 Minutes", desc: "We walk you through the platform live. You ask questions. We show you exactly what we'd build for your business." },
  { num: "02", title: "We Build Your System — 48 Hours", desc: "We set up your booking site, automations, deposit collection, and campaigns. You don't lift a finger." },
  { num: "03", title: "You Launch — 25 Minutes", desc: "One quick call, we go live together. From that point on, your system is running and booking clients automatically." },
];

const whyUs = [
  { title: "Simple To Use", desc: "No tech skills required. If you can send a text, you can run Detool.AI." },
  { title: "Affordable", desc: "At $397/month, most clients make it back in the first week from deposit collections alone." },
  { title: "No Contracts", desc: "Month to month. If we don't deliver results, you shouldn't be stuck with us." },
  { title: "No BS", desc: "We don't over-promise. We show you exactly what you're getting before you spend a dollar." },
  { title: "We Have Proof", desc: "Real beauty businesses using our system right now. Read their reviews. See our work." },
  { title: "Always Improving", desc: "We add new features monthly based on what beauty business owners actually need." },
];

const faqs = [
  { q: "Do I need to be tech-savvy to use this?", a: "Not at all. We set everything up for you. You'll have a short onboarding call with us, and from there your system runs automatically. Most of our clients are not tech people — that's exactly why they hire us." },
  { q: "How long does setup take?", a: "We build and launch your full system in 48 to 72 hours. The launch call takes about 25 minutes. After that you're live." },
  { q: "Will this work for my type of salon?", a: "Yes. We work with nail salons, lash studios, spas, brow bars, hair salons, and waxing studios. If you book appointments and want more of them — this works for you." },
  { q: "What if I already have a booking app?", a: "We integrate with or replace most booking tools. On our call we'll look at what you have and tell you exactly what we recommend. Many clients switch to our system and simplify everything." },
  { q: "Is there a contract?", a: "No. Month to month. Cancel any time. We're confident you'll stay because you're seeing results." },
  { q: "How much can I realistically make from the deposit system?", a: "If you take 25 deposits per week at $20 each, that's $500/week or $2,000/month in secured revenue before you even open your doors. That alone covers the cost of the platform — and then some." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
      >
        {q}
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-6 pb-5 text-gray-500 leading-relaxed">{a}</div>}
    </div>
  );
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-6">
            <span className="text-white/80 text-sm font-medium">The Complete Booking & Automation System for Beauty Businesses</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight max-w-4xl mx-auto mb-6">
            Stop Losing Money to No-Shows, Missed Calls & Clients Who Never Come Back
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto mb-10">
            Detool.AI gives your beauty business a branded booking system, automated follow-ups, deposit collection, and marketing campaigns — all done for you in 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#demo-form"
              onClick={e => { e.preventDefault(); document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" }); }}
              className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-8 py-4 text-lg"
            >
              Book A Free Call
            </a>
            <a href="/our-work" className="text-white/70 hover:text-white font-medium transition-colors text-base underline underline-offset-4">
              See Our Work
            </a>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {["A","B","C","D","E"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-primary/80 border-2 border-white flex items-center justify-center text-white font-bold text-sm">{l}</div>
                ))}
              </div>
              <span className="ml-3 text-white/70 text-sm">Trusted by beauty pros</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
              <span className="text-yellow-400 text-sm font-bold">★★★★★</span>
              <span className="text-white text-sm font-semibold">5.0 on Google</span>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials strip */}
      <ReviewsSection />

      {/* Feature blocks */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Everything Your Beauty Business Needs</h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">One platform. Eight tools. Built specifically for beauty businesses that are serious about growth.</p>
            </div>
            <div className="flex flex-col gap-16">
              {features.map((f, i) => (
                <div key={i} className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-10 items-center`}>
                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-sm h-56 flex items-center justify-center">
                    <span className="text-gray-300 text-sm font-medium">{f.title}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{f.title}</h3>
                    <p className="text-gray-500 mb-5 leading-relaxed">{f.description}</p>
                    <ul className="space-y-2">
                      {f.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-2 text-gray-700">
                          <span className="text-primary font-bold mt-0.5">✓</span> {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ROI */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Math Is Simple</h2>
            <p className="text-gray-500 text-lg mb-10">Let's talk deposits. Even if this is the only feature you use, it pays for itself — ten times over.</p>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-left space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">25 bookings/week × $20 deposit</span>
                <span className="font-bold text-gray-900">$500/week</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Monthly secured revenue</span>
                <span className="font-bold text-gray-900">$2,000/month</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Your investment</span>
                <span className="font-bold text-primary">$397/month</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-bold text-lg">Monthly profit from deposits alone</span>
                <span className="font-black text-primary text-xl">$1,603/month</span>
              </div>
            </div>
            <p className="text-gray-500">And that doesn't count the extra bookings from missed call text-back, campaigns, loyalty rewards, or referrals.</p>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Built for Every Beauty Business</h2>
            <p className="text-gray-500 text-lg mb-10">Whether you run a solo studio or a multi-chair salon, Detool.AI works for you.</p>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((ind, i) => (
                <span key={i} className="px-6 py-3 bg-white border border-gray-200 rounded-full font-semibold text-gray-700 shadow-sm text-sm">{ind}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-500 text-lg">You're 3 steps away from a fully automated booking system.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-5xl font-black text-primary/20 mb-3">{s.num}</div>
                  <h3 className="font-bold text-gray-900 text-lg mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Beauty Pros Choose Detool.AI</h2>
              <p className="text-gray-500 text-lg">We built this for business owners — not for tech bros.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form */}
      <DemoRequestForm />

      {/* Final CTA */}
      <section style={{ background: "#0f1b2d" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Stop Losing Clients?</h2>
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">Book a free 20-minute call. We'll show you exactly what your system will look like and what results to expect.</p>
          <a
            href="#demo-form"
            onClick={e => { e.preventDefault(); document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" }); }}
            className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-5 text-xl"
          >
            Book A Free Call Today
          </a>
          <p className="text-white/40 mt-4 text-sm">No contracts. No setup fees. Just results.</p>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Index;
