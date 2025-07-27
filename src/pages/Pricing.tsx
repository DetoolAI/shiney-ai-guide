
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const guarantees = [
    "30-day money-back guarantee",
    "ROI guarantee within 60 days",
    "Free migration from existing systems",
    "No setup fees or hidden costs",
    "Cancel anytime, no contracts"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Flexible <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              We believe every car detailing business is unique. That's why we work with you to create a pricing plan that fits your specific needs and budget.
            </p>
          </div>

          {/* Pricing Message */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl font-bold text-foreground mb-6">
                  All Pricing is <span className="text-primary">Negotiable</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                  We understand that every business has different requirements, scale, and budget constraints. 
                  Instead of rigid pricing tiers, we prefer to have a conversation about your specific needs 
                  and create a custom solution that works for you.
                </p>
                
                <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-primary mb-4">What we'll discuss:</h3>
                  <ul className="text-left space-y-2 max-w-md mx-auto">
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Your current business size and goals</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Required features and integrations</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Expected usage and volume</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-accent flex-shrink-0" />
                      <span>Budget considerations</span>
                    </li>
                  </ul>
                </div>

                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow"
                  asChild
                >
                  <Link to="/contact">Let's Discuss Your Pricing</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Free consultation • No obligations • Custom quotes within 24 hours
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Guarantees */}
          <Card className="bg-card/50 backdrop-blur-sm border-border max-w-4xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8">
                Our <span className="text-primary">Guarantee</span> to You
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{guarantee}</span>
                  </div>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <p className="text-muted-foreground mb-6">
                  Ready to transform your business? Start with a risk-free consultation.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow"
                  asChild
                >
                  <Link to="/contact">Get Your Custom Quote</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-4">
                  Free consultation • No credit card required • Setup in 3-7 days
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;
