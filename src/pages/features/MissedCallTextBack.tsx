import FeaturePageLayout from "@/components/landing/FeaturePageLayout";

const benefits = [
  "Fires within 10 seconds of a missed call",
  "Custom message with your booking link",
  "Works 24/7 — even when you're with a client",
  "Works on your existing business phone number",
  "Client replies go straight to your inbox",
  "Never lose a lead to voicemail again",
  "Track how many leads you're recovering each week",
  "No app to download, no extra hardware",
];

const MissedCallTextBack = () => (
  <FeaturePageLayout
    title="Missed Call Text Back"
    subtitle="Someone calls. You're with a client. They hang up. Without this system — they're gone. With it — they get a text in 10 seconds and book online."
    demoLabel="Missed Call Text Back"
    benefits={benefits}
    testimonial={{
      quote: "Wonderful service and quite helpful I must say.",
      author: "Tito Greene",
      biz: "Business Owner",
    }}
    ctaTitle="Stop letting missed calls become lost clients"
  >
    <div className="bg-detool-cream border border-gray-200 rounded-2xl p-8 max-w-lg mx-auto">
      <p className="text-xs text-gray-400 font-medium mb-3 uppercase tracking-wide">Example text message</p>
      <div className="bg-white border border-gray-200 rounded-xl p-4 mb-3">
        <p className="text-gray-800 text-sm leading-relaxed">
          "Hey! Sorry we missed your call — we're with a client right now. Book your appointment here: [your-salon].detool.ai. We'd love to see you!"
        </p>
      </div>
      <p className="text-xs text-gray-400">Fires automatically within 10 seconds of any missed call</p>
    </div>
  </FeaturePageLayout>
);

export default MissedCallTextBack;
