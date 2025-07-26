import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

const CTASection = () => {
  const benefits = [
    "Get your first AI bot instantly",
    "Setup completed in under 7 days",
    "ROI guaranteed within 30 days",
    "24/7 customer support included",
    "Risk-free money-back guarantee"
  ];

  return (
    <section className="py-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card max-w-4xl mx-auto">
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to <span className="text-primary">Transform</span> Your Business?
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of car detailing businesses already using Detool.AI to automate their operations, 
              increase bookings, and boost revenue.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 text-left">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="space-y-6">
                <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                  <div className="text-3xl font-bold text-primary mb-2">300%</div>
                  <div className="text-foreground">More efficient than hiring staff</div>
                </div>
                
                <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                  <div className="text-3xl font-bold text-accent mb-2">50%</div>
                  <div className="text-foreground">Average increase in bookings</div>
                </div>
              </div>
            </div>


            <p className="text-sm text-muted-foreground mt-6">
              No credit card required • Setup in minutes • Full support included
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTASection;