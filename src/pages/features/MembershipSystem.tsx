import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Create monthly or annual membership tiers",
  "Clients pay automatically — no manual invoicing",
  "Members get exclusive pricing, priority booking, and perks",
  "Automatic renewal reminders and failed payment recovery",
  "Cancel, pause, or upgrade memberships in one click",
  "Member-only booking windows so VIP clients always get a spot",
  "Track MRR (monthly recurring revenue) in your dashboard",
  "Works for solo artists and multi-staff salons",
];

const tiers = [
  { name: "Basic Member", price: "$49/mo", perks: "1 service per month + 10% off all additional services" },
  { name: "VIP Member", price: "$89/mo", perks: "2 services per month + 20% off + priority booking" },
  { name: "Platinum Member", price: "$149/mo", perks: "Unlimited services + 30% off + dedicated slot every 2 weeks" },
];

const MembershipSystem = () => (
  <FeaturePageLayout
    title="Recurring Membership System"
    subtitle="Turn one-time clients into monthly subscribers. Predictable revenue, full chairs, and clients who never go anywhere else."
    demoLabel="Membership System"
    benefits={benefits}
    testimonial={{
      quote: "I had a great experience with Detool AI. Professional, affordable, delivered on time.",
      author: "Vanessa Iheme",
      biz: "Beauty Business Owner",
    }}
    ctaTitle="Ready to build a membership program?"
  >
    <h2 className="text-xl font-bold text-gray-900 mb-2 text-center">Example Membership Tiers</h2>
    <p className="text-gray-500 text-center mb-8 text-sm">These are just examples — we build your tiers around your services and pricing.</p>
    <div className="grid md:grid-cols-3 gap-6">
      {tiers.map((t, i) => (
        <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6 text-center">
          <h3 className="font-bold text-gray-900 text-lg mb-1">{t.name}</h3>
          <p className="text-3xl font-black text-primary mb-3">{t.price}</p>
          <p className="text-gray-500 text-sm leading-relaxed">{t.perks}</p>
        </div>
      ))}
    </div>
  </FeaturePageLayout>
);

export default MembershipSystem;
