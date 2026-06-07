import { Button } from "@/components/ui/button";

const LandingHero = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8 pb-16">
      {/* Logo background */}
      <div 
        className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: "url('/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png')"
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" 
              alt="Detool.AI Logo" 
              className="w-20 h-20 rounded-xl"
            />
          </div>
          
          {/* Pill badge */}
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-foreground/80 tracking-wide">AI growth studio</span>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.05] tracking-tight">
            Websites, automation,<br />
            <span className="text-primary italic">and leads that close.</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-3xl mx-auto leading-relaxed">
            We build high-converting websites, AI follow-up systems, and lead generation engines — everything you need to turn traffic into booked appointments.
          </p>
          
          {/* Qualifier line */}
          <p className="text-sm text-muted-foreground/80 mb-10">
            One team. Websites • AI automation • Outreach • Paid traffic.
          </p>

          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Book a Free Meeting
            </Button>
            <a
              href="/pricing"
              className="text-base font-medium text-primary hover:text-accent transition-colors underline underline-offset-4"
            >
              See Pricing →
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • Plans starting at $297/mo
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
