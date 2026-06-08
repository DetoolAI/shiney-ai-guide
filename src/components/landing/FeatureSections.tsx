import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const features = [
  {
    tag: "Core Service",
    title: "A Website That Actually Does Something",
    desc: "Most websites just sit there looking pretty while your competitors steal your leads. Yours won't. We build custom sites that load fast, look professional on any device, and are built from day one to turn visitors into clients.",
    bullets: [
      "Actually get found on Google in your area",
      "Works perfectly on mobile (because that's where everyone is)",
      "Built-in contact & booking forms that work",
      "On-site SEO so you show up when people search for you",
    ],
    cta: "See what we build →",
    href: "/pricing",
    flip: false,
  },
  {
    tag: "Never Miss a Lead",
    title: "Missed Call Text-Back",
    desc: "Someone calls, you don't pick up — they're gone. That's how it used to work. Now, the second you miss a call, they automatically get a text from you. Most of the time they reply and you've still got the lead.",
    bullets: [
      "Instant automatic text when you miss a call",
      "Your lead hears from you before they call someone else",
      "Works 24/7 — even at 2am when someone's researching",
      "Set it up once, forget about it",
    ],
    cta: "Learn more →",
    href: "/pricing",
    flip: true,
  },
  {
    tag: "5-Star Reviews",
    title: "Automated Review Requests",
    desc: "You do great work but hate asking for reviews. We get it. So we ask for you — automatically. After every job, your client gets a text with a direct link to leave you a Google review. No awkward conversations needed.",
    bullets: [
      "Automatic text sent after every job",
      "Direct link — one tap and they're on Google",
      "More reviews = higher local ranking = more clients",
      "No more begging. It just happens.",
    ],
    cta: "See how it works →",
    href: "/pricing",
    flip: false,
  },
  {
    tag: "Stay in Touch",
    title: "One-Click Marketing Campaigns",
    desc: "Want to send a promo to your past clients? A referral offer? A seasonal special? One click and it goes out to everyone. No MailChimp courses, no ad budgets, no agency fees. Just you, a button, and your client list.",
    bullets: [
      "Send to your whole contact list instantly",
      "Promos, referral campaigns, seasonal offers",
      "No marketing degree needed",
      "Done-for-you templates included",
    ],
    cta: "See pricing →",
    href: "/pricing",
    flip: true,
  },
  {
    tag: "AI Tools",
    title: "AI Chatbot + Lead Follow-Up",
    desc: "Your site gets a chatbot that actually knows your business — answers questions, captures contact info, and qualifies leads while you're out on a job. And when new leads come in, the AI follows up via SMS and email until they book.",
    bullets: [
      "Chatbot trained on your specific business",
      "Captures leads even when you're unavailable",
      "AI follow-up via SMS & email — no manual work",
      "Only serious leads make it to your calendar",
    ],
    cta: "See how it works →",
    href: "/pricing",
    flip: false,
  },
];

const FeatureSections = () => {
  return (
    <section className="py-8 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-32">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col ${f.flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16`}
            >
              {/* Visual placeholder / icon block */}
              <div className="flex-shrink-0 w-full md:w-2/5">
                <div className="aspect-video rounded-2xl bg-card border border-border flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-primary opacity-5" />
                  <div className="text-center p-6 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-3xl">
                        {i === 0 ? "🌐" : i === 1 ? "📞" : i === 2 ? "⭐" : i === 3 ? "📣" : "🤖"}
                      </span>
                    </div>
                    <p className="text-xs text-muted-foreground">Live preview coming soon</p>
                  </div>
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">{f.tag}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4 leading-tight">{f.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{f.desc}</p>
                <ul className="space-y-3 mb-7">
                  {f.bullets.map((b, bi) => (
                    <li key={bi} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={f.href}
                  className="text-primary hover:text-accent transition-colors font-medium text-sm"
                >
                  {f.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSections;
