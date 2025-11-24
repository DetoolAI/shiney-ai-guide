import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageCircle, 
  Calendar, 
  Users, 
  BarChart3, 
  Globe, 
  HelpCircle,
  Database,
  Zap,
  Clock,
  Phone,
  Scaling,
  TrendingUp
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Automated Appointment Scheduling",
      description: "AI handles booking requests 24/7 with intelligent calendar integration"
    },
    {
      icon: Zap,
      title: "Instant Responses to Customers", 
      description: "Never miss a lead with immediate AI responses to inquiries"
    },
    {
      icon: Users,
      title: "Personalized Interactions",
      description: "AI adapts communication style based on customer preferences and history"
    },
    {
      icon: Calendar,
      title: "Availability Scan of Calendar",
      description: "Real-time calendar integration ensures accurate booking availability"
    },
    {
      icon: Globe,
      title: "Multi-lingual AI",
      description: "Serve customers in multiple languages automatically"
    },
    {
      icon: HelpCircle,
      title: "Managing Frequently Asked Questions (FAQs)",
      description: "AI handles common questions about services, pricing, and policies"
    },
    {
      icon: Database,
      title: "CRM System",
      description: "Built-in customer relationship management with detailed interaction history"
    },
    {
      icon: Zap,
      title: "Easily integrated to any CRM and Software",
      description: "Seamless integration with your existing tools and workflows"
    },
    {
      icon: Clock,
      title: "24-Hour Support",
      description: "Round-the-clock AI assistance for your customers and business"
    },
    {
      icon: Phone,
      title: "Call Routing and Transfers",
      description: "Smart call handling with automatic routing to appropriate team members"
    },
    {
      icon: Scaling,
      title: "Easily Scalable",
      description: "Grows with your business without additional staff overhead"
    },
    {
      icon: TrendingUp,
      title: "Analytics and Insights",
      description: "Detailed reporting on customer interactions, bookings, and revenue impact"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Key <span className="text-primary">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to automate your business and maximize revenue
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 hover:scale-105">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;