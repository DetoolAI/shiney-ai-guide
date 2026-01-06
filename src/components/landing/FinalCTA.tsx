import { Button } from "@/components/ui/button";

const FinalCTA = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("demo-form");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Stop Losing Leads to Slow Follow-Ups
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Let Detool.AI respond, follow up, and book appointments automatically.
          </p>
          
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Book a Free Demo
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            Setup in under 3 days • 24/7 AI follow-ups • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
