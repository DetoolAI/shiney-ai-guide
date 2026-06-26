import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import BookCallLink from "@/components/BookCallLink";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const included = [
  "100% custom design — no templates",
  "Mobile-optimized and fast loading",
  "Contact & booking forms built in",
  "On-site SEO from day one",
  "Google Business profile optimization",
  "Hosting & maintenance included",
  "Monthly updates at no extra charge",
  "You own it — no lock-in",
];

const examples = [
  { type: "Real Estate Agent", desc: "Lead capture, listings showcase, instant contact form" },
  { type: "Mobile Auto Detailer", desc: "Quote form, gallery, service packages, service area map" },
  { type: "Landscaper / Contractor", desc: "Quote request form, project gallery, service area" },
  { type: "Cleaning Service", desc: "Online booking, pricing table, testimonials" },
  { type: "Personal Trainer", desc: "Program overview, client results, booking calendar" },
  { type: "Any Service Business", desc: "Whatever you need to look professional and get leads" },
];

const Websites = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Custom Website Design — Detool.AI"
        description="We build custom websites for service businesses that actually get you clients. Starting at $297/month. Live in 7–10 days."
        path="/websites"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Core Service</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            A website that actually<br />
            <span className="text-primary italic font-serif">gets you clients.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            We're not going to hand you a Wix template and call it a day. We build custom websites designed specifically for your business to make you look established and turn visitors into paying clients.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <BookCallLink className="inline-flex items-center justify-center rounded-full px-10 py-6 text-base font-semibold shadow-warm bg-primary text-white hover:bg-primary/90">
              Get My Website <ArrowRight className="ml-2 w-4 h-4" />
            </BookCallLink>
            <Link to="/pricing" className="text-primary font-medium hover:underline">
              See pricing →
            </Link>
          </div>
          <p className="text-xs text-gray-500/60 mt-4">Starting at $297/mo · No contracts · Live in 7–10 days</p>
        </div>
      </section>

      {/* What's included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">What you get</p>
              <h2 className="text-4xl font-bold text-gray-900 mb-5 leading-tight">
                Everything included.<br />Nothing hidden.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                Most agencies charge extra for every little thing. We don't. Your $297/mo covers the website, hosting, maintenance, and monthly updates. That's it.
              </p>
              <Button asChild className="rounded-full px-8 font-semibold">
                <BookCallLink className="hover:text-primary transition-colors">Book A Free Call</BookCallLink>
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-3">
              {included.map((item, i) => (
                <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-4 py-3">
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Check className="w-3.5 h-3.5 text-white" />
                  </div>
                  <span className="text-gray-900 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who we build for */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Who it's for</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">We build for businesses like yours</h2>
          <p className="text-gray-500 mb-12 max-w-xl mx-auto">
            If you run a service business and your website is embarrassing (or you don't have one), we fix that.
          </p>
          <div className="grid md:grid-cols-3 gap-5">
            {examples.map((ex, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 text-left shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-bold text-gray-900 mb-2">{ex.type}</h3>
                <p className="text-sm text-gray-500">{ex.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-5">Let's be straight with you</h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-6">
            A website alone won't magically double your income. What it <em>will</em> do is make you look like a legit business instead of someone who just started yesterday — and that matters more than people admit.
          </p>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">
            When someone Googles you and finds a clean, professional website, they call you. When they find nothing — or something that looks like it was built in 2009 — they call your competitor.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 py-6 font-semibold shadow-warm">
            <BookCallLink className="hover:text-primary transition-colors">Book A Free Call</BookCallLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Websites;
