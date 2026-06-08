import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Book a Free Call",
    desc: "We jump on a quick call to learn your business, your goals, and what you need. No pressure, no pitch deck — just a real conversation.",
  },
  {
    number: "02",
    title: "We Build It",
    desc: "We design and build your custom website from scratch. You'll see it before it goes live and give feedback. We handle everything.",
  },
  {
    number: "03",
    title: "Go Live & Get Clients",
    desc: "Your site goes live within 7–10 days. From there, we can layer on automations — AI follow-up, review requests, missed call text-back — to make it work even harder.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">How it works</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple as 1, 2, 3.
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No complicated onboarding. No waiting months. Just a website that works, built fast.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line */}
            <div className="hidden md:block absolute top-10 left-[calc(16.6%+1rem)] right-[calc(16.6%+1rem)] h-px bg-border" />

            {steps.map((step, i) => (
              <div key={i} className="relative text-center md:text-left">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                    <span className="text-xl font-bold text-primary-foreground">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-glow"
            >
              Book Your Free Call →
            </Link>
            <p className="text-xs text-muted-foreground mt-3">Takes 15 minutes. No obligation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
