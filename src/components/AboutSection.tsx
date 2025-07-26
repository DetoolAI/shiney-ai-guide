import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Detool.AI
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Transforming businesses through intelligent automation
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                At Detool.AI, we believe the future of business isn't just about automation—it's about strategic transformation. Founded by a dedicated team of innovators including our brilliant teammate Gaven, we're on a mission to help companies increase revenue through intelligent AI solutions.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Why We Do What We Do
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                There's nothing more rewarding than witnessing business growth. We've developed intelligent AI systems that don't just streamline operations—they unlock revenue opportunities, eliminate inefficiencies, and transform data into actionable insights. Every successful implementation drives our commitment to excellence.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                How Our AI Drives Results
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our AI solutions are engineered to analyze, adapt, and execute—whether automating sales processes, optimizing marketing spend, or delivering personalized customer experiences at scale. The outcome: increased profitability, enhanced team productivity, and sustainable competitive advantage.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Our Commitment
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Success extends beyond technology—it's about empowering the people behind every business. We're dedicated to making revenue growth systematic, intelligent, and sustainable for organizations ready to embrace the future.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-muted-foreground mb-8">
            Join us at Detool.AI and discover how intelligent automation can transform your business operations.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Learn More About Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;