import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Functional Website",
    subtitle: "Get a website that turns visitors into leads that go directly to your phone.",
    bullets: [
      { heading: "Actually Get Found Online", body: "If a customer Googles your business and can't find you — that's embarrassing. We won't let that happen." },
      { heading: "Showcase Your Best Work", body: "Your website should show off what you've done. We build it so clients can see your work and trust you before they even call." },
      { heading: "Mobile Friendly", body: "87% of people visit websites on their phone. We'll make sure your business looks good on every device." },
      { heading: "Optimized For Local Google Searches", body: "This should go without saying — but we'll still say it. We make sure your business shows up when people search for what you do." },
    ],
    visual: (
      <div className="relative">
        <div className="bg-gray-900 rounded-2xl p-3 shadow-2xl">
          <div className="bg-gray-800 rounded-lg p-1 mb-2 flex items-center gap-2">
            <div className="flex gap-1"><div className="w-2 h-2 rounded-full bg-red-500"/><div className="w-2 h-2 rounded-full bg-yellow-500"/><div className="w-2 h-2 rounded-full bg-green-500"/></div>
            <div className="flex-1 bg-gray-700 rounded px-2 py-0.5 text-xs text-gray-400">detool.ai</div>
          </div>
          <div className="bg-white rounded-lg p-4 space-y-2">
            <div className="h-4 bg-primary/20 rounded w-3/4"/>
            <div className="h-3 bg-gray-200 rounded w-full"/>
            <div className="h-3 bg-gray-200 rounded w-5/6"/>
            <div className="mt-3 bg-primary rounded-lg p-2 text-center text-white text-xs font-bold">GET A FREE QUOTE</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div className="h-6 bg-gray-100 rounded border border-gray-200"/>
              <div className="h-6 bg-gray-100 rounded border border-gray-200"/>
            </div>
            <div className="h-12 bg-gray-100 rounded border border-gray-200"/>
            <div className="bg-primary rounded p-1.5 text-center text-white text-xs font-bold">SEND</div>
          </div>
        </div>
      </div>
    ),
    flip: false,
  },
  {
    title: "5-Star Review System",
    subtitle: "\"Sure I'll leave you a review\" — but the truth is, people forget. We remind them until they remember.",
    bullets: [
      { heading: "5-Star Reviews Only", body: "You can't make everyone happy — but our system makes sure the people who ARE happy actually leave a review." },
      { heading: "Automatic Follow-Up Reminders", body: "People say they'll review you and then forget. We send gentle reminders until they do." },
      { heading: "Ask For Reviews In One Click", body: "As promised, we keep it simple. If you're confused, we've failed." },
      { heading: "Stop Worrying About Bad Reviews", body: "We guide your happy customers straight to Google so the good reviews drown out the bad ones." },
    ],
    visual: (
      <div className="relative flex justify-center">
        <div className="relative">
          <div className="w-48 h-80 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden flex flex-col items-center justify-center p-4">
            <div className="w-full bg-gray-800 rounded-xl p-3 text-center">
              <p className="text-white font-black text-xs mb-1">REVIEW US ON GOOGLE</p>
              <div className="flex justify-center gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => <span key={i} className="text-primary text-sm">★</span>)}
              </div>
              <div className="bg-primary rounded-lg p-1.5 text-white text-xs font-bold">LEAVE A REVIEW</div>
            </div>
          </div>
          {/* Notch */}
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-900 rounded-full"/>
        </div>
      </div>
    ),
    flip: true,
  },
  {
    title: "Missed Call Text Back",
    subtitle: "Everyone misses calls. But not everyone texts back. Be the one who does.",
    bullets: [
      { heading: "Stand Out From Your Competition", body: "Everyone misses calls. Not everyone texts back automatically. Be the one who does — and get the job." },
      { heading: "No More Lost Leads", body: "On a job and can't answer? No problem. We fire off a text and start the conversation for you." },
      { heading: "Show Customers You Care", body: "Your customers don't like being ignored. At least send a text so they know you saw their call." },
      { heading: "Be Available 24/7", body: "Missed a call at midnight? No worries. We make sure everyone feels looked after even while you sleep." },
    ],
    visual: (
      <div className="relative flex justify-center">
        <div className="relative">
          <div className="w-48 h-80 bg-gray-900 rounded-[2.5rem] border-4 border-gray-800 shadow-2xl overflow-hidden">
            <div className="bg-red-500/20 p-3 mt-6 mx-2 rounded-xl flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center text-white text-xs font-bold">?</div>
              <div>
                <p className="text-white text-xs font-semibold">Unknown</p>
                <p className="text-red-400 text-xs">Missed call</p>
              </div>
              <div className="ml-auto"><span className="text-red-400 text-lg">✕</span></div>
            </div>
            <div className="p-3 mt-2 space-y-2">
              <div className="bg-primary/90 rounded-2xl rounded-tl-sm p-2">
                <p className="text-white text-xs">Hey! Sorry I missed your call. How can I help? 😊</p>
              </div>
              <div className="bg-gray-700 rounded-2xl rounded-tr-sm p-2 ml-6">
                <p className="text-white text-xs">I need a quote for my project</p>
              </div>
            </div>
          </div>
          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-3 bg-gray-900 rounded-full"/>
        </div>
      </div>
    ),
    flip: false,
  },
  {
    title: "One-Click Marketing Campaigns",
    subtitle: "Want to send a promo or referral offer to your whole client list? One. Click.",
    bullets: [
      { heading: "Done For You", body: "We set it all up. You just press send when you're ready to run a campaign." },
      { heading: "Referral Campaigns", body: "Your happy customers are your best salespeople. We make it dead simple for them to refer you." },
      { heading: "Return Customer Campaigns", body: "Past clients are easier to win back than new ones. We stay in touch with them for you." },
      { heading: "Marketing At Your Fingertips", body: "No agency fees. No complicated tools. Just you and a button." },
    ],
    visual: (
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Send Campaign</p>
        <div className="space-y-2 mb-4">
          {["Holiday Special 🎄", "Referral Offer 🤝", "Seasonal Promo ☀️"].map((c, i) => (
            <div key={i} className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg px-3 py-2">
              <div className="w-3 h-3 rounded-full border-2 border-primary"/>
              <span className="text-sm text-gray-700 font-medium">{c}</span>
            </div>
          ))}
        </div>
        <div className="bg-primary text-white text-center rounded-lg py-3 font-bold text-sm cursor-pointer hover:bg-primary/90 transition-colors">
          Send To All Clients →
        </div>
        <p className="text-xs text-gray-400 text-center mt-2">152 contacts · Sent instantly</p>
      </div>
    ),
    flip: true,
  },
  {
    title: "AI Chatbot",
    subtitle: "A chatbot that actually knows your business — not some generic bot that says 'how can I help you today?'",
    bullets: [
      { heading: "Trained On Your Business", body: "We set it up with your services, pricing, hours, and FAQs. It answers like you would." },
      { heading: "Captures Leads While You Sleep", body: "Someone visits at 2am with questions — the chatbot gets their info and you wake up to a new lead." },
      { heading: "Qualifies Before It Reaches You", body: "Not every inquiry is worth your time. The chatbot filters the serious ones." },
      { heading: "Live On Your Website 24/7", body: "Always on, never sick, never in a bad mood." },
    ],
    visual: (
      <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
        <div className="bg-primary px-4 py-3 flex items-center gap-2">
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center text-white text-xs font-bold">AI</div>
          <div>
            <p className="text-white font-semibold text-sm">Detool.AI Assistant</p>
            <p className="text-white/70 text-xs">Online — replies instantly</p>
          </div>
        </div>
        <div className="p-4 space-y-3 bg-gray-50">
          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-xs">
            <p className="text-sm text-gray-700">Hey! 👋 What can I help you with today?</p>
          </div>
          <div className="bg-primary rounded-2xl rounded-tr-sm p-3 ml-8">
            <p className="text-sm text-white">How much does a website cost?</p>
          </div>
          <div className="bg-white rounded-2xl rounded-tl-sm p-3 shadow-sm max-w-xs">
            <p className="text-sm text-gray-700">Our websites start at $297/mo. Want me to book you a free call?</p>
          </div>
        </div>
        <div className="border-t border-gray-200 px-4 py-3 flex gap-2 bg-white">
          <div className="flex-1 bg-gray-100 rounded-lg px-3 py-2 text-sm text-gray-400">Type a message...</div>
          <button className="bg-primary text-white px-3 py-2 rounded-lg text-xs font-bold">Send</button>
        </div>
      </div>
    ),
    flip: false,
  },
];

const FeatureSections = () => {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center py-16 border-b border-gray-100 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2">Simple systems that actually work</h2>
          <p className="text-2xl md:text-3xl font-black text-gray-900">No degrees required, just a business to run</p>
        </div>

        <div className="max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div key={i} className={`flex flex-col ${f.flip ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-16 py-20 border-b border-gray-100 last:border-0`}>
              {/* Visual */}
              <div className="w-full md:w-5/12 flex-shrink-0">
                {f.visual}
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-4xl font-black text-gray-900 mb-3">{f.title}</h3>
                <p className="text-lg italic text-gray-500 mb-8 leading-relaxed">"{f.subtitle}"</p>
                <div className="space-y-6">
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
                <div className="mt-8">
                  <Link
                    to="/contact"
                    className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors shadow-md"
                  >
                    Book A Free Call
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

export default FeatureSections;
