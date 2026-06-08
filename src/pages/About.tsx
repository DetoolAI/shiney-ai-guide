import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle2 } from "lucide-react";
import SEO from "@/components/SEO";

const reviews = [
  { name: "Jayden Gutierrez", text: "My experience with this marketing agency was a 10/10, definitely recommend.", date: "a day ago" },
  { name: "Leah M", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it.", date: "a month ago" },
  { name: "Vanessa Iheme", text: "I had a great experience with Detool Ai. Such a professional and affordable marketing agency. Offered 24/7 support, delivered on time, and did an amazing job.", date: "a month ago" },
];

const values = [
  "We don't oversell — we tell you what actually works",
  "We build it, set it up, and support you after launch",
  "Month-to-month only — no long-term contracts ever",
  "150+ service businesses already running on our system",
  "Real support from a real person, not a chatbot ticket",
  "We improve your site over time — no extra charge",
];

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="About — Detool.AI" description="Learn about Detool.AI — built to help service businesses stop losing leads and get more clients." path="/about" />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20" style={{ background: "#0f1b2d" }}>
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Built by someone sick of watching<br />
            <span className="text-primary">good businesses lose</span><br />
            for dumb reasons.
          </h1>
          <p className="text-xl text-gray-400">The story behind Detool.AI.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
            <p>
              I started Detool.AI after seeing the same thing over and over — business owners busting their ass to get leads, then losing them because follow-up was too slow or they didn't have a decent website.
            </p>
            <p>
              That's not a hustle problem. That's a systems problem. And it's 100% fixable.
            </p>
            <p>
              So I built the fix. A real website that makes you look like a legit business. Automated follow-up so you never miss a lead. Review requests that go out without you thinking about it.
            </p>
            <p>
              We're not some big agency with 50 employees. We're a small team that actually gives a damn about the businesses we work with. 150+ clients in, and we're just getting started.
            </p>
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
            <Button asChild size="lg" className="rounded-lg px-10 py-6 font-bold shadow-md">
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-4xl font-black text-gray-900 text-center mb-12">What clients say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">{[...Array(5)].map((_, si) => <Star key={si} className="w-4 h-4 fill-primary text-primary" />)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">{r.name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
