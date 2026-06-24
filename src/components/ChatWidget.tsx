import { BOOK_A_CALL_URL } from "@/lib/constants";
import { MessageCircle, X, Send, Bot, ChevronRight } from "lucide-react";

type Message = {
  from: "user" | "bot";
  text: string;
  suggestions?: string[];
};

// ─── Knowledge Base ───────────────────────────────────────────────────────────

const KNOWLEDGE: { patterns: RegExp; answer: string; suggestions?: string[] }[] = [
  // Greetings
  {
    patterns: /^(hi|hey|hello|sup|yo|good morning|good afternoon|good evening|howdy)/i,
    answer: "Hey! 👋 Welcome to Detool.AI. I'm here to help you learn everything about what we do. What would you like to know?",
    suggestions: ["What is Detool.AI?", "How much does it cost?", "How do I get started?"],
  },

  // What is Detool.AI
  {
    patterns: /what (is|are|does) detool|tell me about|what do you do|who are you|about detool/i,
    answer:
      "Detool.AI designs websites and runs marketing for local service businesses. We build and launch your full system — done for you.\n\n• 🌐 Custom booking website — professional, mobile-ready, live in 10 days\n• 🤖 AI chatbot on your site — answers questions and captures leads 24/7\n• 📞 Missed call text-back — never lose a lead to voicemail\n• ⭐ Automated review requests — more 5-star Google reviews on autopilot\n• 📣 One-click marketing campaigns — fill slow weeks fast\n• 🔍 On-site SEO + Google Business optimization\n\nWe specialize in nail salons — and also work with real estate, security, spas, and other local service businesses. Trusted by 150+ businesses across the US.",
    suggestions: ["Who is it for?", "How does setup work?", "What does it cost?"],
  },

  // Who is it for
  {
    patterns: /who is (it|this|detool) for|right for me|my business|qualify|do i qualify|does it work for/i,
    answer:
      "Detool.AI is built for local service businesses that book appointments or need more leads:\n\n✅ Nail salons, lash studios, spas, and beauty businesses\n✅ Real estate agents and property professionals\n✅ Security companies and home service businesses\n✅ Any local business tired of missed calls, no-shows, and slow weeks\n\nIf you need a professional website and marketing that actually runs — Detool.AI is for you.",
    suggestions: ["How does setup work?", "What's in the $297 plan?", "Book a meeting"],
  },

  // How it works / setup
  {
    patterns: /how does it work|how it works|explain|walk me through|setup process|how do i start|get started|onboard/i,
    answer:
      "Here's how we get you live in 10 days:\n\n1️⃣ Demo call — we learn your business and show you live examples\n2️⃣ We build — booking website, automations, deposits, review funnels, and campaigns\n3️⃣ Launch call — we walk you through everything and go live together\n\nWe handle all the technical work. No coding or tech skills needed on your end.",
    suggestions: ["What's in the $297 plan?", "Will the AI sound like me?", "Book a meeting"],
  },

  // Channels
  {
    patterns: /channel|sms|text|email|instagram|facebook|dm|social|platform|where/i,
    answer:
      "Detool.AI connects your business across:\n\n📱 SMS — missed call text-back and client follow-ups\n📧 Email — booking confirmations and marketing campaigns\n📸 Instagram & Facebook — respond to DMs and inquiries\n📞 Ringless Voicemail — available on advanced marketing plans\n\nEverything flows into one dashboard so nothing slips through.",
    suggestions: ["Does it integrate with my CRM?", "What about outreach?", "How much does it cost?"],
  },

  // Lead scraping
  {
    patterns: /scrape|scraper|lead extract|pull leads|find leads|google maps|zillow|where do leads come from/i,
    answer:
      "Lead generation is available on our Digital Marketing and Full Growth plans:\n\n🗺️ Google Maps lead scraping — any business category or city\n🏠 Real estate lead data — listings and agent prospects\n📣 Automated outreach — SMS, email, and voicemail campaigns\n\nThe $297/mo Starter plan focuses on your website, chatbot, missed call text-back, reviews, and one-click marketing. Book a call to see which plan fits your goals.",
    suggestions: ["What do you do with the leads?", "Tell me about outreach", "How much does it cost?"],
  },

  // Outreach
  {
    patterns: /outreach|campaign|blast|send messages|automated message|voicemail|ringless/i,
    answer:
      "On our marketing plans, Detool.AI launches automated multi-channel outreach:\n\n📱 Personalized SMS\n📧 Custom emails\n📞 Ringless voicemails\n\nEverything runs on autopilot. The $297 Starter plan includes one-click marketing campaigns to your existing client list.",
    suggestions: ["What about paid ads?", "How does booking work?", "Book a meeting"],
  },

  // Paid traffic / ads
  {
    patterns: /paid (traffic|ads?)|facebook ads?|instagram ads?|google ads?|advertising|roas|return on ad/i,
    answer:
      "We run paid ad campaigns on our Digital Marketing and Full Growth plans:\n\n📘 Facebook Ads\n📸 Instagram Ads\n🔍 Google Ads\n\nAds drive traffic to your booking site and funnel — we handle creative, targeting, and follow-up. Book a call to discuss your market and budget.",
    suggestions: ["How does follow-up work?", "What does it cost?", "Book a meeting"],
  },

  // AI / will it sound like me
  {
    patterns: /sound like me|my tone|ai say something wrong|embarrass|wrong|mistake|control|review/i,
    answer:
      "Great question. Before anything goes live:\n\n✅ We train the AI specifically on your business, your services, and your tone\n✅ You review and approve all responses before activation\n✅ You can update scripts and responses anytime\n\nThe AI is trained to represent you professionally — it won't say anything you haven't approved.",
    suggestions: ["What channels does it use?", "How long does setup take?", "Book a meeting"],
  },

  // Booking / appointments
  {
    patterns: /book|appointment|calendar|schedule|meeting|slot/i,
    answer:
      "Your Detool system handles bookings automatically:\n\n1. Clients visit your professional booking website\n2. They pick a service and time slot\n3. Confirmations and reminders go out via SMS or email\n4. Deposits can be collected to reduce no-shows\n\nYou spend less time on the phone and more time doing the work.",
    suggestions: ["What's in the $297 plan?", "Does it work with my CRM?", "Book a meeting"],
  },

  // CRM integration
  {
    patterns: /crm|gohighlevel|hubspot|follow up boss|integrate|integration|connect|sync/i,
    answer:
      "Yes — Detool.AI is built on GoHighLevel and integrates with popular CRMs including:\n\n• GoHighLevel\n• HubSpot\n• And more\n\nYour booking site, automations, and client portal all connect seamlessly. Setup includes full integration support at no extra cost.",
    suggestions: ["How long does setup take?", "Is there a contract?", "What does it cost?"],
  },

  // Pricing / cost
  {
    patterns: /price|pricing|cost|how much|plan|fee|charge|pay|afford|budget|quote|297/i,
    answer:
      "Here are our plans:\n\n🌐 Starter Website — $297/mo\nCustom website + AI chatbot + missed call text-back + automated review requests + one-click marketing + on-site SEO. Live in 10 days.\n\n📈 Digital Marketing — Custom\nEverything above + AI lead follow-up, automated booking, lead scraping, outreach campaigns, and paid ads.\n\n✨ Full Growth Suite — Custom\nEvery tool we have, fully managed. Includes pipeline automation, ad creatives, monthly strategy calls, and a 60-day ROI guarantee.\n\nAll plans: no contracts, no setup fees, cancel anytime.",
    suggestions: ["What's in the $297 plan?", "Book a meeting", "Is there a contract?"],
  },

  // $297 plan details
  {
    patterns: /297|starter|website plan|what.s included|what is included/i,
    answer:
      "The $297/month Starter plan includes:\n\n🌐 Custom professional website\n🤖 AI chatbot on your site\n📞 Missed call text-back — auto-texts anyone who calls and you miss\n⭐ Automated review requests — texts clients asking for a Google review\n📣 One-click marketing campaigns\n🔍 On-site SEO setup\n📅 Live in 10 days\n🔓 No contracts, cancel anytime",
    suggestions: ["How does missed call text-back work?", "How does review automation work?", "Book a meeting"],
  },

  // Missed call text back
  {
    patterns: /missed call|text.?back|call back|miss a call/i,
    answer:
      "Missed call text-back works like this:\n\n📞 Someone calls your business\n❌ You don't pick up\n📱 They instantly get a text:\n\n\"Hey! Sorry we missed your call — how can we help you today? Reply here and we'll get back to you ASAP.\"\n\nYou never lose a lead to a missed call again. Included in every plan.",
    suggestions: ["Tell me about review automation", "What's in the $297 plan?", "Book a meeting"],
  },

  // Automated reviews
  {
    patterns: /review|reputation|google review|ask for review|review request/i,
    answer:
      "Our automated review system works like this:\n\n✅ After a client visit, we auto-send them a text asking for a Google review with your direct link.\n\nMore 5-star reviews = higher Google ranking = more clients finding you. Included in the $297/month plan.",
    suggestions: ["Tell me about one-click marketing", "What's in the $297 plan?", "Book a meeting"],
  },

  // One-click marketing
  {
    patterns: /one.?click|marketing campaign|blast|bulk (text|message|sms)/i,
    answer:
      "One-click marketing lets you send promotions, announcements, or offers to your entire contact list instantly — with one click.\n\nExamples:\n📣 \"We're running a special this week — reply to claim it\"\n🎉 \"Referring a friend? Get $50 off your next service\"\n📅 \"Spots are filling up fast — book before Friday\"\n\nIncluded in the $297/month Starter plan.",
    suggestions: ["What else is in the $297 plan?", "Book a meeting", "How much does it cost?"],
  },

  // Contract / cancel
  {
    patterns: /contract|cancel|lock|month.to.month|commitment|leave|exit/i,
    answer:
      "No long-term contracts. Detool.AI works month-to-month.\n\nIf you're not happy, you can cancel anytime — though most clients see results within the first few weeks and stay.",
    suggestions: ["What's the guarantee?", "How much does it cost?", "Book a meeting"],
  },

  // Guarantee / results
  {
    patterns: /guarantee|results|promise|roi|return|work|prove/i,
    answer:
      "We back our plans with real support and proven systems:\n\n✅ 60-day ROI guarantee on Full Growth plans\n✅ Free migration from your existing system\n✅ No setup fees or hidden costs\n✅ Dedicated support included\n\nIf you don't see results, we'll make it right. We're invested in your success.",
    suggestions: ["How much does it cost?", "Book a meeting", "How does it work?"],
  },

  // Setup time
  {
    patterns: /how long|setup time|time to start|when can i|how fast|quick|days/i,
    answer:
      "Most clients are fully live in 10 days. Here's the timeline:\n\n• Day 1 — Demo/onboarding call, we learn your business\n• Days 2–9 — We build your website, automations, and campaigns\n• Launch call — We walk you through everything and go live\n\nWe handle all the technical work. You just show up for the calls.",
    suggestions: ["What do I need to provide?", "How much does it cost?", "Book a meeting"],
  },

  // Hiring / team
  {
    patterns: /hire|staff|employee|team|headcount|person|manage it|run it/i,
    answer:
      "Zero extra staff needed. That's the whole point.\n\nDetool.AI runs on autopilot — capturing leads, following up, sending review requests, and filling your calendar without manual work from you.",
    suggestions: ["How does it work?", "What channels does it use?", "Book a meeting"],
  },

  // Stats / social proof
  {
    patterns: /how many|clients|proof|reviews|trusted|results|stats|numbers|150/i,
    answer:
      "Here's what our clients see:\n\n📈 150+ local businesses served across the US\n📅 More bookings from missed call recovery and review automation\n🌐 Professional websites live in 10 days\n⭐ 5-star Google reviews from real clients\n\nCheck our Testimonials page or Google Maps to see verified reviews.",
    suggestions: ["What do clients say?", "Book a meeting", "How much does it cost?"],
  },

  // Contact / reach a human
  {
    patterns: /contact|speak|human|real person|call|phone|email|reach|talk to someone/i,
    answer:
      "You can reach us a few ways:\n\n📧 Email — detoolai@gmail.com\n📋 Contact form — detool.ai/contact\n📅 Book a call — grow.detool.ai/landing-page\n\nWe typically respond within a few hours during business hours.",
    suggestions: ["Book a meeting", "What does it cost?", "How does it work?"],
  },

  // Book a meeting CTA
  {
    patterns: /book|meeting|call|demo|free consult|schedule a call|get started/i,
    answer:
      "Awesome — let's get you booked! 🎉\n\nClick the button below to schedule your free demo call. We'll walk you through exactly how Detool.AI works for your business, answer any questions, and put together a custom plan.\n\nNo obligations, no credit card required.",
    suggestions: ["📅 Book a Free Meeting →"],
  },
];

const FALLBACK: Message = {
  from: "bot",
  text: "Good question! I want to make sure I give you the right answer. You can:\n\n📧 Email us at detoolai@gmail.com\n📅 Book a free call and ask directly\n\nOr try rephrasing — I know everything about Detool.AI's services, pricing, setup, and more!",
  suggestions: ["What is Detool.AI?", "How much does it cost?", "Book a meeting"],
};

function getBotReply(input: string): Message {
  const trimmed = input.trim();

  // Check for book meeting suggestion click
  if (trimmed === "📅 Book a Free Meeting →" || /^book a meeting$/i.test(trimmed)) {
    window.open(BOOK_A_CALL_URL, "_blank", "noopener,noreferrer");
    return {
      from: "bot",
      text: "Opening our booking page now! 🚀 Schedule your free demo call and we'll show you everything live.",
      suggestions: ["What does it cost?", "How does it work?", "What's included?"],
    };
  }

  for (const entry of KNOWLEDGE) {
    if (entry.patterns.test(trimmed)) {
      return { from: "bot", text: entry.answer, suggestions: entry.suggestions };
    }
  }

  return FALLBACK;
}

// ─── Component ────────────────────────────────────────────────────────────────

const INITIAL_MESSAGES: Message[] = [
  {
    from: "bot",
    text: "Hey! 👋 I'm the Detool.AI assistant. Ask me about websites, marketing, pricing, or how we help local businesses grow.",
    suggestions: ["What is Detool.AI?", "How much does it cost?", "Book a meeting"],
  },
];

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [unread, setUnread] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) {
      setUnread(0);
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
    }
  }, [messages, open]);

  // Nudge badge after 8s if not opened
  useEffect(() => {
    const t = setTimeout(() => { if (!open) setUnread(1); }, 8000);
    return () => clearTimeout(t);
  }, []);

  const pushMessage = (userText: string) => {
    const userMsg: Message = { from: "user", text: userText };
    const botMsg = getBotReply(userText);
    setMessages(prev => [...prev, userMsg, botMsg]);
    if (!open) setUnread(u => u + 1);
  };

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    setInput("");
    pushMessage(trimmed);
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  };

  const lastBotMsg = [...messages].reverse().find(m => m.from === "bot");

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-warm flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="bg-gradient-primary px-4 py-3 flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm leading-tight">Detool.AI Assistant</p>
                <p className="text-white/70 text-xs">Online — replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white transition-colors p-1">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-96 min-h-0">
            {messages.map((msg, i) => (
              <div key={i}>
                <div className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                  {msg.from === "bot" && (
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                      <Bot className="w-3.5 h-3.5 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[80%] px-3 py-2.5 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-sm"
                        : "bg-muted text-foreground rounded-bl-sm"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Suggestion chips — only show on last bot message */}
                {msg.from === "bot" && msg.suggestions && msg === lastBotMsg && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-8">
                    {msg.suggestions.map((s, si) => (
                      <button
                        key={si}
                        onClick={() => pushMessage(s)}
                        className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {s}
                        <ChevronRight className="w-3 h-3" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask me anything about Detool.AI…"
              className="flex-1 bg-muted text-foreground placeholder:text-muted-foreground text-sm px-3 py-2 rounded-xl outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center text-primary-foreground disabled:opacity-40 hover:opacity-90 transition-opacity flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform relative"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
        {!open && unread > 0 && (
          <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full text-white text-xs font-bold flex items-center justify-center">
            {unread}
          </span>
        )}
      </button>
    </div>
  );
};

export default ChatWidget;
