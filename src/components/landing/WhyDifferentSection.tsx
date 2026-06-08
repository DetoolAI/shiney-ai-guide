const reasons = [
  {
    emoji: "✅",
    title: "Simple To Use",
    desc: "We build it, we set it up, we explain it. You don't need to know anything about tech.",
  },
  {
    emoji: "💰",
    title: "Actually Affordable",
    desc: "Starting at $297/mo. No $5,000 upfront fees. No year-long commitments.",
  },
  {
    emoji: "🔓",
    title: "No Contracts",
    desc: "Month-to-month, always. If we're not delivering, you shouldn't have to stay.",
  },
  {
    emoji: "🚫",
    title: "No Bullsh*t",
    desc: "We're not going to promise you'll triple your revenue. We'll build you something solid that works.",
  },
  {
    emoji: "⭐",
    title: "We Have Proof",
    desc: "Real clients. Real reviews. 150+ businesses already running with us.",
  },
  {
    emoji: "🔄",
    title: "We Keep Improving",
    desc: "Your site and tools get better over time. Monthly updates included, no extra charge.",
  },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">Why us</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why we're different...<br />
              <span className="text-muted-foreground text-3xl font-normal italic">just like everyone else claims, right?</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Fair enough. Here's the real stuff — no fluff, no stock photos of people shaking hands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-colors">
                <div className="text-3xl mb-4">{r.emoji}</div>
                <h3 className="font-bold text-foreground text-lg mb-2">{r.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
