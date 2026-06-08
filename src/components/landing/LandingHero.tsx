import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

const LandingHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-15 blur-[140px] pointer-events-none bg-primary" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Social proof bar */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-10">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-xs text-muted-foreground">5.0 · Trusted by 150+ businesses</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.06] tracking-tight">
            We build websites that<br />
            <span className="text-primary italic">actually get you clients.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            A professional website built for your business — fast, mobile-ready, and designed to convert visitors into paying customers. Live in 7–10 days.
          </p>
          <p className="text-sm text-muted-foreground/70 mb-10">
            + AI follow-up · Missed call text-back · Review automation · Paid ads
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="px-8 py-6 text-base font-semibold shadow-glow hover:scale-105 transition-transform rounded-full"
            >
              Get My Website <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link
              to="/pricing"
              className="px-8 py-6 text-base font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors rounded-full"
            >
              See Pricing
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/50 tracking-wide">
            Starting at $297/mo &nbsp;·&nbsp; No contracts &nbsp;·&nbsp; No credit card required
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30">
        <div className="w-px h-8 bg-primary animate-pulse" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
};

export default LandingHero;
