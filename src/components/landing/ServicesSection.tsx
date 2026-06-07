import { Globe, Bot, Phone, Star, Megaphone, Search, MapPin, Mail, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Globe,
    title: "Custom Website",
    desc: "Built for your brand. Fast, mobile-ready, and designed to turn visitors into leads."
  },
  {
    icon: Bot,
    title: "AI Chatbot",
    desc: "Answers questions, captures leads, and qualifies prospects on your site 24/7."
  },
  {
    icon: Phone,
    title: "Missed Call Text-Back",
    desc: "Miss a call? Your lead instantly gets a text. You never lose them again."
  },
  {
    icon: Star,
    title: "Automated Reviews",
    desc: "After every job, clients get a text asking for a Google review. More stars, more clients."
  },
  {
    icon: Megaphone,
    title: "One-Click Marketing",
    desc: "Send offers and promos to your entire contact list with a single click."
  },
  {
    icon: Search,
    title: "On-Site SEO",
    desc: "Optimized so Google finds you first when people search for what you do."
  },
  {
    icon: MapPin,
    title: "Lead Scraping",
    desc: "Pull fresh leads from Google Maps, Zillow, and across the web straight into your pipeline."
  },
  {
    icon: Mail,
    title: "Outreach Automation",
    desc: "SMS, email, and ringless voicemail campaigns that run while you sleep."
  },
  {
    icon: TrendingUp,
    title: "Paid Ads",
    desc: "Facebook, Instagram, and Google ads managed for you. Average 3–5x return on spend."
  },
];

const ServicesSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          <div className="text-center mb-16">
            <p className="text-primary font-medium tracking-widest text-sm uppercase mb-3">What we do</p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-5">
              One team. Everything covered.
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              From the website visitors see to the system that follows up and books them — it's all handled.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group bg-card border border-border hover:border-primary/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-warm"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              See plans & pricing →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
