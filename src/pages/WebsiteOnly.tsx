import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import VideoTestimonialGrid from "@/components/landing/VideoTestimonialGrid";
import BookCallLink from "@/components/BookCallLink";
import SEO from "@/components/SEO";
const included = [
  "Custom-designed website — no cookie-cutter templates",
  "Up to 5 pages (Home, About, Services, Gallery, Contact)",
  "Looks great and loads fast on every phone",
  "Contact / quote form that emails you every lead",
  "Basic on-page SEO so you can be found on Google",
  "Hosting, SSL and maintenance included",
  "Built for you in 10 days — you just fill out a short form",
  "No contracts. Cancel anytime.",
];

const notIncluded = [
  "Missed-call text-back",
  "Review funnel",
  "Automated follow-up and marketing campaigns",
];

const steps = [
  { num: "01", title: "Check out — $99/mo", desc: "Secure Stripe checkout. No call, no waiting." },
  { num: "02", title: "Fill out the short form", desc: "Tell us about your business and send your logo + photos. About 5 minutes." },
  { num: "03", title: "We build it — live in 10 days", desc: "We design, build and launch your site. You don't touch a thing." },
];

const faqs = [
  { q: "What exactly do I get for $99/month?", a: "A custom-designed, mobile-friendly website (up to 5 pages) with a contact/quote form that emails you leads, basic SEO setup, and hosting + SSL + maintenance. We build it for you in about 10 days." },
  { q: "What's not included?", a: "This plan is website only. It does not include missed-call text-back, the review funnel, automated follow-up, or marketing campaigns. Those are in the $297/mo Full System, and you can upgrade any time." },
  { q: "Is there a contract or setup fee?", a: "No contract and no setup fee. It's $99/month and you can cancel any time." },
  { q: "What do you need from me?", a: "After checkout you'll get an email with a short onboarding form: your business info, logo, a few photos, and what you want on the site. That's it." },
  { q: "Can I upgrade later?", a: "Yes. Start with the website and move up to the $297/mo Full System whenever you want the automations." },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
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

const WebsiteOnly = () => (
  <div className="min-h-screen bg-white">
    <SEO
      title="Custom Business Website for $99/mo — Detool.AI"
      description="A custom-designed, mobile-friendly website built for you in 10 days. $99/month. Hosting, SSL and maintenance included. Cancel anytime."
      path="/website"
    />
    <Header />

    <section className="bg-detool-dark pt-36 pb-20 md:pt-40 md:pb-24">
      <div className="container mx-auto px-4 text-center">
        <p className="text-primary font-bold tracking-wide text-sm md:text-base mb-5">Website Only — $99/mo</p>
        <h1 className="text-4xl md:text-6xl lg:text-[4.25rem] font-black text-white leading-[1.08] max-w-4xl mx-auto mb-6">
          A Professional Website For Your Business — Built For You
        </h1>
        <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
          Custom design, mobile-friendly, with a lead form that emails you every inquiry. Hosting and maintenance included. Live in 10 days.
        </p>
        <div className="flex flex-col items-center gap-3">
          <BookCallLink
            plan="website"
            className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg w-full sm:w-auto"
          >
            Get my website — $99/mo
          </BookCallLink>
          <p className="text-white/55 text-sm md:text-base">Cancel anytime · No contracts · No setup fees</p>
        </div>
      </div>
    </section>

    <section className="py-20 bg-detool-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-10">What you get</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <ul className="space-y-3 mb-6">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-100 pt-5">
              <p className="text-sm font-semibold text-gray-500 mb-2">Not included in this plan:</p>
              <ul className="space-y-1.5">
                {notIncluded.map((item) => (
                  <li key={item} className="text-sm text-gray-400 line-through">{item}</li>
                ))}
              </ul>
              <p className="text-sm text-gray-500 mt-3">
                Want those too? The{" "}
                <a href="/#pricing" className="text-primary font-semibold hover:underline">$297/mo Full System</a>{" "}
                includes everything.
              </p>
            </div>
            <BookCallLink
              plan="website"
              className="mt-8 block text-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-8 py-4 text-lg"
            >
              Get my website — $99/mo
            </BookCallLink>
          </div>
        </div>
      </div>
    </section>

    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="bg-detool-cream border border-gray-200 rounded-2xl p-6 text-center">
                <div className="text-5xl font-black text-primary/20 mb-3">{s.num}</div>
                <h3 className="font-bold text-gray-900 text-lg mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <VideoTestimonialGrid showSeeAll />

    <section className="py-20 bg-detool-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 text-center mb-10">Questions</h2>
          <div className="space-y-3">
            {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </div>
    </section>

    <section className="bg-detool-dark py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready for a website that looks the part?</h2>
        <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">Checkout today. We build for 10 days. Cancel anytime.</p>
        <BookCallLink
          plan="website"
          className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-5 text-xl"
        >
          Get my website — $99/mo
        </BookCallLink>
      </div>
    </section>

    <LandingFooter />
  </div>
);

export default WebsiteOnly;
