import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code, Book, Zap, Globe, MessageSquare, Settings } from "lucide-react";

import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

const Documentation = () => {
  const apiEndpoints = [
    {
      method: "POST",
      endpoint: "/api/v1/booking",
      description: "Create a new booking",
      params: "customer_name, service_type, date_time, contact_info"
    },
    {
      method: "GET", 
      endpoint: "/api/v1/bookings",
      description: "Retrieve all bookings",
      params: "date_range, status, customer_id"
    },
    {
      method: "PUT",
      endpoint: "/api/v1/booking/{id}",
      description: "Update existing booking",
      params: "booking_id, updated_fields"
    },
    {
      method: "DELETE",
      endpoint: "/api/v1/booking/{id}",
      description: "Cancel a booking",
      params: "booking_id, cancellation_reason"
    }
  ];

  const integrationGuides = [
    {
      icon: MessageSquare,
      title: "SMS Integration",
      description: "Set up automated SMS notifications and two-way messaging",
      steps: ["Configure SMS provider", "Set up message templates", "Enable automation rules"]
    },
    {
      icon: Globe,
      title: "Website Widget",
      description: "Embed AI chat widget on your website",
      steps: ["Copy widget code", "Customize appearance", "Configure AI responses"]
    },
    {
      icon: Settings,
      title: "CRM Integration",
      description: "Connect with popular CRM systems",
      steps: ["API key setup", "Field mapping", "Sync configuration"]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO title={"Documentation — Detool.AI"} description={"Developer documentation and integration guides for Detool.AI booking and automation APIs."} path={"/documentation"} />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Documentation</span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Complete guides, API references, and integration instructions for Detool.AI
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="api-reference">API Reference</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="troubleshooting">Troubleshooting</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started" className="space-y-8">
              <Card className="bg-white/50 backdrop-blur-sm border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Book className="h-6 w-6 text-primary" />
                    Quick Start Guide
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">1. Account Setup</h3>
                    <p className="text-gray-500 mb-3">
                      Create your Detool.AI account and configure your business profile:
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Add your business information and service offerings</li>
                      <li>Set your operating hours and availability</li>
                      <li>Configure pricing for different services</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">2. AI Training</h3>
                    <p className="text-gray-500 mb-3">
                      Train your AI assistant to match your business style:
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Upload sample conversations and responses</li>
                      <li>Set your preferred communication tone</li>
                      <li>Define service packages and upselling strategies</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">3. Channel Setup</h3>
                    <p className="text-gray-500 mb-3">
                      Connect your communication channels:
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Link SMS provider for automated messaging</li>
                      <li>Connect Instagram and Facebook accounts</li>
                      <li>Embed website chat widget</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api-reference" className="space-y-8">
              <Card className="bg-white/50 backdrop-blur-sm border-gray-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="h-6 w-6 text-primary" />
                    API Endpoints
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {apiEndpoints.map((endpoint, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${
                            endpoint.method === 'POST' ? 'bg-green-500/20 text-green-400' :
                            endpoint.method === 'GET' ? 'bg-amber-500/20 text-amber-400' :
                            endpoint.method === 'PUT' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {endpoint.method}
                          </span>
                          <code className="text-gray-900 font-mono">{endpoint.endpoint}</code>
                        </div>
                        <p className="text-gray-500 mb-2">{endpoint.description}</p>
                        <p className="text-sm text-gray-500">
                          <strong>Parameters:</strong> {endpoint.params}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="integrations" className="space-y-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {integrationGuides.map((guide, index) => (
                  <Card key={index} className="bg-white/50 backdrop-blur-sm border-gray-200">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <guide.icon className="h-6 w-6 text-primary" />
                        {guide.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-500 mb-4">{guide.description}</p>
                      <ol className="list-decimal ml-4 text-gray-500 space-y-1">
                        {guide.steps.map((step, stepIndex) => (
                          <li key={stepIndex}>{step}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="troubleshooting" className="space-y-8">
              <Card className="bg-white/50 backdrop-blur-sm border-gray-200">
                <CardHeader>
                  <CardTitle>Common Issues & Solutions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">AI Not Responding to Messages</h3>
                    <p className="text-gray-500 mb-2">
                      Check your integration settings and ensure proper API connections.
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Verify webhook URLs are correctly configured</li>
                      <li>Check API key permissions and expiration</li>
                      <li>Review message format requirements</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">Booking Sync Issues</h3>
                    <p className="text-gray-500 mb-2">
                      Calendar integration problems and booking conflicts.
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Refresh calendar permissions</li>
                      <li>Check timezone settings</li>
                      <li>Verify availability rules</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">SMS Delivery Problems</h3>
                    <p className="text-gray-500 mb-2">
                      Messages not being delivered to customers.
                    </p>
                    <ul className="list-disc ml-6 text-gray-500 space-y-1">
                      <li>Verify phone number format</li>
                      <li>Check SMS provider status</li>
                      <li>Review message content for compliance</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="text-center mt-12">
            <Card className="bg-white/50 backdrop-blur-sm border-gray-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Need More Help?</h3>
                <p className="text-gray-500 mb-6">
                  Can't find what you're looking for? Our technical team is ready to assist.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-gradient-primary hover:opacity-90">
                    <Link to="/contact">Contact Support</Link>
                  </Button>
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

export default Documentation;