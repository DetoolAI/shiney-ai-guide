import { MessageSquare, Mail, Voicemail } from "lucide-react";

const OutreachEngineSection = () => {
  const channels = [
    {
      icon: MessageSquare,
      title: "SMS",
      description: "Send personalized text messages that land directly in their pocket."
    },
    {
      icon: Mail,
      title: "Email",
      description: "Deliver high-converting, custom emails that bypass the spam folder."
    },
    {
      icon: Voicemail,
      title: "Voicemail",
      description: "Drop professional Ringless Voicemails directly into their inbox without their phone ever ringing."
    }
  ];

  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Launch Automated Outreach on Autopilot
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Once your leads are extracted, Detool.AI launches a multi-channel attack to get you noticed. No manual work required.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {channels.map((channel, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-6 text-center hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                  <channel.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {channel.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {channel.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutreachEngineSection;
