import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Automatic text sent after every appointment",
  "Happy clients are directed to Google with one tap",
  "Unhappy clients reach you privately — before they post publicly",
  "Timing is optimized for when clients are most likely to review",
  "Custom message in your brand's voice",
  "Works with your existing appointment system",
  "Tracks review count and average rating over time",
  "More 5-star reviews = higher Google ranking = more new clients",
];

const ReviewFunnel = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">5 Star Review Funnel</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Build your Google reputation on autopilot. Happy clients get one-tap access to leave a review. Complaints come to you first — not the internet.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-2">For happy clients:</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">"Thank you so much for visiting [Salon Name]! We'd love your review — it means the world to us. Leave us a 5-star review here: [link]"</p>
              <p className="text-xs text-gray-400">→ One tap takes them directly to your Google listing</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <p className="font-bold text-gray-900 mb-2">If something went wrong:</p>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">"Hi [Name], how was your recent visit? If anything wasn't perfect, we'd love to hear from you and make it right."</p>
              <p className="text-xs text-gray-400">→ Replies come directly to you — not Google, not Yelp</p>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1b2d" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready to build your 5-star reputation?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll set up your review funnel in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default ReviewFunnel;
