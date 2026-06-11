import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Clients earn points on every visit automatically",
  "Redeem points for discounts, free services, or products",
  "Clients can check their points balance any time",
  "Points expiry settings to encourage regular visits",
  "Birthday bonus points to surprise clients",
  "Double points events to drive traffic on slow days",
  "Referral bonuses — reward clients who bring friends",
  "Full loyalty dashboard with engagement tracking",
];

const LoyaltyRewards = () => (
  <FeaturePageLayout
    title="Loyalty Rewards Program"
    subtitle="Keep your best clients coming back. A loyalty program that runs automatically — no punch cards, no spreadsheets."
    demoLabel="Loyalty Rewards"
    benefits={benefits}
    testimonial={{
      quote: "Communication was great. Would work together again.",
      author: "Spencer Shadrach",
      biz: "Service Business",
    }}
    ctaTitle="Ready to reward your best clients?"
  >
    <div className="bg-detool-cream border border-gray-200 rounded-2xl p-8">
      <h2 className="text-xl font-bold text-gray-900 mb-4">How it works for your clients</h2>
      <div className="space-y-3 text-gray-600 text-sm leading-relaxed">
        <p>1. Client books and visits — they automatically earn points.</p>
        <p>2. They get a text: "You earned 50 points on today's visit! You now have 250 points."</p>
        <p>3. When they hit a threshold, they get a text with their reward and a booking link.</p>
        <p>4. They redeem at their next visit. No app needed — it all happens via text.</p>
      </div>
    </div>
  </FeaturePageLayout>
);

export default LoyaltyRewards;
