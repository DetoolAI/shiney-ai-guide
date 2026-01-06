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
          
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Stop Chasing Leads. Let AI Follow Up and Book Appointments for You.
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Detool.AI instantly responds to new inquiries, follows up automatically via SMS and email, and books qualified appointments so agents can focus on closing deals.
          </p>
          
          {/* Single Primary CTA */}
          <Button 
            size="lg" 
            onClick={scrollToForm}
            className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Book a Free Demo
          </Button>
          
          <p className="text-sm text-muted-foreground mt-6">
            No credit card required • See results in minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
