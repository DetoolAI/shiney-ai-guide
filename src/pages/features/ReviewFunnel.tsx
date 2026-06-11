import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Automatic text sent after every appointment",
  "Happy clients are directed to Google with one tap",
  "Unhappy clients reach you privately — before they post publicly",
  "Timing is optimized for when clients are most likely to review",
  "Custom message in your brand's voice",
  "Works with your existing appointment system",
  "Tracks review count and average rating over time",
  "More 5-star reviews = higher Google ranking = more new clients",
];

const ReviewFunnel = () => (
  <FeaturePageLayout
    title="5 Star Review Funnel"
    subtitle="Build your Google reputation on autopilot. Happy clients get one-tap access to leave a review. Complaints come to you first — not the internet."
    demoLabel="5 Star Review Funnel"
    benefits={benefits}
    testimonial={{
      quote: "Detool AI is the real deal. Smart strategies, fast results, and clear communication.",
      author: "Leah M",
      biz: "Local Business",
    }}
    ctaTitle="Ready to build your 5-star reputation?"
  >
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-detool-cream border border-gray-200 rounded-2xl p-6">
        <p className="font-bold text-gray-900 mb-2">For happy clients:</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">"Thank you so much for visiting [Salon Name]! We'd love your review — it means the world to us. Leave us a 5-star review here: [link]"</p>
        <p className="text-xs text-gray-400">→ One tap takes them directly to your Google listing</p>
      </div>
      <div className="bg-detool-cream border border-gray-200 rounded-2xl p-6">
        <p className="font-bold text-gray-900 mb-2">If something went wrong:</p>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">"Hi [Name], how was your recent visit? If anything wasn't perfect, we'd love to hear from you and make it right."</p>
        <p className="text-xs text-gray-400">→ Replies come directly to you — not Google, not Yelp</p>
      </div>
    </div>
  </FeaturePageLayout>
);

export default ReviewFunnel;
