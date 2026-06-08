import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

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

          {/* Star ratings */}
          <div className="flex items-center justify-center gap-6 mb-10 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <span className="text-sm text-muted-foreground">Google Reviews</span>
            </div>
            <div className="w-px h-4 bg-border hidden sm:block" />
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
              </div>
              <span className="text-sm text-muted-foreground">150+ Businesses</span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.06] tracking-tight">
            Website Design & Automation<br />
            <span className="text-primary italic">For Service Businesses.</span>
          </h1>

          <p className="text-lg text-muted-foreground mb-4 max-w-2xl mx-auto leading-relaxed">
            Look, we're not going to promise you'll 10x your revenue overnight. What we <em>will</em> do is build you a damn good website and set up the tools that make sure you never miss a lead again.
          </p>

          <p className="text-sm text-muted-foreground/60 mb-10">
            Websites · Missed Call Text-Back · Automated Reviews · AI Chatbot · Paid Ads
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="px-10 py-7 text-lg font-semibold shadow-glow hover:scale-105 transition-transform rounded-full"
          >
            Book A Free Call
          </Button>

          <p className="text-xs text-muted-foreground/50 mt-4 tracking-wide">
            20 minutes · No pressure · No credit card
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
