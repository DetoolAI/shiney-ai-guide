import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const Hero = () => {
  const features = [
    "24/7 AI Booking Assistant",
    "Smart Appointment Reminders", 
    "Instant Lead Follow-Up",
    "Premium Service Recommendations",
    "Multi-Channel Communication",
    "No-Show Prevention System"
  ];

  const comparison = [
    { feature: "24/7 Availability", detool: true, manual: false },
    { feature: "Instant Response Time", detool: true, manual: false },
    { feature: "Automated Booking", detool: true, manual: false },
    { feature: "Smart Upselling", detool: true, manual: false },
    { feature: "Cost Effective", detool: true, manual: false },
    { feature: "Never Misses a Lead", detool: true, manual: false }
  ];

  return (
    <section className="pt-24 pb-16 bg-gradient-hero min-h-screen flex items-center">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            DON'T <span className="text-primary">LOSE</span> YOUR LEADS
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            The AI-powered sales automation platform built specifically for car detailing businesses. 
            Capture more leads, book more appointments, and boost revenue with intelligent automation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4">
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center space-x-3 bg-card/50 backdrop-blur-sm p-4 rounded-lg border border-border">
              <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="text-foreground">{feature}</span>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">
            <span className="text-primary">300%</span> More Efficient Than Manual Processes
          </h2>
          
          <div className="bg-card/50 backdrop-blur-sm rounded-lg border border-border overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-6 border-b border-border bg-muted/20">
              <div></div>
              <div className="text-center">
                <h3 className="font-bold text-primary text-lg">Detool.AI</h3>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-muted-foreground text-lg">Manual Process</h3>
              </div>
            </div>
            
            {comparison.map((item, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 p-4 border-b border-border last:border-b-0">
                <div className="font-medium text-foreground">{item.feature}</div>
                <div className="flex justify-center">
                  {item.detool ? (
                    <CheckCircle className="h-6 w-6 text-accent" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive" />
                  )}
                </div>
                <div className="flex justify-center">
                  {item.manual ? (
                    <CheckCircle className="h-6 w-6 text-accent" />
                  ) : (
                    <XCircle className="h-6 w-6 text-destructive" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;