import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Send SMS or email campaigns to your entire client list in one click",
  "Pre-written beauty campaign templates included",
  "Segment clients by last visit, service type, or total spend",
  "Schedule campaigns in advance",
  "Track opens, clicks, and resulting bookings",
  "Re-engagement campaigns for clients who haven't been back in 60+ days",
  "Birthday campaigns with special offers",
  "Flash sale campaigns to fill slow days instantly",
];

const templates = [
  { title: "Slow Day Filler", desc: "\"Hey [Name], we have a few openings this week — book now and save your spot! [link]\"" },
  { title: "New Service Launch", desc: "\"We just added [service] and you're one of the first to know. Book a spot before they fill up: [link]\"" },
  { title: "Bring-a-Friend", desc: "\"Refer a friend this month and you both get 15% off your next visit. Share this link: [link]\"" },
  { title: "Lapsed Client Win-Back", desc: "\"We miss you [Name]! It's been a while — come back and get [offer]. Book here: [link]\"" },
];

const MarketingCampaigns = () => (
  <FeaturePageLayout
    title="One-Click Marketing Campaigns"
    subtitle="Fill slow weeks, launch new services, and re-engage old clients — all from a single button. No marketing degree required."
    demoLabel="Marketing Campaigns"
    benefits={benefits}
    testimonial={{
      quote: "My experience with this marketing agency was a 10/10, definitely recommend.",
      author: "Jayden Gutierrez",
      biz: "Business Owner",
    }}
    ctaTitle="Ready to fill your schedule on demand?"
  >
    <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">Campaign templates included</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {templates.map((t, i) => (
        <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6">
          <h3 className="font-bold text-gray-900 mb-2">{t.title}</h3>
          <p className="text-gray-500 text-sm italic leading-relaxed">{t.desc}</p>
        </div>
      ))}
    </div>
  </FeaturePageLayout>
);

export default MarketingCampaigns;
