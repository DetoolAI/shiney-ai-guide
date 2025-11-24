import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, DollarSign, Clock, TrendingDown, Calendar, MessageSquare } from "lucide-react";

const ProblemsSection = () => {
  const problems = [
    {
      title: "Missed or Delayed Bookings",
      icon: Calendar,
      problem: "Manual scheduling leads to missed calls, delays, and unbooked customers.",
      costs: [
        "Lost revenue from leads who book elsewhere",
        "Staff tied up answering phones or managing calendars"
      ],
      solution: "24/7 chatbot + calendar integration auto-books appointments instantly.",
      benefits: "AI handles inbound leads from website, Google, Instagram, and SMS. Reduces booking friction, captures sales day or night.",
      result: "30–50% increase in bookings just by being \"always on.\""
    },
    {
      title: "Slow Follow-Up on Inquiries",
      icon: MessageSquare,
      problem: "Leads drop off when not contacted within 5 minutes.",
      costs: [
        "Cold leads = lost sales. You already paid for that traffic or ad!",
        "Manual follow-up is inconsistent and time-consuming"
      ],
      solution: "AI responds instantly to web forms, social DMs, and SMS inquiries.",
      benefits: "Engages the lead, qualifies them, and guides to booking — no delay. Automates follow-up reminders if they don't convert right away.",
      result: "2x higher conversion rate from faster follow-up."
    },
    {
      title: "Low Sales of Premium Services",
      icon: TrendingDown,
      problem: "Staff don't consistently promote high-value services or upgrades. Customers often aren't aware of premium options or their benefits. There's no structured system to suggest enhancements before or after a purchase.",
      costs: [],
      solution: "AI Service Recommender suggests premium service options during online booking or via follow-up messages.",
      benefits: "Uses customer data (preferences, location, purchase history) to tailor upgrade suggestions. Continuously learns which offers and messages lead to more sales over time.",
      result: "15–30% increase in revenue per customer by automatically promoting relevant higher-ticket services."
    },
    {
      title: "No-Show Appointments",
      icon: AlertCircle,
      problem: "Clients forget or flake on appointments, costing labor and income. Manual reminder texts are unreliable and time-consuming. No frictionless way for clients to reschedule if needed.",
      costs: [],
      solution: "Automated SMS & Email Reminders confirm and remind clients days/hours before the appointment. Two-Way Smart Rescheduling allows clients to change appointments by replying with a number or keyword.",
      benefits: "Tracks no-show behavior and adjusts reminder timing accordingly.",
      result: "25–50% drop in no-shows, tighter schedules, and more consistent income."
    }
  ];

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Common Problems <span className="text-primary">Solved</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Every business faces these challenges. Here's how Detool.AI eliminates them with intelligent automation.
          </p>
        </div>

        <div className="grid gap-12">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-destructive/20 rounded-lg">
                        <problem.icon className="h-6 w-6 text-destructive" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">{problem.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <AlertCircle className="h-5 w-5 text-destructive mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-destructive mb-2">The Problem:</h4>
                          <p className="text-foreground">{problem.problem}</p>
                        </div>
                      </div>
                      
                      {problem.costs.length > 0 && (
                        <div className="flex items-start space-x-3">
                          <DollarSign className="h-5 w-5 text-automotive-red mt-1 flex-shrink-0" />
                          <div>
                            <h4 className="font-semibold text-automotive-red mb-2">Cost:</h4>
                            <ul className="space-y-1">
                              {problem.costs.map((cost, costIndex) => (
                                <li key={costIndex} className="text-foreground">• {cost}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-accent/20 rounded-lg mt-1">
                        <span className="text-accent font-bold text-sm">AI</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-accent mb-2">AI Solution:</h4>
                        <p className="text-foreground mb-4">{problem.solution}</p>
                        <p className="text-foreground">{problem.benefits}</p>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-accent/10 p-4 rounded-lg border border-accent/20">
                      <div className="flex items-center space-x-2 mb-2">
                        <TrendingDown className="h-5 w-5 text-accent" />
                        <span className="font-semibold text-accent">Result:</span>
                      </div>
                      <p className="text-foreground font-medium">{problem.result}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8 py-4 shadow-glow">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;