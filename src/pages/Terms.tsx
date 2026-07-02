import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";
import { BUSINESS_EMAIL, BUSINESS_PHONE, BUSINESS_ADDRESS } from "@/lib/constants";

const Terms = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Terms of Service — Detool.AI"
        description="Terms and conditions for Detool.AI booking and automation services for local service businesses."
        path="/terms"
      />
      <Header />

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-black mb-4">
              Terms of <span className="text-primary">Service</span>
            </h1>
            <p className="text-xl text-gray-500">Last updated: June 2026</p>
          </div>

          <div className="prose prose-gray max-w-none space-y-8 text-gray-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement</h2>
              <p>
                By using Detool.AI services, you agree to these Terms of Service. Detool.AI provides
                booking websites, marketing automations, and related tools for local service businesses on a
                month-to-month subscription basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Services</h2>
              <p>
                We build and maintain your booking system, automations, and marketing tools as described
                on our website and during onboarding. Specific features included in your plan are listed
                on our Pricing page. We reserve the right to update features to improve the platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Billing & Cancellation</h2>
              <p>
                Subscription fees are billed monthly at $297/month unless otherwise agreed in writing.
                There are no long-term contracts. You may cancel at any time. Upon cancellation, access
                to platform features and managed services will end at the close of your billing period.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Your Responsibilities</h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate business information for setup</li>
                <li>Maintain compliance with SMS/email marketing laws (TCPA, CAN-SPAM)</li>
                <li>Use the platform in good faith and for lawful business purposes</li>
                <li>Keep login credentials secure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Limitation of Liability</h2>
              <p>
                Detool.AI is a tools and systems provider. We do not guarantee specific revenue,
                booking volume, or business outcomes. Our liability is limited to the amount paid for
                services in the preceding 30 days.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact</h2>
              <p>
                Questions about these terms? Email{" "}
                <a href={`mailto:${BUSINESS_EMAIL}`} className="text-primary hover:underline">
                  {BUSINESS_EMAIL}
                </a>
                {BUSINESS_PHONE && (
                  <>
                    {" "}
                    or call{" "}
                    <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="text-primary hover:underline">
                      {BUSINESS_PHONE}
                    </a>
                  </>
                )}
                .
              </p>
              {BUSINESS_ADDRESS && <p className="mt-2">{BUSINESS_ADDRESS}</p>}
            </section>
          </div>
        </div>
      </main>

      <LandingFooter />
    </div>
  );
};

export default Terms;
