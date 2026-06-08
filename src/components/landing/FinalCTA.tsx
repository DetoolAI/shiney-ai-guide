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
            Ready to get a website that actually works?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a free 15-minute call. We'll talk about your business, show you what we'd build, and get you live in 7–10 days.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform rounded-full"
          >
            Get My Website — Free Call
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            Starting at $297/mo · No contracts · No credit card
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
