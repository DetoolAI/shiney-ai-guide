import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Clients log in to see their upcoming and past appointments",
  "Book, reschedule, or cancel from the portal",
  "View and redeem loyalty points",
  "Manage their membership subscription",
  "Update contact info and notification preferences",
  "View invoices and payment history",
  "No app to download — works in any browser",
  "Branded with your salon's colors and logo",
];

const MemberPortal = () => (
  <FeaturePageLayout
    title="Client Member Portal"
    subtitle="Give your clients a beautiful self-service portal where they can manage everything — appointments, memberships, loyalty points — all in one place."
    demoLabel="Member Portal"
    benefits={benefits}
    testimonial={{
      quote: "Incredibly professional website design! Look no further!",
      author: "Crème de la Crème N/LLC",
      biz: "Nail Salon",
    }}
    ctaTitle="Give your clients a premium experience"
  >
    <div className="grid md:grid-cols-3 gap-6">
      {["Upcoming & past appointments", "Loyalty points & rewards", "Membership management"].map((item, i) => (
        <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6 text-center">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
            <span className="text-primary font-black">{i + 1}</span>
          </div>
          <p className="font-semibold text-gray-900 text-sm">{item}</p>
        </div>
      ))}
    </div>
  </FeaturePageLayout>
);

export default MemberPortal;
