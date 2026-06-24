import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { CheckCircle2, Star } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

const values = [
  "We don't oversell — we tell you what actually works for local service businesses",
  "We build it, set it up, and support you after launch",
  "Month-to-month only — no long-term contracts, ever",
  "Real clients, real reviews — you can verify every one on Google",
  "Real support from a real person, not a chatbot ticket",
  "We improve your system over time — no extra charge",
];

const reviews = [
  { name: "Creme De La Creme N/LLC", text: "Justin does an amazing job at paying attention to detail and making sure he achieves client satisfaction. Incredibly professional website design! Look no further!" },
  { name: "Leah M", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it." },
  { name: "Vanessa Iheme", text: "I had a great experience with Detool AI. Such a professional and affordable agency. 24/7 support, delivered on time, amazing results. I will definitely be working with him again." },
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Built for local business owners who are done leaving money on the table.
          </h1>
          <p className="text-white/70 text-xl">The story behind Detool.AI.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-detool-dark to-primary/60 flex items-center justify-center text-white font-bold text-center p-4">
                Justin<br />Founder, Detool.AI
              </div>
            </div>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed flex-1">
            <p>
              I started Detool.AI after seeing the same pattern over and over — local business owners working incredibly hard, doing great work, but losing clients because their systems were broken. We specialize in nail salons and also serve real estate, security, and other service businesses.
            </p>
            <p>
              No-shows killing revenue. Missed calls going to voicemail and never converting. Clients finishing an appointment and never hearing from the business again. Slow weeks with no way to fill them fast.
            </p>
            <p>
              That's not a work ethic problem. That's a systems problem. And every single one of those problems is 100% fixable with the right tools.
            </p>
            <p>
              So we built the fix. A branded booking website that collects deposits automatically. Missed call text-back that fires within seconds. Post-visit review requests that go out without you thinking about them. Campaigns that fill your schedule in one click.
            </p>
            <p>
              We set it all up for you in 10 days. You launch it in 25 minutes. And from that point on, it runs in the background while you focus on your clients.
            </p>
            <p>
              We're not a big agency. We're a small, focused team that actually gives a damn about the businesses we work with. Every client matters to us.
            </p>
            </div>
          </div>

          <div className="mt-12 grid md:grid-cols-2 gap-4">
            {values.map((v, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm font-medium">{v}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
              Book A Free Call
            </BookCallLink>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-12">What our clients say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-primary text-primary" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">{r.name[0]}</div>
                  <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default About;
