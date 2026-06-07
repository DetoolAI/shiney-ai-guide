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
            Every day you wait is another lead someone else closed.
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Book a free call. We'll show you exactly what's leaking from your business and how to fix it — no pressure, no pitch deck, just a real conversation.
          </p>

          <Button
            size="lg"
            onClick={scrollToForm}
            className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
          >
            Let's Talk — It's Free
          </Button>

          <p className="text-sm text-muted-foreground mt-6">
            No contracts • No credit card • Takes 15 minutes
          </p>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
