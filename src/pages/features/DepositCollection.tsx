import FeaturePageLayout from "@/components/landing/FeaturePageLayout";
import DepositROICalculator from "@/components/landing/DepositROICalculator";

const benefits = [
  "Clients pay a deposit at the time of booking — no extra steps",
  "You choose the deposit amount (flat fee or % of service)",
  "No-shows drop dramatically when money is on the line",
  "Deposits apply to the final service price automatically",
  "Refund policies you set, not us",
  "Works with all major payment methods",
  "Automatic receipts sent to clients",
  "Full reporting on deposits collected",
];

const DepositCollection = () => (
  <FeaturePageLayout
    title="Automatic Deposit Collection"
    subtitle="Stop losing money to no-shows. Require a deposit at booking — clients who pay show up. It's that simple."
    demoLabel="Deposit Collection"
    benefits={benefits}
    testimonial={{
      quote: "The deposit system alone covers the entire cost of the platform. Everything else is pure profit.",
      author: "Detool.AI Client",
      biz: "Nail Salon Owner",
    }}
    ctaTitle="Ready to stop losing money to no-shows?"
  >
    <DepositROICalculator />
  </FeaturePageLayout>
);

export default DepositCollection;
