import { Zap, MessageSquare, Calendar } from "lucide-react";

const OutcomeSection = () => {
  const outcomes = [
    {
      icon: Zap,
      headline: "Never Miss Another Lead",
      description: "Detool.AI responds to new leads instantly, ensuring every inquiry receives a fast, professional reply within seconds—not hours."
    },
    {
      icon: MessageSquare,
      headline: "Automatic Follow-Ups That Convert",
      description: "The system continues follow-ups via SMS and email until the lead responds or books an appointment. No more leads falling through the cracks."
    },
    {
      icon: Calendar,
      headline: "Appointments Booked Without Manual Work",
      description: "Detool.AI handles scheduling automatically so agents don't waste time chasing unresponsive prospects. Focus on closing, not chasing."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-16">
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <outcome.icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center md:text-left flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                    {outcome.headline}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {outcome.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutcomeSection;
