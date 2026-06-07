import { useState, useRef, useEffect } from "react";
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
      "Detool.AI is an AI-powered growth studio built for service businesses and sales teams. We handle:\n\n• 🤖 AI Lead Follow-Up — instant responses via SMS, email, Instagram & Facebook DMs\n• 📅 Automatic Booking — AI qualifies leads and books appointments to your calendar\n• 🎯 Lead Scraping — pulling fresh leads from Google Maps, Zillow, and across the web\n• 📣 Outreach Automation — SMS, email, and ringless voicemail campaigns\n• 💰 Paid Traffic — Facebook, Instagram, and Google Ads that drive high-intent buyers\n\nWe're trusted by 150+ agents and teams across the US. Setup takes under 3 days.",
    suggestions: ["Who is it for?", "How does setup work?", "What does it cost?"],
  },

  // Who is it for
  {
    patterns: /who is (it|this|detool) for|right for me|my business|qualify|do i qualify|does it work for/i,
    answer:
      "Detool.AI is built for:\n\n✅ Real estate agents handling inbound leads\n✅ Sales professionals across any industry\n✅ Teams receiving 10+ leads per week\n✅ Anyone tired of manually chasing unresponsive leads\n\nIf you're missing leads because follow-up is slow or inconsistent, Detool.AI is made for you.",
    suggestions: ["How does the AI follow-up work?", "What channels do you use?", "Book a meeting"],
  },

  // How it works / setup
  {
    patterns: /how does it work|how it works|explain|walk me through|setup process|how do i start|get started|onboard/i,
    answer:
      "Here's how we get you live in under 3 days:\n\n1️⃣ We learn your business — services, tone, and common questions\n2️⃣ We train the AI on your brand so it sounds just like you\n3️⃣ We connect your channels — SMS, email, Instagram, Facebook\n4️⃣ We activate and you start getting booked automatically\n\nYou review and approve everything before we go live. No tech skills needed on your end.",
    suggestions: ["What channels do you connect?", "Will the AI sound like me?", "Book a meeting"],
  },

  // Channels
  {
    patterns: /channel|sms|text|email|instagram|facebook|dm|social|platform|where/i,
    answer:
      "Detool.AI responds and follows up across:\n\n📱 SMS — instant text replies\n📧 Email — high-converting emails that bypass spam\n📸 Instagram DMs — automated responses to inquiries\n👍 Facebook Messages — never miss a message again\n📞 Ringless Voicemail — drops a voicemail without ringing the phone\n\nAll conversations flow into one dashboard so nothing slips through.",
    suggestions: ["Does it integrate with my CRM?", "What about outreach?", "How much does it cost?"],
  },

  // Lead scraping
  {
    patterns: /scrape|scraper|lead extract|pull leads|find leads|google maps|zillow|where do leads come from/i,
    answer:
      "Our AI Lead Scraper pulls fresh, targeted leads from:\n\n🗺️ Google Maps — any business category or city\n🏠 Zillow & Real Estate platforms — listings and agent data\n🌐 Web-wide extraction — business names, phone numbers, and emails straight into your Google Sheets\n\nNo more manual searching — just a constant stream of qualified prospects.",
    suggestions: ["What do you do with the leads?", "Tell me about outreach", "How much does it cost?"],
  },

  // Outreach
  {
    patterns: /outreach|campaign|blast|send messages|automated message|voicemail|ringless/i,
    answer:
      "Once leads are captured, Detool.AI launches automated multi-channel outreach:\n\n📱 Personalized SMS — lands directly in their pocket\n📧 Custom Emails — built to convert and bypass spam filters\n📞 Ringless Voicemails — professional drops straight to their inbox, no ringing\n\nEverything runs on autopilot. No manual work required from you.",
    suggestions: ["What about paid ads?", "How does booking work?", "Book a meeting"],
  },

  // Paid traffic / ads
  {
    patterns: /paid (traffic|ads?)|facebook ads?|instagram ads?|google ads?|advertising|roas|return on ad/i,
    answer:
      "We run battle-tested paid ad campaigns on:\n\n📘 Facebook Ads — precision-targeted by behavior, interests, and purchase intent\n📸 Instagram Ads — scroll-stopping creative that converts browsers into buyers\n🔍 Google Ads — capturing buyers at the exact moment they're searching for your service\n\nOur average client sees 3–5x ROAS (return on ad spend). We only send you qualified, high-intent leads — no tire-kickers.",
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
      "The AI handles the entire booking flow automatically:\n\n1. Responds to the lead instantly\n2. Qualifies them with your key questions\n3. Offers available time slots based on your calendar\n4. Confirms the booking via SMS or email\n\nYou only spend time with leads who are already qualified and booked — no chasing.",
    suggestions: ["What channels does it use?", "Does it work with my CRM?", "Book a meeting"],
  },

  // CRM integration
  {
    patterns: /crm|gohighlevel|hubspot|follow up boss|integrate|integration|connect|sync/i,
    answer:
      "Yes — Detool.AI integrates with the most popular CRMs including:\n\n• GoHighLevel\n• HubSpot\n• Follow Up Boss\n• And more\n\nIf you use something not on that list, reach out and we'll confirm compatibility. Setup includes full integration support at no extra cost.",
    suggestions: ["How long does setup take?", "Is there a contract?", "What does it cost?"],
  },

  // Pricing / cost
  {
    patterns: /price|pricing|cost|how much|plan|fee|charge|pay|afford|budget|quote/i,
    answer:
      "Our pricing is fully custom — no rigid tiers. On a call we'll discuss:\n\n• Your business size and volume\n• Which services you need (follow-up, scraping, outreach, ads)\n• Required integrations\n• Your budget\n\n🎁 Guarantees included with every plan:\n✅ ROI guarantee within 60 days\n✅ Free migration from your current system\n✅ No setup fees or hidden costs\n✅ Dedicated account manager\n✅ 24/7 priority support\n\nBook a free call and we'll build a plan around you — no obligations.",
    suggestions: ["Book a meeting", "Is there a contract?", "What's included?"],
  },

  // Contract / cancel
  {
    patterns: /contract|cancel|lock|month.to.month|commitment|leave|exit/i,
    answer:
      "No long-term contracts. Detool.AI works month-to-month.\n\nIf you're not happy, you can cancel anytime — though most clients see a clear booking increase within the first two weeks and never look back. 😊",
    suggestions: ["What's the guarantee?", "How much does it cost?", "Book a meeting"],
  },

  // Guarantee / results
  {
    patterns: /guarantee|results|promise|roi|return|work|prove/i,
    answer:
      "We back every plan with a full guarantee:\n\n✅ ROI guarantee within 60 days\n✅ Free migration from your existing system\n✅ No setup fees or hidden costs\n✅ Dedicated account manager included\n✅ 24/7 priority support\n\nIf you don't see results, we'll make it right. We're invested in your success.",
    suggestions: ["How much does it cost?", "Book a meeting", "How does it work?"],
  },

  // Setup time
  {
    patterns: /how long|setup time|time to start|when can i|how fast|quick|days/i,
    answer:
      "Most clients are fully live in under 3 days. Here's the timeline:\n\n• Day 1 — Onboarding call, we learn your business\n• Day 2 — AI training and channel setup\n• Day 3 — Review, approve, and go live\n\nWe handle all the technical work. You just show up for the onboarding call.",
    suggestions: ["What do I need to provide?", "How much does it cost?", "Book a meeting"],
  },

  // Hiring / team
  {
    patterns: /hire|staff|employee|team|headcount|person|manage it|run it/i,
    answer:
      "Zero extra staff needed. That's the whole point.\n\nDetool.AI runs 24/7 on autopilot — responding to leads, following up, and booking appointments without any manual input from you. It's like having a full follow-up team that never sleeps, never takes days off, and never misses a message.",
    suggestions: ["How does it work?", "What channels does it use?", "Book a meeting"],
  },

  // Stats / social proof
  {
    patterns: /how many|clients|proof|reviews|trusted|results|stats|numbers|150/i,
    answer:
      "Here's what our clients see:\n\n📈 150+ agents and teams served across the US\n📅 50% average booking increase\n⚡ Instant response time, 24/7\n⏱️ Setup in under 3 days\n\nWe also have 5-star Google reviews — check them out on our homepage or on Google Maps.",
    suggestions: ["What do clients say?", "Book a meeting", "How much does it cost?"],
  },

  // Contact / reach a human
  {
    patterns: /contact|speak|human|real person|call|phone|email|reach|talk to someone/i,
    answer:
      "You can reach us a few ways:\n\n📧 Email — detoolai@gmail.com\n📋 Contact form — detool.ai/contact\n📅 Book a call — click 'Book a Meeting' on the homepage\n\nWe typically respond within a few hours during business hours.",
    suggestions: ["Book a meeting", "What does it cost?", "How does it work?"],
  },

  // Book a meeting CTA
  {
    patterns: /book|meeting|call|demo|free consult|schedule a call|get started/i,
    answer:
      "Awesome — let's get you booked! 🎉\n\nClick the button below to schedule your free strategy call. We'll walk you through exactly how Detool.AI works for your business, answer any questions, and put together a custom plan.\n\nNo obligations, no credit card required.",
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
  if (trimmed === "📅 Book a Free Meeting →") {
    window.open("https://detool.ai/contact", "_blank");
    return {
      from: "bot",
      text: "Opening our contact page now! 🚀 Fill out the form and we'll be in touch within a few hours to confirm your call.",
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
    text: "Hey! 👋 I'm the Detool.AI assistant. I know everything about our services — ask me anything!",
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
