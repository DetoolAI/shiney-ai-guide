import { useRef } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Star } from "lucide-react";
import IPhoneMockup from "@/components/landing/IPhoneMockup";
import BookCallButton from "@/components/BookCallButton";
import ConnectingScrollLine from "@/components/landing/ConnectingScrollLine";

const features = [
  {
    num: "01",
    title: "Branded Detailing Website",
    subtitle: "Get a website that turns visitors into quote requests — with a contact form that works while you're on the job.",
    slug: "/features/booking-website",
    phoneDemo: "website" as const,
    bullets: [
      { heading: "Actually Get Found Online", body: "If someone Googles 'detailer near me' and can't find you — that's money left on the table." },
      { heading: "Showcase Your Best Work", body: "Your site shows your packages, before & after photos, and reviews so clients trust you before they call." },
      { heading: "Mobile Friendly", body: "Most customers search on their phone. Your site will look flawless on every device." },
      { heading: "Quote Form Built In", body: "Visitors request a quote 24/7. You follow up when you're done with the car." },
    ],
    flip: false,
  },
  {
    num: "02",
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
    phoneDemo: "review" as const,
  },
  {
    num: "03",
    title: "Missed Call Text Back",
    subtitle: "Everyone misses calls. Not everyone texts back. Be the detailer that does.",
    slug: "/features/missed-call-text-back",
    bullets: [
      { heading: "Stand Out From Your Competition", body: "While competitors go to voicemail, you text back in 10 seconds with your quote form link." },
      { heading: "No More Lost Leads", body: "Hands deep in a detail? We fire off a text and start the conversation for you." },
      { heading: "Show Clients You Care", body: "Your clients hate being ignored. A quick text shows you're on it." },
      { heading: "Be Available 24/7", body: "Missed a call after hours? We make sure every lead feels looked after." },
    ],
    flip: false,
    phoneDemo: "missed-call" as const,
  },
  {
    num: "04",
    title: "One-Click Marketing Campaigns",
    subtitle: "Referrals and repeat clients are the best. Let's get you both — in one click.",
    slug: "/features/marketing-campaigns",
    bullets: [
      { heading: "Done For You", body: "Pre-built detailing campaign templates. You press send — we handle the rest." },
      { heading: "Referral Campaigns", body: "Remind happy clients to tell their friends. Fill your calendar from word of mouth." },
      { heading: "Return Client Campaigns", body: "Bring back clients who haven't visited in 60+ days with one click." },
      { heading: "Fill Slow Weeks Fast", body: "Slow week? Blast a promo to your past customers and watch your schedule fill up." },
    ],
    flip: true,
    phoneDemo: "campaigns" as const,
  },
];

const WebsitePhoneDemo = () => (
  <div className="w-full h-full bg-[#faf8f5] overflow-y-auto">
    <div className="bg-detool-dark px-3 pt-6 pb-4 text-center">
      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 mx-auto mb-2 flex items-center justify-center">
        <span className="text-primary text-[8px] font-black">✦</span>
      </div>
      <p className="text-white font-black text-[11px] leading-tight">ProShine Detailing</p>
      <p className="text-white/50 text-[8px] mt-0.5">Mobile Auto Detailing · Ceramic Coating</p>
      <div className="flex justify-center gap-0.5 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-2 h-2 fill-primary text-primary" />
        ))}
        <span className="text-white/60 text-[7px] ml-1">4.9 · 127 reviews</span>
      </div>
    </div>
    <div className="px-3 py-3">
      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2">Services</p>
      {[
        { name: "Full Detail", price: "$199" },
        { name: "Interior + Exterior", price: "$149" },
        { name: "Ceramic Coating", price: "$599" },
      ].map((s) => (
        <div key={s.name} className="flex items-center justify-between bg-white border border-gray-100 rounded-lg px-2 py-1.5 mb-1.5 shadow-sm">
          <span className="text-[9px] font-semibold text-gray-800">{s.name}</span>
          <span className="text-[9px] font-bold text-primary">{s.price}</span>
        </div>
      ))}
    </div>
    <div className="px-3 pb-2">
      <p className="text-[8px] font-bold text-gray-400 uppercase tracking-wider mb-2">Our Work</p>
      <div className="grid grid-cols-3 gap-1">
        {["from-primary/60 to-primary/30", "from-pink-300/60 to-pink-100/60", "from-amber-300/60 to-amber-100/60"].map((g, i) => (
          <div key={i} className={`aspect-square rounded-md bg-gradient-to-br ${g}`} />
        ))}
      </div>
    </div>
    <div className="px-3 pb-4">
      <div className="bg-primary rounded-xl py-2 text-center">
        <p className="text-white text-[10px] font-black">Get A Free Quote</p>
      </div>
      <p className="text-center text-[7px] text-gray-400 mt-1.5">We respond within minutes · Mobile service available</p>
    </div>
  </div>
);

const ReviewPhoneDemo = () => (
  <div className="w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col items-center justify-center p-4">
    <div className="w-full bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/10">
      <p className="text-white font-black text-xs mb-2">HOW WAS YOUR VISIT?</p>
      <div className="flex justify-center gap-1 mb-3">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-primary text-lg">★</span>
        ))}
      </div>
      <div className="bg-primary rounded-xl py-2 text-white text-xs font-bold">Leave a Google Review</div>
    </div>
    <p className="text-white/50 text-[10px] mt-3">Sent automatically after every appointment</p>
  </div>
);

const MissedCallPhoneDemo = () => (
  <div className="w-full h-full bg-black p-3 pt-8 flex flex-col">
    <div className="bg-red-500/20 rounded-xl p-2 flex items-center gap-2 mb-3">
      <div className="w-7 h-7 rounded-full bg-gray-600 flex items-center justify-center text-white text-[10px] font-bold">?</div>
      <div className="flex-1">
        <p className="text-white text-[10px] font-semibold">New Client</p>
        <p className="text-red-400 text-[10px]">Missed call · 2s ago</p>
      </div>
    </div>
    <div className="space-y-2 flex-1">
      <div className="bg-primary rounded-2xl rounded-tl-sm p-2 mr-8">
        <p className="text-white text-[10px] leading-relaxed">Hey! Sorry we missed your call — book here: your-salon.detool.ai 💅</p>
      </div>
      <div className="bg-gray-700 rounded-2xl rounded-tr-sm p-2 ml-8">
        <p className="text-white text-[10px]">Perfect! Booking now</p>
      </div>
    </div>
  </div>
);

const CampaignPhoneDemo = () => (
  <div className="w-full h-full bg-gray-950 p-3 pt-8 flex flex-col">
    <p className="text-white/60 text-[10px] font-bold uppercase tracking-wider mb-2">Campaigns</p>
    {["Slow Day Special ✨", "Refer a Friend 🤝", "We Miss You 💅"].map((c, i) => (
      <div key={i} className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-2 py-2 mb-2">
        <div className={`w-3 h-3 rounded-full border-2 ${i === 0 ? "border-primary bg-primary/30" : "border-gray-500"}`} />
        <span className="text-white text-[10px] font-medium">{c}</span>
      </div>
    ))}
    <div className="mt-auto bg-primary rounded-xl py-2.5 text-center text-white text-[10px] font-bold">
      Send To 248 Clients →
    </div>
  </div>
);

const phoneDemoMap = {
  website: <WebsitePhoneDemo />,
  review: <ReviewPhoneDemo />,
  "missed-call": <MissedCallPhoneDemo />,
  campaigns: <CampaignPhoneDemo />,
};

const HomeFeatureSections = () => {
  const anchor0 = useRef<HTMLDivElement>(null);
  const anchor1 = useRef<HTMLDivElement>(null);
  const anchor2 = useRef<HTMLDivElement>(null);
  const anchor3 = useRef<HTMLDivElement>(null);
  const anchors = [anchor0, anchor1, anchor2, anchor3];

  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto py-16 md:py-24 mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mb-6">The System</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.05] mb-6">
            Four parts.{" "}
            <span className="bg-primary/90 text-white px-2 md:px-3 box-decoration-clone">One system.</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
            Each piece feeds the next. The line shows you how it connects.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <ConnectingScrollLine anchorRefs={anchors}>
            {features.map((f, i) => (
              <div
                key={i}
                ref={anchors[i]}
                className={`relative flex flex-col ${f.flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-12 md:gap-16 py-16 md:py-24`}
              >
                <span
                  className="absolute -top-4 left-0 text-[7rem] md:text-[9rem] font-black text-gray-100 leading-none select-none pointer-events-none z-0"
                  aria-hidden
                >
                  {f.num}
                </span>

                <div className="w-full md:w-5/12 flex-shrink-0 relative z-10">
                  <IPhoneMockup label={f.phoneDemo === "website" ? "Branded booking site" : undefined}>
                    {phoneDemoMap[f.phoneDemo]}
                  </IPhoneMockup>
                </div>

                <div className="flex-1 relative z-10">
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
          </ConnectingScrollLine>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatureSections;
