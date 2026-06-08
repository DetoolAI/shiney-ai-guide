import { Link } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Free Demo Call",
    time: "20 minutes",
    desc: "We hop on a quick call, learn about your business, show you what we'd build, and answer any questions. No hard sell. Just a real conversation.",
  },
  {
    number: "02",
    title: "We Build Your System",
    time: "7–10 days",
    desc: "We build your website and set up whatever tools you need — chatbot, missed call text-back, review automation. You see it before it goes live.",
  },
  {
    number: "03",
    title: "Launch & Get Clients",
    time: "Launch call included",
    desc: "We walk you through everything on a launch call so you know exactly how it works. Then you go live and start getting leads.",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">The process</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What working with us looks like...
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No complicated onboarding. No waiting 3 months. Here's exactly how it goes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connector */}
            <div className="hidden md:block absolute top-10 left-[calc(16.6%+2rem)] right-[calc(16.6%+2rem)] h-px bg-border z-0" />

            {steps.map((step, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mx-auto mb-5 shadow-glow">
                  <span className="text-xl font-bold text-white">{step.number}</span>
                </div>
                <p className="text-xs text-primary font-medium tracking-widest uppercase mb-2">{step.time}</p>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-10 py-5 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-glow text-base"
            >
              Book A Free Call →
            </Link>
            <p className="text-xs text-muted-foreground mt-3">20 minutes. No obligation. No credit card.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
