import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookCallLink from "@/components/BookCallLink";
import { Button } from "@/components/ui/button";
import { Phone, Star, Megaphone, Bot, TrendingUp, Check } from "lucide-react";
import SEO from "@/components/SEO";

const tools = [
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    price: "Included in $297 plan",
    desc: "The second you miss a call, your lead automatically gets a text. Simple as that. Most of the time they reply — and you've still got the lead instead of losing it to whoever picked up.",
    bullets: [
      "Instant text sent the moment you miss a call",
      "Works 24/7 — even at 2am",
      "Your lead hears from you before calling someone else",
      "Set it up once, never touch it again",
    ],
  },
  {
    icon: Star,
    title: "Automated Review Requests",
    price: "Included in $297 plan",
    desc: "You do great work but hate asking for reviews. We get it. So we do it for you — automatically. After every job, your client gets a text with a direct Google review link.",
    bullets: [
      "Auto text sent after every completed job",
      "One tap and they're leaving you a review",
      "More reviews = higher Google ranking",
      "No awkward in-person asking",
    ],
  },
  {
    icon: Megaphone,
    title: "One-Click Marketing",
    price: "Included in $297 plan",
    desc: "Want to send a promo, a referral offer, or a seasonal special to your client list? One click. Done. No complicated software, no ad budget, no agency fees.",
    bullets: [
      "Send to your whole list in one click",
      "Promos, referral campaigns, seasonal deals",
      "Done-for-you templates included",
      "No marketing experience needed",
    ],
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    price: "Included in $297 plan",
    desc: "A chatbot on your site that actually knows your business — answers questions, captures leads, and qualifies prospects while you're out working. Not some generic bot that says 'how can I help you today?'",
    bullets: [
      "Trained specifically on your business",
      "Captures lead info even when you're unavailable",
      "Answers common questions automatically",
      "Hands off serious leads to you",
    ],
  },
  {
    icon: Bot,
    title: "AI Lead Follow-Up",
    price: "Add-on — ask about pricing",
    desc: "When new leads come in, the AI follows up via SMS and email automatically — until they respond or book. Most people give up after one follow-up. Ours doesn't.",
    bullets: [
      "Instant response to every new lead",
      "Follows up multiple times without being annoying",
      "Books appointments directly to your calendar",
      "You only talk to leads who are ready",
    ],
  },
  {
    icon: TrendingUp,
    title: "Paid Ads Management",
    price: "Add-on — ask about pricing",
    desc: "Facebook, Instagram, and Google ads — fully managed. We build the campaigns, write the copy, target the right people, and report back to you. Average client sees 3–5x return. No guarantees, but that's the reality.",
    bullets: [
      "Facebook & Instagram ads",
      "Google search ads",
      "Full campaign setup and management",
      "Monthly performance reports",
    ],
  },
];

const Automation = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Automation Tools — Detool.AI"
        description="Missed call text-back, automated review requests, AI chatbot, one-click marketing, and more. Add-on tools that make your website work harder."
        path="/automation"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Automation Tools</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Make your website<br />
            <span className="text-primary italic font-serif">work while you don't.</span>
          </h1>
          <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
            These tools run in the background 24/7 — responding to leads, asking for reviews, sending marketing texts — so you don't have to. No extra staff. No extra hours.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 py-6 text-base font-semibold shadow-warm">
            <BookCallLink className="hover:text-primary transition-colors">Book A Free Call</BookCallLink>
          </Button>
          <p className="text-xs text-gray-500/60 mt-4">Most tools included in the $297/mo plan</p>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl space-y-20">
          {tools.map((tool, i) => {
            const Icon = tool.icon;
            const flip = i % 2 !== 0;
            return (
              <div key={i} className={`flex flex-col ${flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12`}>
                {/* Visual */}
                <div className="w-full md:w-5/12 flex-shrink-0">
                  <div className="bg-white border border-gray-200 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="text-xs text-primary font-semibold uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                      {tool.price}
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">{tool.title}</h3>
                  <p className="text-gray-500 mb-6 leading-relaxed">{tool.desc}</p>
                  <ul className="space-y-3">
                    {tool.bullets.map((b, bi) => (
                      <li key={bi} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-900 text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to set this up?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Book a free call. We'll figure out which tools make sense for your business and get them running.
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

export default Automation;
