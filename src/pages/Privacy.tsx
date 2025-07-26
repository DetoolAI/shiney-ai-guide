import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Privacy</span> Policy
            </h1>
            <p className="text-xl text-muted-foreground">
              Your privacy and data security are our top priorities
            </p>
          </div>

          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  At Detool.AI, we collect information necessary to provide our AI-powered booking and customer management services:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Business information (company name, contact details, service offerings)</li>
                  <li>Customer interaction data (messages, booking requests, appointment details)</li>
                  <li>Usage analytics to improve our AI performance</li>
                  <li>Payment and billing information for subscription management</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Data</h2>
                <p className="text-muted-foreground mb-4">
                  We use collected information to:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Provide AI-powered customer service and booking automation</li>
                  <li>Train and improve our AI models for better customer interactions</li>
                  <li>Generate analytics and insights for your business growth</li>
                  <li>Process payments and manage your subscription</li>
                  <li>Provide customer support and technical assistance</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security & Protection</h2>
                <p className="text-muted-foreground mb-4">
                  We implement industry-standard security measures:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>End-to-end encryption for all customer communications</li>
                  <li>Secure cloud infrastructure with regular security audits</li>
                  <li>Limited access controls and employee background checks</li>
                  <li>Regular data backups and disaster recovery procedures</li>
                  <li>GDPR and CCPA compliance for international data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Integrations</h2>
                <p className="text-muted-foreground mb-4">
                  Our platform integrates with various services to enhance functionality:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>SMS providers for automated messaging (with appropriate consent)</li>
                  <li>Social media platforms (Instagram, Facebook) for customer communication</li>
                  <li>Calendar services for appointment scheduling</li>
                  <li>Payment processors for billing and subscriptions</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  All third-party integrations are vetted for security and privacy compliance.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights & Control</h2>
                <p className="text-muted-foreground mb-4">
                  You have complete control over your data:
                </p>
                <ul className="list-disc ml-6 text-muted-foreground space-y-2">
                  <li>Access and download your data at any time</li>
                  <li>Request corrections to inaccurate information</li>
                  <li>Delete your account and all associated data</li>
                  <li>Opt-out of data processing for AI training</li>
                  <li>Export customer data when switching services</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-muted-foreground">
                  For privacy-related questions or requests, contact our Data Protection Officer at:
                </p>
                <p className="text-foreground font-medium mt-2">
                  Email: privacy@detoolai.com<br />
                  Phone: 347-938-5782
                </p>
              </div>

              <div className="bg-muted/20 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> January 2024<br />
                  This privacy policy may be updated periodically. We will notify users of significant changes via email or platform notifications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;