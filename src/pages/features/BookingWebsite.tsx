import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const benefits = [
  "Your own custom domain — looks like a real business, not a third-party app",
  "Clients book 24/7 without calling or DMing you",
  "Real-time availability — no double-bookings, ever",
  "Automatic confirmation texts and appointment reminders",
  "Mobile-optimized — works perfectly on every phone",
  "Service menu with pricing and descriptions",
  "Multiple staff members and locations supported",
  "Built-in deposit collection at time of booking",
];

const steps = [
  { title: "We design your site", desc: "Custom colors, your logo, your service menu, your prices. Looks like you hired a top design agency." },
  { title: "We connect your booking system", desc: "Real-time availability, automatic confirmations, reminders, and deposit collection all built in." },
  { title: "You go live in 48 hours", desc: "Send your clients to your new booking link. Watch the appointments roll in." },
];

const BookingWebsite = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">Feature</p>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Branded Booking Website</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">A professional booking site with your branding, your services, and your prices. Clients book, pay deposits, and confirm — all without you picking up the phone.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">What's included</h2>
            <div className="grid md:grid-cols-2 gap-4 mb-16">
              {benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-sm">{b}</span>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s, i) => (
                <div key={i} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-black text-primary/20 mb-3">0{i + 1}</div>
                  <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "#0f1b2d" }} className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Ready for your own booking website?</h2>
          <p className="text-white/70 text-lg mb-8">Book a free call and we'll show you a live demo built for your type of salon.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default BookingWebsite;
