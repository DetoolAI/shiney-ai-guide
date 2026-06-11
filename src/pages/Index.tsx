import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import VideoTestimonialGrid from "@/components/landing/VideoTestimonialGrid";
import PartnersSection from "@/components/landing/PartnersSection";
import HomeFeatureSections from "@/components/landing/HomeFeatureSections";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const industries = [
  { name: "Nail Salons", slug: "/industries/nail-salons" },
  { name: "Lash Studios", slug: "/industries/lash-studios" },
  { name: "Spas", slug: "/industries/spas" },
  { name: "Brow Bars", slug: null },
  { name: "Hair Salons", slug: null },
  { name: "Waxing Studios", slug: null },
];

const steps = [
  { num: "01", title: "Demo Call (20 mins)", desc: "It's actually a sales call, we just didn't want to scare you. We'll answer every question and show you live client results." },
  { num: "02", title: "We Build Your System (48 hours)", desc: "Fill out a quick onboarding form. We build your booking site, automations, deposits, and campaigns — done for you." },
  { num: "03", title: "Launch Call (25 mins)", desc: "We walk you through everything and go live together. After that, your system runs on autopilot." },
];

const whyUs = [
  { title: "Simple To Use", desc: "No tech skills required. If you can send a text, you can run Detool.AI." },
  { title: "Affordable", desc: "At $397/month, most clients make it back in the first week from deposit collections alone." },
  { title: "No Contracts", desc: "Month to month. If we don't deliver results, you shouldn't be stuck with us." },
  { title: "No BS", desc: "We don't over-promise. We tell you exactly what we're going to do — and we do it." },
  { title: "We Have Proof", desc: "Real beauty businesses using our system right now. Read their reviews. See our work." },
  { title: "Always Improving", desc: "We add new features monthly based on what beauty business owners actually need." },
];

const faqs = [
  { q: "When am I going to start seeing results?", a: "It depends on your advertising, how long you've been in business, and whether you commit to using the system. Detool.AI gives you the foundation — deposits, follow-ups, reviews, and campaigns — but you still need to show up and do great work." },
  { q: "How long does setup take?", a: "We build and launch your full system in 48 to 72 hours. The launch call takes about 25 minutes. After that you're live." },
  { q: "Will this work for my type of salon?", a: "Yes. We work with nail salons, lash studios, spas, brow bars, hair salons, and waxing studios. If you book appointments and want more of them — this works for you." },
  { q: "Is there a contract?", a: "No. Month to month. Cancel any time. We're confident you'll stay because you're seeing results." },
  { q: "Why $397 and not cheaper?", a: "Because we don't just give you software. We set it all up, build your automations, and support you ongoing. You're buying a done-for-you system." },
  { q: "How much can I make from deposits alone?", a: "25 deposits per week at $20 each = $2,000/month in secured revenue. That alone covers the platform cost — and then some." },
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

      {/* Hero — Stone Systems style, beauty niche */}
      <section className="bg-detool-dark pt-40 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-black text-white leading-[1.1] max-w-5xl mx-auto mb-6">
            Booking & Marketing Systems For Beauty Businesses
          </h1>
          <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
            Cut the BS — marketing isn't rocket science. No agency (including ours) has the miracle fix for all your problems.
            We'll give you the tools to win, but you need to commit to using them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/book-a-call"
              className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg"
            >
              Book A Call
            </Link>
            <Link to="/our-work" className="text-white/70 hover:text-white font-medium transition-colors text-base underline underline-offset-4">
              See Our Work
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D", "E"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-primary/80 border-2 border-white flex items-center justify-center text-white font-bold text-sm">{l}</div>
                ))}
              </div>
              <span className="ml-3 text-white/70 text-sm">Trusted by beauty businesses across the US</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-yellow-400 text-sm font-bold">★★★★★</span>
                <span className="text-white text-sm font-semibold">Google</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-yellow-400 text-sm font-bold">★★★★★</span>
                <span className="text-white text-sm font-semibold">Facebook</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2">
                <span className="text-yellow-400 text-sm font-bold">★★★★★</span>
                <span className="text-white text-sm font-semibold">Trustpilot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <VideoTestimonialGrid showSeeAll />

      <HomeFeatureSections />

      {/* ROI */}
      <section className="py-20 bg-detool-cream">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">The Math Is Simple</h2>
            <p className="text-gray-500 text-lg mb-10">Even if deposits are the only feature you use, it pays for itself ten times over.</p>
            <div className="bg-white border border-gray-200 rounded-2xl p-8 text-left space-y-4 mb-8">
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
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">Serving all these beauty businesses and more...</h2>
            <div className="flex flex-wrap justify-center gap-4 mt-10">
              {industries.map((ind, i) =>
                ind.slug ? (
                  <Link key={i} to={ind.slug} className="px-6 py-3 bg-detool-cream border border-gray-200 rounded-full font-semibold text-gray-700 shadow-sm text-sm hover:border-primary hover:text-primary transition-colors">
                    {ind.name}
                  </Link>
                ) : (
                  <span key={i} className="px-6 py-3 bg-detool-cream border border-gray-200 rounded-full font-semibold text-gray-700 shadow-sm text-sm">{ind.name}</span>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-detool-cream">
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
      <section className="py-20 bg-white">
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

      <PartnersSection />

      {/* FAQ */}
      <section className="py-20 bg-detool-cream">
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

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Want to schedule a time to talk?</h2>
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">See everything we do to help you grow your beauty business — then let us build it for you.</p>
          <Link
            to="/book-a-call"
            className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-5 text-xl"
          >
            Book A Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Index;
