import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <span className="text-sm font-medium text-primary">Who's behind Detool.AI</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-5">
                Built by someone who understands your hustle
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hey, I'm Justin — founder of Detool.AI. I built this because I watched too many business owners lose leads simply because they couldn't respond fast enough or follow up consistently.
                </p>
                <p>
                  So I built the system I wish existed — one that responds instantly, follows up automatically, and books appointments without you lifting a finger.
                </p>
                <p>
                  Today we've helped 150+ agents and teams across the US stop chasing leads and start closing them. If you're ready to build a business that runs itself, I'd love to help.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-glow" asChild>
                  <Link to="/contact">Work With Me</Link>
                </Button>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
