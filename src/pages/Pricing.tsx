import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Pricing = () => {
  const features = [
    "24/7 AI Booking Assistant",
    "Automated Appointment Reminders",
    "Instant Lead Follow-Up",
    "Premium Service Recommendations",
    "Multi-Channel Communication (SMS, Email, Web)",
    "No-Show Prevention System",
    "CRM Integration",
    "Real-time Analytics & Reporting",
    "Custom AI Training for Your Business",
    "White-label Solution Available",
    "Dedicated Account Manager",
    "Priority Technical Support"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Simple, <span className="text-primary">Negotiable</span> Pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe in transparent, flexible pricing that grows with your business. Every plan is customizable to fit your specific needs.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-primary"></div>
              
              <CardHeader className="text-center pb-8">
                <div className="flex items-center justify-center space-x-2 mb-4">
                  <Star className="h-6 w-6 text-primary fill-current" />
                  <CardTitle className="text-3xl text-foreground">Enterprise Solution</CardTitle>
                  <Star className="h-6 w-6 text-primary fill-current" />
                </div>
                <div className="text-5xl font-bold text-primary mb-2">
                  Negotiable
                </div>
                <p className="text-muted-foreground text-lg">
                  Custom pricing based on your business size and requirements
                </p>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                      <Zap className="h-5 w-5 text-accent mr-2" />
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                      <h4 className="font-semibold text-primary text-lg mb-3">Why Negotiable Pricing?</h4>
                      <ul className="space-y-2 text-foreground">
                        <li>• Every detailing business is unique</li>
                        <li>• Volume-based discounts available</li>
                        <li>• Pay only for features you need</li>
                        <li>• Flexible payment terms</li>
                        <li>• No long-term contracts required</li>
                      </ul>
                    </div>
                    
                    <div className="bg-accent/10 p-6 rounded-lg border border-accent/20">
                      <h4 className="font-semibold text-accent text-lg mb-3">Pricing Factors:</h4>
                      <ul className="space-y-2 text-foreground">
                        <li>• Number of locations</li>
                        <li>• Monthly appointment volume</li>
                        <li>• Integration complexity</li>
                        <li>• Custom feature requirements</li>
                        <li>• Training and support level</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-8 border-t border-border">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Discuss Your Custom Solution?
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Let's talk about your specific needs and create a pricing plan that makes sense for your business. 
                    Most clients see ROI within the first month.
                  </p>
                  
                  <div className="flex justify-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow"
                      asChild
                    >
                      <Link to="/contact">Schedule Pricing Call</Link>
                    </Button>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Free consultation • No obligation • Custom demo included
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* ROI Section */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Typical <span className="text-primary">ROI</span> Examples
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-accent mb-2">50%</div>
                  <div className="text-foreground font-medium mb-2">More Bookings</div>
                  <div className="text-sm text-muted-foreground">From 24/7 availability</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-primary mb-2">30%</div>
                  <div className="text-foreground font-medium mb-2">Higher Revenue</div>
                  <div className="text-sm text-muted-foreground">Through smart upselling</div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-destructive mb-2">50%</div>
                  <div className="text-foreground font-medium mb-2">Fewer No-Shows</div>
                  <div className="text-sm text-muted-foreground">With smart reminders</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Pricing;