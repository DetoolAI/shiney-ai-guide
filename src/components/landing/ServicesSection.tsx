import { Link } from "react-router-dom";
import { Bot, Phone, Star, Megaphone, Search, TrendingUp, Check } from "lucide-react";

const websiteFeatures = [
  "Custom design built around your brand",
  "Mobile-optimized & fast loading",
  "Contact & booking forms built in",
  "On-site SEO setup from day one",
  "Google Business profile optimization",
  "Live in 7–10 days",
];

const addons = [
  {
    icon: Bot,
    title: "AI Chatbot",
    desc: "Answers questions and captures leads on your site 24/7 — even while you sleep.",
  },
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    desc: "Miss a call? Your lead instantly gets a text. You never lose them to voicemail again.",
  },
  {
    icon: Star,
    title: "Automated Reviews",
    desc: "After every job, clients get a text asking for a Google review. More stars on autopilot.",
  },
  {
    icon: Megaphone,
    title: "One-Click Marketing",
    desc: "Send promos and offers to your entire contact list with a single click.",
  },
  {
    icon: Search,
    title: "AI Lead Follow-Up",
    desc: "Responds to new leads instantly via SMS & email and follows up until they book.",
  },
  {
    icon: TrendingUp,
    title: "Paid Ads",
    desc: "Facebook, Instagram & Google ads managed for you. Average 3–5x return on spend.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Main service — Website */}
          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              We build your website.<br className="hidden md:block" /> You get the clients.
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A fully custom, professional website designed to make your business look established and turn visitors into leads. Everything handled for you.
            </p>
          </div>

          {/* Website feature card */}
          <div className="bg-white border border-primary/30 rounded-3xl p-8 md:p-12 mb-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
            <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wider">Core Service</span>
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Custom Website Design</h3>
                <p className="text-gray-500 mb-6 leading-relaxed">
                  Not a template. Not a drag-and-drop builder. A real custom website built specifically for your business — the kind that makes people trust you before they even call.
                </p>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-glow text-sm"
                >
                  See pricing — starts at $297/mo →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {websiteFeatures.map((f, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-gray-900 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Add-ons */}
          <div className="text-center mb-8 mt-16">
            <p className="text-gray-500 text-sm uppercase tracking-widest font-medium mb-2">Optional add-ons</p>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
              Make your site work even harder
            </h3>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto text-sm">
              Layer these on top of your website to automate your follow-up, reviews, and marketing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {addons.map((a, i) => (
              <div
                key={i}
                className="group bg-white border border-gray-200 hover:border-primary/40 rounded-2xl p-6 transition-all duration-200 hover:shadow-warm"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1.5 text-sm">{a.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
