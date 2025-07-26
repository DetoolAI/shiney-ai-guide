import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Instagram, Facebook, Smartphone, Mail, Globe } from "lucide-react";

const IntegrationsSection = () => {
  const integrations = [
    {
      icon: MessageSquare,
      title: "SMS Integration",
      description: "Send automated appointment confirmations, reminders, and follow-up messages directly via SMS. Keep customers informed with real-time updates."
    },
    {
      icon: Instagram,
      title: "Instagram Integration", 
      description: "Connect with customers through Instagram DMs. Automatically respond to service inquiries and convert social media engagement into bookings."
    },
    {
      icon: Facebook,
      title: "Facebook Messenger",
      description: "Seamlessly handle Facebook Messenger conversations. AI responds to questions about services, pricing, and availability 24/7."
    },
    {
      icon: Smartphone,
      title: "Multi-Channel Support",
      description: "Unified communication across all platforms. Manage SMS, Instagram, and Facebook conversations from one intelligent dashboard."
    },
    {
      icon: Mail,
      title: "Email Automation",
      description: "Automated email sequences for booking confirmations, service reminders, and customer follow-ups to maximize retention."
    },
    {
      icon: Globe,
      title: "Website Integration",
      description: "Embed AI chat widgets on your website for instant customer support and lead capture across all digital touchpoints."
    }
  ];

  return (
    <section id="integrations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Seamless</span> Integrations
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Connect with your customers wherever they are. Our AI works across SMS, Instagram, Facebook, and more to ensure you never miss a lead.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {integrations.map((integration, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <integration.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{integration.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{integration.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;