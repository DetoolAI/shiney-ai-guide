import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import IPhoneMockup from "@/components/landing/IPhoneMockup";
import BookCallButton from "@/components/BookCallButton";

const features = [
  {
    title: "Branded Booking Website",
    subtitle: "Get a website that turns visitors into booked appointments — with deposits collected automatically.",
    slug: "/features/booking-website",
    videoSrc: "/videos/creme-de-la-creme-preview.mp4",
    videoLabel: "Live booking site demo",
    videoFit: "contain" as const,
    bullets: [
      { heading: "Actually Get Found Online", body: "If a client Googles your salon and can't find you — that's awkward. We won't let that happen." },
      { heading: "Showcase Your Best Work", body: "Your site shows your services, pricing, and reviews so clients trust you before they book." },
      { heading: "Mobile Friendly", body: "87% of beauty clients book on their phone. Your site will look flawless on every device." },
      { heading: "Deposits Built In", body: "Clients pay a deposit at booking. No-shows drop. Revenue goes up." },
    ],
    flip: false,
  },
  {
    title: "5 Star Magic Review Funnel",
    subtitle: "\"Sure I'll leave you a review\" — but people forget. We gently remind them until they do.",
    slug: "/features/review-funnel",
    bullets: [
      { heading: "5-Star Reviews Only", body: "Happy clients go straight to Google. Unhappy clients reach you first — not the internet." },
      { heading: "Automatic Follow-Up Reminders", body: "We send timed reminders so reviews actually get left." },
      { heading: "Ask For Reviews In One Click", body: "Simple for your clients. If they're confused, we've failed." },
      { heading: "Stop Worrying About Bad Reviews", body: "We guide the good experiences to Google and handle complaints privately." },
    ],
    flip: true,
    videoSrc: "/justin-intro.mp4",
    videoLabel: "Review funnel demo",
  },
  {
    title: "Missed Call Text Back",
    subtitle: "Everyone misses calls. Not everyone texts back. Be the salon that does.",
    slug: "/features/missed-call-text-back",
    bullets: [
      { heading: "Stand Out From Your Competition", body: "While competitors go to voicemail, you text back in 10 seconds with your booking link." },
      { heading: "No More Lost Leads", body: "On a client? No problem — we fire off a text and start the conversation for you." },
      { heading: "Show Clients You Care", body: "Your clients hate being ignored. A quick text shows you're on it." },
      { heading: "Be Available 24/7", body: "Missed a call after hours? We make sure every lead feels looked after." },
    ],
    flip: false,
    videoSrc: "/justin-intro.mp4",
    videoLabel: "Missed call text-back demo",
  },
  {
    title: "One-Click Marketing Campaigns",
    subtitle: "Referrals and repeat clients are the best. Let's get you both — in one click.",
    slug: "/features/marketing-campaigns",
    bullets: [
      { heading: "Done For You", body: "Pre-built beauty campaign templates. You press send — we handle the rest." },
      { heading: "Referral Campaigns", body: "Remind happy clients to tell their friends. Fill your calendar from word of mouth." },
      { heading: "Return Client Campaigns", body: "Bring back clients who haven't visited in 60+ days with one click." },
      { heading: "Fill Slow Days Fast", body: "Slow Tuesday? Blast a promo to your list and watch slots fill in hours." },
    ],
    flip: true,
    videoSrc: "/justin-intro.mp4",
    videoLabel: "Marketing campaigns demo",
  },
];

const HomeFeatureSections = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 border-b border-gray-100 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Simple systems that actually work</h2>
          <p className="text-xl md:text-2xl font-bold text-gray-500">No tech degree required — just a salon to run</p>
        </div>

        <div className="max-w-6xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className={`flex flex-col ${f.flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16 py-20 border-b border-gray-100 last:border-0`}
            >
              <div className="w-full md:w-5/12 flex-shrink-0">
                <IPhoneMockup
                  videoSrc={f.videoSrc}
                  label={f.videoLabel || (f.videoSrc ? "Live demo" : undefined)}
                  videoFit={"videoFit" in f ? f.videoFit : "cover"}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">{f.title}</h3>
                <p className="text-lg italic text-gray-500 mb-8 leading-relaxed">"{f.subtitle}"</p>
                <div className="space-y-5">
                  {f.bullets.map((b, bi) => (
                    <div key={bi}>
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                        <h4 className="font-bold text-primary text-base">{b.heading}</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed pl-7">{b.body}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-4">
                  <BookCallButton className="px-8 py-4 text-sm">See Short Demo</BookCallButton>
                  <Link to={f.slug} className="inline-flex items-center text-primary font-semibold hover:underline text-sm py-4">
                    Learn more →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSections;
