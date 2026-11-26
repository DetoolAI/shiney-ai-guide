import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import VideoTestimonialGrid from "@/components/landing/VideoTestimonialGrid";
import PartnersSection from "@/components/landing/PartnersSection";
import HomeFeatureSections from "@/components/landing/HomeFeatureSections";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import BookCallLink from "@/components/BookCallLink";
import EmailCapture from "@/components/EmailCapture";
import PlansSection from "@/components/landing/PlansSection";

const industries = [
  "Home Services",
  "Health & Wellness",
  "Restaurants",
  "Retail",
  "Salons & Spas",
  "Contractors",
  "Fitness",
  "Real Estate",
  "Professional Services",
  "Any Local Business",
];

const steps = [
  { num: "01", title: "You check out", desc: "Pick a plan and you're in. No demo call. No waiting for a sales slot." },
  { num: "02", title: "Fill out a short form, we build (10 days)", desc: "You send us your info, logo and photos. We build your website — and on the $297 plan, the missed-call text-back, review funnel, and follow-up — done for you." },
  { num: "03", title: "It goes live, you do nothing", desc: "We launch everything for you. After that it runs while you run your business." },
];

const whyUs = [
  { title: "Simple To Use", desc: "No tech skills required. If you can send a text, you can run Detool.AI." },
  { title: "Affordable", desc: "At $297/month, one extra customer per week pays for the entire system." },
  { title: "No Contracts", desc: "Month to month. If we don't deliver results, you shouldn't be stuck with us." },
  { title: "No BS", desc: "We don't over-promise. We tell you exactly what we're going to do — and we do it." },
  { title: "We Have Proof", desc: "Real local businesses using our system right now. Read their reviews. See our work." },
  { title: "Always Improving", desc: "We add new features monthly based on what local business owners actually need." },
];

const faqs = [
  { q: "When am I going to start seeing results?", a: "Most businesses see more leads captured and more reviews within the first few weeks. It depends on your traffic, follow-up, and how fast you respond — we give you the system, you close the customers." },
  { q: "How long does setup take?", a: "We build and launch your full system in 10 days. You check out, we build, it goes live — you don't have to do anything." },
  { q: "Will this work for my business?", a: "Yes. It works for any local business — home services, salons, restaurants, clinics, contractors, and one-person operations. If you need more leads, more reviews, and faster follow-up, this works for you." },
  { q: "Is there a contract?", a: "No. Month to month. Cancel any time. We're confident you'll stay because you're seeing results." },
  { q: "What's the difference between the $99 and $297 plans?", a: "$99/mo is Website Only: a custom-designed website (up to 5 pages) with a lead form, basic SEO, hosting and maintenance. $297/mo is the Full System: the same website plus missed-call text-back, a 5-star review funnel, automated follow-up, and one-click marketing campaigns. You can start with the website and upgrade any time." },
  { q: "Why $297 and not cheaper?", a: "Because we don't just give you software. We set it all up, build your automations, and support you ongoing. You're buying a done-for-you system." },
  { q: "How much can one extra customer per week make?", a: "One extra $200 customer per week = $800/month in extra revenue. That alone covers the platform cost — and then some." },
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

      {/* Hero — two clear choices */}
      <section id="hero" className="bg-detool-dark pt-36 pb-20 md:pt-40 md:pb-24 scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.08] max-w-4xl mx-auto mb-5">
            Get A Website That Brings You Customers
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Done for you in 10 days. Pick the plan that fits — upgrade any time.
          </p>

          <div className="grid md:grid-cols-2 gap-5 max-w-3xl mx-auto text-left">
            {/* Website Only */}
            <div className="bg-white rounded-2xl p-7 flex flex-col border-2 border-white shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Website Only</p>
              <p className="mb-3">
                <span className="text-5xl font-black text-gray-900">$99</span>
                <span className="text-gray-400">/mo</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                A custom-designed website with a lead form, basic SEO, hosting and maintenance.
              </p>
              <BookCallLink
                plan="website"
                className="block text-center bg-gray-900 text-white font-bold rounded-xl py-3.5 hover:bg-gray-800 transition-colors"
              >
                Get my website
              </BookCallLink>
            </div>

            {/* Full System */}
            <div className="relative bg-white rounded-2xl p-7 flex flex-col border-2 border-primary shadow-xl">
              <span className="absolute -top-3 left-6 bg-primary text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                Most popular
              </span>
              <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Full System</p>
              <p className="mb-3">
                <span className="text-5xl font-black text-gray-900">$297</span>
                <span className="text-gray-400">/mo</span>
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-1">
                The website plus missed-call text-back, a review funnel, and automated follow-up.
              </p>
              <BookCallLink
                plan="full"
                className="block text-center bg-primary text-white font-bold rounded-xl py-3.5 hover:bg-primary/90 transition-colors shadow-md"
              >
                Get the full system
              </BookCallLink>
            </div>
          </div>

          <p className="text-white/55 text-sm mt-6">Cancel anytime · No contracts · We build it for you</p>
          <p className="mt-4">
            <a href="#pricing" className="text-white/70 hover:text-white text-sm font-medium underline underline-offset-4">
              Compare plans
            </a>
          </p>
        </div>
      </section>

      <div id="testimonials">
        <VideoTestimonialGrid showSeeAll />
      </div>

      <div id="features">
        <HomeFeatureSections />
      </div>

      {/* ROI */}
      <section id="roi" className="py-20 bg-detool-cream scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">The Math Is Simple</h2>
            <p className="text-gray-500 text-lg mb-10">One extra customer per week pays for the entire system.</p>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left space-y-4 mb-8">
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">1 extra customer/week × $200 avg sale</span>
                <span className="font-bold text-gray-900">$200/week</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Monthly extra revenue</span>
                <span className="font-bold text-gray-900">$800/month</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <span className="text-gray-700 font-medium">Your investment</span>
                <span className="font-bold text-primary">$297/month</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-gray-900 font-bold text-lg">Monthly profit after Detool.AI</span>
                <span className="font-black text-primary text-xl">$503/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlansSection id="pricing" />

      {/* Industries */}
      <section id="industries" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Built for every business</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">Same system — website, lead capture, reviews, and follow-up — whether you run a shop, a studio, a clinic, or a one-person operation.</p>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {industries.map((name) => (
                <span key={name} className="px-6 py-3 bg-detool-cream border border-gray-200 rounded-full font-semibold text-gray-700 shadow-sm text-sm">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-detool-cream scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">What working with us looks like...</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
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
      <section id="why-us" className="py-20 bg-white scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Why we're "totally unique"... just like everyone else, right?</h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyUs.map((w, i) => (
                <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{w.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div id="partners">
        <PartnersSection />
      </div>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-detool-cream scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {faqs.map((f, i) => <FAQItem key={i} q={f.q} a={f.a} />)}
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonialGrid dark showSeeAll={false} title="Still not convinced? Hear it from them." />

      <section id="cta" className="bg-detool-dark py-20 scroll-mt-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to stop losing leads?</h2>
          <p className="text-white/70 text-xl mb-3 max-w-2xl mx-auto">Checkout today. We build for 10 days. Your system goes live — cancel anytime.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-5 text-xl">
            Get started — $297/mo
          </BookCallLink>
          <p className="text-white/45 text-sm mt-4">Month to month. No contracts. Done for you.</p>
          <div className="max-w-xl mx-auto mt-12 text-left">
            <EmailCapture
              title="Already paid? Get your onboarding link"
              subtitle="Enter the email from checkout and we'll resend the form."
              source="home-cta"
              buttonLabel="Send onboarding link"
              dark
            />
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Index;
