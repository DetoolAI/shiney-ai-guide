import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, AlertCircle, XCircle, Clock } from "lucide-react";

const Status = () => {
  const services = [
    {
      name: "AI Booking Assistant",
      status: "operational",
      uptime: "99.9%",
      description: "Core AI service for customer interactions"
    },
    {
      name: "SMS Integration",
      status: "operational", 
      uptime: "99.8%",
      description: "SMS messaging and notifications"
    },
    {
      name: "Instagram Integration",
      status: "operational",
      uptime: "99.7%",
      description: "Instagram DM automation"
    },
    {
      name: "Facebook Messenger",
      status: "operational",
      uptime: "99.6%",
      description: "Facebook messaging integration"
    },
    {
      name: "Calendar Sync",
      status: "maintenance",
      uptime: "95.2%",
      description: "Appointment scheduling and availability"
    },
    {
      name: "Analytics Dashboard",
      status: "operational",
      uptime: "99.5%",
      description: "Business insights and reporting"
    }
  ];

  const incidents = [
    {
      date: "Jan 15, 2024",
      title: "Scheduled Maintenance - Calendar Sync",
      status: "scheduled",
      description: "Planned maintenance to improve calendar synchronization performance. Expected downtime: 2 hours."
    },
    {
      date: "Jan 10, 2024",
      title: "Instagram API Rate Limit Issues",
      status: "resolved",
      description: "Temporary delays in Instagram message processing due to API rate limits. Resolved by implementing intelligent queuing."
    },
    {
      date: "Jan 5, 2024",
      title: "SMS Delivery Delays",
      status: "resolved", 
      description: "Brief delays in SMS delivery due to carrier network congestion. All messages delivered within 30 minutes."
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "operational":
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case "maintenance":
        return <AlertCircle className="h-5 w-5 text-yellow-500" />;
      case "degraded":
        return <AlertCircle className="h-5 w-5 text-orange-500" />;
      case "outage":
        return <XCircle className="h-5 w-5 text-red-500" />;
      default:
        return <Clock className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, "default" | "destructive" | "secondary"> = {
      operational: "default",
      maintenance: "secondary",
      degraded: "destructive",
      outage: "destructive",
      resolved: "default",
      scheduled: "secondary"
    };
    
    return (
      <Badge variant={variants[status] || "secondary"} className="capitalize">
        {status}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              System <span className="text-primary">Status</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-time status and uptime monitoring for all Detool.AI services
            </p>
          </div>

          {/* Overall Status */}
          <Card className="bg-card/50 backdrop-blur-sm border-border mb-8">
            <CardContent className="p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="h-8 w-8 text-green-500" />
                <h2 className="text-2xl font-bold text-foreground">All Systems Operational</h2>
              </div>
              <p className="text-muted-foreground">
                All core services are running smoothly with normal response times.
              </p>
            </CardContent>
          </Card>

          {/* Service Status */}
          <Card className="bg-card/50 backdrop-blur-sm border-border mb-8">
            <CardHeader>
              <CardTitle>Service Status</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                    <div className="flex items-center gap-4">
                      {getStatusIcon(service.status)}
                      <div>
                        <h3 className="font-semibold text-foreground">{service.name}</h3>
                        <p className="text-sm text-muted-foreground">{service.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      {getStatusBadge(service.status)}
                      <p className="text-sm text-muted-foreground mt-1">{service.uptime} uptime</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Incidents */}
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardHeader>
              <CardTitle>Recent Incidents & Maintenance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {incidents.map((incident, index) => (
                  <div key={index} className="border-l-4 border-primary/20 pl-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-foreground">{incident.title}</h3>
                      {getStatusBadge(incident.status)}
                    </div>
                    <p className="text-sm text-muted-foreground mb-1">{incident.date}</p>
                    <p className="text-muted-foreground">{incident.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="text-center mt-12">
            <Card className="bg-card/50 backdrop-blur-sm border-border max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Having Issues?</h3>
                <p className="text-muted-foreground mb-6">
                  If you're experiencing problems not listed here, please contact our support team.
                </p>
                <div className="space-y-2 text-foreground">
                  <p><strong>Support Email:</strong> support@detoolai.com</p>
                  <p><strong>Emergency Line:</strong> 347-938-5782</p>
                  <p><strong>Status Updates:</strong> @DetoolAI on Twitter</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Status;