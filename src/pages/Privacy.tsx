import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Card, CardContent } from "@/components/ui/card";
import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title={"Privacy Policy — Detool.AI"} description={"How Detool.AI collects, uses, and protects your business and customer information."} path={"/privacy"} />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Privacy</span> Policy
            </h1>
            <p className="text-xl text-gray-500">
              Your privacy and data security are our top priorities
            </p>
          </div>

          <Card className="bg-white/50 backdrop-blur-sm border-gray-200">
            <CardContent className="p-8 space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Information We Collect</h2>
                <p className="text-gray-500 mb-4">
                  At Detool.AI, we collect information necessary to provide our AI-powered automation services for businesses:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Business information (company name, location, contact details, service offerings, pricing)</li>
                  <li>Customer data (names, phone numbers, email addresses, purchase history, preferences)</li>
                  <li>Communication data (SMS messages, phone calls, appointment requests, customer inquiries)</li>
                  <li>Customer information (relevant details for service delivery and customer management)</li>
                  <li>Appointment and scheduling data (dates, times, locations, service types, duration)</li>
                  <li>Payment and billing information for our automation services</li>
                  <li>Usage analytics and performance metrics to improve AI effectiveness</li>
                  <li>Marketing and promotional data for lead generation and customer acquisition</li>
                  <li>Location data for service area optimization and logistics</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">How We Use Your Data</h2>
                <p className="text-gray-500 mb-4">
                  We process collected information to:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Provide AI-powered customer service automation for businesses</li>
                  <li>Automate appointment scheduling, reminders, and follow-up communications</li>
                  <li>Train and improve our AI models for better customer interactions and industry-specific responses</li>
                  <li>Generate business analytics, performance insights, and operational reports</li>
                  <li>Process payments and manage service subscriptions</li>
                  <li>Provide technical support and system maintenance</li>
                  <li>Facilitate lead generation and customer acquisition for businesses</li>
                  <li>Optimize service delivery and operational efficiency</li>
                  <li>Comply with legal obligations and industry regulations</li>
                  <li>Protect against fraud, abuse, and security threats</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Security & Protection</h2>
                <p className="text-gray-500 mb-4">
                  We implement comprehensive security measures to protect your data:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>End-to-end encryption for all communications and data transmissions</li>
                  <li>SOC 2 compliant cloud infrastructure with regular third-party security audits</li>
                  <li>Multi-factor authentication and role-based access controls</li>
                  <li>Employee background checks and confidentiality agreements</li>
                  <li>Regular automated backups and disaster recovery procedures</li>
                  <li>GDPR, CCPA, and other applicable privacy law compliance</li>
                  <li>PCI DSS compliance for payment data processing</li>
                  <li>Regular penetration testing and vulnerability assessments</li>
                  <li>Data anonymization and pseudonymization where applicable</li>
                  <li>Incident response procedures and breach notification protocols</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Sharing and Disclosure</h2>
                <p className="text-gray-500 mb-4">
                  We may share your information in the following circumstances:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>With your explicit consent for specific integrations or services</li>
                  <li>With service providers who assist in delivering our AI automation services</li>
                  <li>When required by law, court order, or government regulation</li>
                  <li>To protect our rights, property, or safety, or that of our users</li>
                  <li>In connection with a merger, acquisition, or sale of assets (with prior notice)</li>
                  <li>For fraud prevention and security monitoring</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  We never sell personal data to third parties for marketing purposes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Third-Party Integrations</h2>
                <p className="text-gray-500 mb-4">
                  Our AI automation platform integrates with various services:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>SMS and communication providers (Twilio, etc.) for automated messaging</li>
                  <li>Social media platforms (Instagram, Facebook, Google) for customer outreach</li>
                  <li>Calendar and scheduling services for appointment management</li>
                  <li>Payment processors (Stripe, PayPal) for billing and subscriptions</li>
                  <li>CRM systems for customer relationship management</li>
                  <li>Analytics providers for performance tracking and optimization</li>
                  <li>Cloud storage services for data backup and accessibility</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  All integrations undergo security and privacy compliance review before implementation.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Data Retention</h2>
                <p className="text-gray-500 mb-4">
                  We retain data for the following periods:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Customer communication data: 7 years for business records compliance</li>
                  <li>Payment and billing information: As required by law and tax regulations</li>
                  <li>AI training data: Anonymized and retained indefinitely for model improvement</li>
                  <li>Account information: Until account deletion or 3 years of inactivity</li>
                  <li>Analytics data: Aggregated and anonymized for business intelligence</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Your Rights & Control</h2>
                <p className="text-gray-500 mb-4">
                  You have comprehensive rights regarding your data:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Right to access: Request copies of your personal data</li>
                  <li>Right to rectification: Correct inaccurate or incomplete information</li>
                  <li>Right to erasure: Delete your account and associated data</li>
                  <li>Right to restrict processing: Limit how we use your data</li>
                  <li>Right to data portability: Export your data in machine-readable format</li>
                  <li>Right to object: Opt-out of certain data processing activities</li>
                  <li>Right to withdraw consent: Revoke previously given permissions</li>
                  <li>Right to opt-out of AI training: Exclude your data from model training</li>
                  <li>Right to human review: Request human oversight of automated decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Artificial Intelligence and Automated Decision Making</h2>
                <p className="text-gray-500 mb-4">
                  Our AI systems may make automated decisions affecting your business operations:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Customer response generation and communication automation</li>
                  <li>Appointment scheduling and optimization</li>
                  <li>Lead qualification and customer segmentation</li>
                  <li>Pricing recommendations and service suggestions</li>
                </ul>
                <p className="text-gray-500 mt-4">
                  You have the right to request human review of any automated decision that significantly affects your business.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">International Data Transfers</h2>
                <p className="text-gray-500 mb-4">
                  Data may be transferred to and processed in countries other than your own. We ensure adequate protection through:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Standard Contractual Clauses (SCCs) for EU data transfers</li>
                  <li>Adequacy decisions where available</li>
                  <li>Additional safeguards for cross-border data protection</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Children's Privacy</h2>
                <p className="text-gray-500 mb-4">
                  Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If we become aware of such collection, we will delete the information immediately.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Changes to This Policy</h2>
                <p className="text-gray-500 mb-4">
                  We may update this privacy policy periodically. Significant changes will be communicated via:
                </p>
                <ul className="list-disc ml-6 text-gray-500 space-y-2">
                  <li>Email notification to all active users</li>
                  <li>Prominent notice on our platform</li>
                  <li>Updated "Last Modified" date below</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className="text-gray-500">
                  For privacy-related questions or requests, contact our Data Protection Officer at:
                </p>
                <p className="text-gray-900 font-medium mt-2">
                  Email: detoolai@gmail.com
                </p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-sm text-gray-500">
                  <strong>Last Updated:</strong> January 2025<br />
                  This privacy policy may be updated periodically. We will notify users of significant changes via email or platform notifications.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      
      <LandingFooter />
    </div>
  );
};

export default Privacy;