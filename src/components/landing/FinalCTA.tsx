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
            Want to schedule a time to talk?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            20 minutes. We'll look at your current situation, tell you exactly what we'd build, and give you a straight answer on whether we're a good fit. No pitch. No pressure.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform rounded-full"
          >
            Book A Free Call
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Starting at $297/mo · No contracts · No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
