import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Star, Zap, Crown } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "$297",
      period: "/month",
      description: "Perfect for small detailing businesses",
      icon: Star,
      popular: false,
      features: [
        "AI customer service bot",
        "SMS integration",
        "Basic booking management",
        "Up to 500 conversations/month",
        "Email support",
        "Standard response speed",
        "Basic analytics dashboard"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "outline" as const
    },
    {
      name: "Professional", 
      price: "$497",
      period: "/month",
      description: "Most popular for growing businesses",
      icon: Zap,
      popular: true,
      features: [
        "Everything in Starter",
        "Instagram & Facebook integration",
        "Advanced booking management",
        "Unlimited conversations",
        "Priority phone & email support",
        "Fast response speed (2x faster)",
        "Advanced analytics & reporting",
        "Custom AI personality training",
        "Multi-location support"
      ],
      buttonText: "Start Free Trial",
      buttonVariant: "default" as const
    },
    {
      name: "Enterprise",
      price: "$897",
      period: "/month", 
      description: "For large operations & franchises",
      icon: Crown,
      popular: false,
      features: [
        "Everything in Professional",
        "White-label solution",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support",
        "Instant response speed",
        "Custom reporting",
        "API access",
        "Advanced security features",
        "Training for your team"
      ],
      buttonText: "Contact Sales",
      buttonVariant: "outline" as const
    }
  ];

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
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Choose the perfect plan for your car detailing business. All plans include our AI bot, integrations, and support.
            </p>
            
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-4 max-w-2xl mx-auto">
              <p className="text-primary font-semibold">
                🎉 Limited Time: Get 2 months FREE when you pay annually
              </p>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card/50 backdrop-blur-sm border-border shadow-card ${
                  plan.popular ? 'border-primary shadow-glow scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-primary text-white px-6 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4">
                    <plan.icon className={`h-12 w-12 ${plan.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                  </div>
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <p className="text-muted-foreground mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    asChild
                    variant={plan.buttonVariant}
                    size="lg" 
                    className={`w-full ${plan.popular ? 'bg-gradient-primary hover:opacity-90 shadow-glow' : ''}`}
                  >
                    <Link to="/contact">{plan.buttonText}</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
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
                  Ready to transform your business? Start with a risk-free trial.
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow"
                  asChild
                >
                  <Link to="/contact">Get Started Today</Link>
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