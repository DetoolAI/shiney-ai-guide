import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Zap, Globe, TrendingUp, Star, Sparkles } from "lucide-react";
import SEO from "@/components/SEO";

const plans = [
  {
    name: "Starter Website",
    price: "$297",
    period: "/mo",
    badge: null,
    icon: Globe,
    tagline: "Everything you need to look professional online and never miss a lead.",
    color: "border-border",
    buttonStyle: "bg-primary hover:opacity-90 text-primary-foreground",
    features: [
      "Custom professional website design",
      "Mobile-optimized & fast loading",
      "AI Chat Widget (on-site chatbot)",
      "Missed call text-back automation",
      "Automated review request texts",
      "One-click marketing campaigns",
      "On-site SEO setup",
      "Google Business optimization",
      "Contact & booking forms",
      "Setup in under 3 days",
      "Monthly updates included",
      "24/7 support",
    ],
  },
  {
    name: "Digital Marketing",
    price: "Custom",
    period: " — book a call for quote",
    badge: "Most Popular",
    icon: TrendingUp,
    tagline: "Full-stack marketing engine — leads, outreach, follow-up, and ads that convert.",
    color: "border-primary",
    buttonStyle: "bg-gradient-primary hover:opacity-90 text-primary-foreground shadow-glow",
    features: [
      "Everything in Starter Website",
      "AI Lead Follow-Up (SMS + Email)",
      "Automated appointment booking",
      "Lead scraping (Google Maps, Zillow, web)",
      "Multi-channel outreach campaigns",
      "Ringless voicemail drops",
      "Facebook & Instagram Ads management",
      "Google Ads management",
      "3–5x ROAS targeting",
      "CRM integration (GHL, HubSpot, FUB)",
      "Dedicated account manager",
      "Weekly performance reports",
    ],
  },
  {
    name: "Full Growth Suite",
    price: "Custom",
    period: " — book a call for quote",
    badge: "Best Value",
    icon: Sparkles,
    tagline: "Every tool we have, fully managed, for businesses ready to scale fast.",
    color: "border-accent",
    buttonStyle: "bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground",
    features: [
      "Everything in Digital Marketing",
      "Custom AI chatbot trained on your brand",
      "Advanced lead qualification flows",
      "Full paid traffic team (Meta + Google)",
      "A/B tested ad creatives",
      "Pipeline automation & CRM buildout",
      "Monthly strategy calls",
      "Priority 24/7 support",
      "ROI guarantee within 60 days",
      "Free migration from existing systems",
      "No setup fees or hidden costs",
      "Scales with your business",
    ],
  },
];

const guarantees = [
  { icon: "✅", text: "ROI guarantee within 60 days" },
  { icon: "🚀", text: "Setup in under 3 days" },
  { icon: "🔓", text: "No long-term contracts — month-to-month" },
  { icon: "💸", text: "No setup fees or hidden costs" },
  { icon: "👤", text: "Dedicated account manager included" },
  { icon: "🕐", text: "24/7 priority support access" },
];

const faqs = [
  {
    q: "What's included in the $297/month plan?",
    a: "The Starter plan includes a fully custom website, AI chatbot, missed call text-back, automated review requests, one-click marketing, on-site SEO, and 24/7 support. Everything you need to look pro and capture more leads.",
  },
  {
    q: "Is there a setup fee?",
    a: "No setup fees, ever. What you see is what you pay.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. All plans are month-to-month. No contracts, no cancellation penalties.",
  },
  {
    q: "How fast will my site be ready?",
    a: "Most clients are fully live in under 3 days. We handle everything — design, setup, and automation.",
  },
  {
    q: "What is missed call text-back?",
    a: "When someone calls your business and you miss it, they automatically receive a text within seconds saying you'll be in touch. You never lose a lead to a missed call again.",
  },
  {
    q: "How does the automated review system work?",
    a: "After a client interaction, we automatically send them a text asking for a Google review with a direct link. More reviews = better local ranking.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Pricing — Detool.AI | Starting at $297/mo"
        description="Detool.AI plans start at $297/month. Get a custom website, AI chatbot, missed call text-back, automated reviews, one-click marketing, and on-site SEO. No contracts."
        path="/pricing"
      />
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Star className="w-4 h-4 fill-primary text-primary" />
            <span className="text-sm font-medium text-primary">Simple, transparent pricing</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Plans That <span className="text-primary">Pay for Themselves</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start with a fully automated website for $297/month — or scale up to a complete done-for-you growth system. No contracts, no surprises.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <div
                  key={i}
                  className={`relative rounded-2xl border-2 ${plan.color} bg-card p-8 flex flex-col ${plan.badge === "Most Popular" ? "shadow-warm scale-[1.02]" : ""}`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full shadow-glow">
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground">{plan.name}</h2>
                  </div>

                  <div className="mb-2">
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground text-sm">{plan.period}</span>
                  </div>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{plan.tagline}</p>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-sm text-foreground">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full py-3 font-semibold ${plan.buttonStyle}`} asChild>
                    <Link to="/contact">
                      {plan.price === "$297" ? "Get Started" : "Book a Free Call"}
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    No contracts • Cancel anytime
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's in the $297 plan — feature spotlight */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything Inside the <span className="text-primary">$297/mo Plan</span>
            </h2>
            <p className="text-muted-foreground text-lg">Built for business owners who want to look pro and automate the boring stuff.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🌐", title: "Custom Website", desc: "Professionally designed, mobile-optimized, and built to convert visitors into leads." },
              { icon: "🤖", title: "AI Chatbot", desc: "A smart chat widget on your site that answers questions and captures leads 24/7." },
              { icon: "📞", title: "Missed Call Text-Back", desc: "When you miss a call, your lead instantly gets a text so you never lose them." },
              { icon: "⭐", title: "Automated Review Requests", desc: "After every interaction, clients get a text asking for a Google review — on autopilot." },
              { icon: "📣", title: "One-Click Marketing", desc: "Send promotions, offers, or announcements to your entire contact list in one click." },
              { icon: "🔍", title: "On-Site SEO", desc: "Optimized titles, meta tags, schema markup, and sitemap so Google finds you first." },
            ].map((item, i) => (
              <div key={i} className="bg-card border border-border rounded-xl p-6">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Our <span className="text-primary">Guarantee</span> to You
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {guarantees.map((g, i) => (
              <div key={i} className="flex items-center gap-3 bg-card border border-border rounded-xl px-5 py-4">
                <span className="text-xl">{g.icon}</span>
                <span className="text-foreground text-sm font-medium">{g.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-bold text-center text-foreground mb-10">
            Pricing <span className="text-primary">FAQs</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card border border-border rounded-xl px-6 py-5">
                <p className="font-semibold text-foreground mb-2">{faq.q}</p>
                <p className="text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <Zap className="w-10 h-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free call and we'll have you live in under 3 days.
          </p>
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-10 py-6 font-semibold shadow-glow" asChild>
            <Link to="/contact">Book Your Free Call</Link>
          </Button>
          <p className="text-sm text-muted-foreground mt-4">No credit card required • Setup in under 3 days</p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
