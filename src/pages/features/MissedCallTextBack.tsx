import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Fires within 10 seconds of a missed call",
  "Custom message with your booking link",
  "Works 24/7 — even when you're with a client",
  "Works on your existing business phone number",
  "Client replies go straight to your inbox",
  "Never lose a lead to voicemail again",
  "Track how many leads you're recovering each week",
  "No app to download, no extra hardware",
];

const MissedCallTextBack = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Missed Call Text Back</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Someone calls. You're with a client. They hang up. Without this system — they're gone. With it — they get a text in 10 seconds and book online.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-12 max-w-lg mx-auto">
            <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">Example text message</p>
            <div className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
              <p className="text-gray-800 text-sm leading-relaxed">
                "Hey! Sorry we missed your call — we're with a client right now. Book your appointment here: [your-salon].detool.ai. We'd love to see you!"
              </p>
            </div>
            <p className="text-xs text-gray-400">Fires automatically within 10 seconds of any missed call</p>
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
          <h2 className="text-3xl font-black text-white mb-4">Stop letting missed calls become lost clients</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll set up your missed call text-back in 48 hours.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default MissedCallTextBack;
