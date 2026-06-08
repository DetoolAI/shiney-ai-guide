import BookCallButton from "@/components/BookCallButton";

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
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">The process</p>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              What working with us looks like...
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              No complicated onboarding. No waiting 3 months. Here's exactly how it goes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5">
                  <span className="text-xl font-black text-white">{step.number}</span>
                </div>
                <p className="text-xs text-primary font-bold tracking-widest uppercase mb-2">{step.time}</p>
                <h3 className="text-xl font-black text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <BookCallButton className="px-10 py-5 text-base">
              Book A Free Call →
            </BookCallButton>
            <p className="text-xs text-gray-400 mt-3">20 minutes. No obligation. No credit card.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
