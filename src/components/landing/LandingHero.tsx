import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const LandingHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-24 pb-20">
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px] pointer-events-none bg-primary" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png"
              alt="Detool.AI"
              className="w-16 h-16 rounded-xl opacity-90"
            />
          </div>

          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-medium text-primary tracking-widest uppercase">AI Growth Studio</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.08] tracking-tight">
            You're losing leads<br />
            <span className="text-primary italic">every single day.</span>
          </h1>

          {/* Sub */}
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
            Missed calls, slow replies, forgotten follow-ups — it adds up. Detool.AI fixes all of it automatically so you can focus on closing.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="px-8 py-6 text-base font-semibold shadow-glow hover:scale-105 transition-transform rounded-full"
            >
              Book a Free Call <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link
              to="/pricing"
              className="px-8 py-6 text-base font-medium text-foreground border border-border hover:border-primary hover:text-primary transition-colors rounded-full"
            >
              View Pricing
            </Link>
          </div>

          <p className="text-xs text-muted-foreground/60 mt-6 tracking-wide">
            No contracts &nbsp;·&nbsp; No credit card &nbsp;·&nbsp; Starting at $297/mo
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40">
        <div className="w-px h-8 bg-primary animate-pulse" />
        <span className="text-xs text-muted-foreground tracking-widest uppercase">scroll</span>
      </div>
    </section>
  );
};

export default LandingHero;
