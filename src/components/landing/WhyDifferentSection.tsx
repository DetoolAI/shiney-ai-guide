import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Simple To Use", desc: "We build it, set it up, and explain it. You don't need to know anything about tech." },
  { title: "Actually Affordable", desc: "Starting at $297/mo. No $5,000 upfront fees. No year-long commitments." },
  { title: "No Contracts", desc: "Month-to-month, always. If we're not delivering, you shouldn't have to stay." },
  { title: "No Bullsh*t", desc: "We're not going to promise you'll triple your revenue. We'll build something solid that works." },
  { title: "We Have Proof", desc: "Real clients. Real Google reviews. 150+ businesses already running on our system." },
  { title: "We Keep Improving", desc: "Your site and tools get better over time. Monthly updates included at no extra charge." },
];

const WhyDifferentSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-3">
            Why we're "totally unique"...
          </h2>
          <p className="text-2xl font-black text-gray-400 italic">just like everyone else claims, right?</p>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Fair enough. Here's the real stuff — no stock photos of people shaking hands.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <CheckCircle2 className="w-7 h-7 text-primary mb-4" />
              <h3 className="font-black text-gray-900 text-lg mb-2">{r.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyDifferentSection;
