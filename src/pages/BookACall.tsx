import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import DemoRequestForm from "@/components/landing/DemoRequestForm";

const expects = [
  { num: "01", title: "We walk you through the platform live", desc: "You'll see exactly what your booking website, automations, and campaigns will look like — all built around your specific beauty business." },
  { num: "02", title: "We tell you what to expect, honestly", desc: "If your business is a good fit, we'll tell you. If it's not, we'll tell you that too. No pressure. No sales tactics." },
  { num: "03", title: "If you're in, we start in 48 hours", desc: "Say the word and we build your entire system — booking site, automations, deposits, campaigns — and launch with you in under a week." },
];

const BookACall = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Book A Free 20-Minute Call</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">We'll show you the platform live, answer every question you have, and tell you honestly whether it's right for your business.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">What to expect on the call</h2>
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {expects.map((e, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary/20 mb-3">{e.num}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{e.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{e.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <DemoRequestForm />

      <LandingFooter />
    </div>
  );
};

export default BookACall;
