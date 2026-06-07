import { Zap, MessageSquare, Calendar } from "lucide-react";

const OutcomeSection = () => {
  const outcomes = [
    {
      icon: Zap,
      headline: "Someone texts you at 11pm. They get a reply in seconds.",
      description: "Not tomorrow. Not when you wake up. Instantly. Most leads go with whoever responds first — and now that's always you, even when you're off the clock."
    },
    {
      icon: MessageSquare,
      headline: "They didn't reply? The AI follows up. And again. And again.",
      description: "Most people give up after one follow-up. Detool.AI keeps going via SMS and email until they respond or book — without you lifting a finger or feeling annoying."
    },
    {
      icon: Calendar,
      headline: "They're ready to book. It's done before you knew they asked.",
      description: "The AI qualifies them, checks your calendar, and locks in the appointment automatically. You just show up to calls that are already confirmed."
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
