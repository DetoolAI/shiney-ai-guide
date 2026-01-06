import { MessageSquare, Zap, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: MessageSquare,
      step: "Step 1",
      title: "Lead Comes In",
      description: "A new lead submits an inquiry from your website, ads, or listing platform."
    },
    {
      icon: Zap,
      step: "Step 2",
      title: "AI Responds and Follows Up",
      description: "Detool.AI instantly responds via SMS and email, then continues automated follow-ups until the lead engages."
    },
    {
      icon: Calendar,
      step: "Step 3",
      title: "Appointment Gets Booked",
      description: "Once qualified, the system automatically schedules the appointment directly to your calendar."
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            How Detool.AI Works
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((item, index) => (
              <div key={index} className="relative">
                {/* Connector line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                )}
                
                <div className="bg-card rounded-xl border border-border p-6 relative z-10">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider text-center mb-2">
                    {item.step}
                  </p>
                  
                  <h3 className="text-lg font-bold text-foreground text-center mb-3">
                    {item.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-center text-sm">
                    {item.description}
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

export default HowItWorksSection;
