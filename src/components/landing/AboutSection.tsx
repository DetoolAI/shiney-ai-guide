import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Video side */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl opacity-40 blur-2xl bg-gradient-primary" />
                <div className="relative w-64 md:w-80 rounded-2xl overflow-hidden border-2 border-primary/30 shadow-warm">
                  <img
                    src="/justin.png"
                    alt="Justin — Founder of Detool.AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border rounded-full px-5 py-2 shadow-card whitespace-nowrap">
                  <span className="text-sm font-semibold text-foreground">Justin · Founder of Detool.AI</span>
                </div>
              </div>
            </div>

            {/* Text side */}
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
                <a
                  href="https://www.instagram.com/detool.ai/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-lg border border-border text-foreground hover:border-primary hover:text-primary transition-colors text-sm font-medium"
                >
                  Follow on Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
