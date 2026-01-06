import { Star, Shield, TrendingUp } from "lucide-react";

const TrustSection = () => {
  const stats = [
    { number: "150+", label: "Agents & Teams Served" },
    { number: "50%", label: "Avg. Booking Increase" },
    { number: "24/7", label: "Automated Response" },
    { number: "< 3 Days", label: "Setup Time" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-12">
            Why Agents Trust Detool.AI
          </h2>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Trust statements */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
              <Shield className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">No Hiring Required</h3>
              <p className="text-sm text-muted-foreground">
                Get the response time of a full team without the overhead of additional staff.
              </p>
            </div>
            
            <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Results Guaranteed</h3>
              <p className="text-sm text-muted-foreground">
                Designed to increase response rates and booked appointments from day one.
              </p>
            </div>
            
            <div className="bg-card/50 p-6 rounded-xl border border-border text-center">
              <Star className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Trusted Nationwide</h3>
              <p className="text-sm text-muted-foreground">
                Used by real estate agents and sales teams across the United States.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
