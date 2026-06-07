import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot } from "lucide-react";

type Message = {
  from: "user" | "bot";
  text: string;
};

const BOT_RESPONSES: Record<string, string> = {
  default: "Thanks for reaching out! We typically reply within a few minutes. You can also book a call directly at detool.ai or fill out our demo request form.",
  pricing: "Our plans start based on the number of channels and contacts you need. Check out our Pricing page for details, or book a quick call and we'll find the right fit for you.",
  booking: "We can have you fully set up and live within 3 days. Click 'Book a Meeting' on our homepage to get started!",
  ai: "Detool.AI handles lead follow-up via SMS, email, Instagram, and Facebook — automatically booking appointments without any manual work from you.",
  hello: "Hey! 👋 Welcome to Detool.AI. How can I help you today? Ask me about pricing, setup, how the AI works, or anything else.",
  hi: "Hey! 👋 Welcome to Detool.AI. How can I help you today?",
  hey: "Hey! 👋 Welcome to Detool.AI. How can I help you today?",
};

function getBotReply(input: string): string {
  const lower = input.toLowerCase();
  if (lower.includes("price") || lower.includes("cost") || lower.includes("plan") || lower.includes("how much")) return BOT_RESPONSES.pricing;
  if (lower.includes("book") || lower.includes("start") || lower.includes("setup") || lower.includes("sign up")) return BOT_RESPONSES.booking;
  if (lower.includes("ai") || lower.includes("how") || lower.includes("work") || lower.includes("sms") || lower.includes("follow")) return BOT_RESPONSES.ai;
  if (lower.includes("hi") || lower.includes("hello") || lower.includes("hey")) return BOT_RESPONSES.hello;
  return BOT_RESPONSES.default;
}

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { from: "bot", text: "Hey! 👋 Welcome to Detool.AI. Ask me anything about pricing, setup, or how our AI works." }
  ]);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg: Message = { from: "user", text: trimmed };
    const botMsg: Message = { from: "bot", text: getBotReply(trimmed) };
    setMessages(prev => [...prev, userMsg, botMsg]);
    setInput("");
  };

  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Chat window */}
      {open && (
        <div className="w-80 sm:w-96 bg-card border border-border rounded-2xl shadow-warm flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-primary px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Detool.AI Support</p>
                <p className="text-white/70 text-xs">Typically replies instantly</p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.from === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border p-3 flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type a message..."
              className="flex-1 bg-muted text-foreground placeholder:text-muted-foreground text-sm px-3 py-2 rounded-xl outline-none focus:ring-1 focus:ring-primary"
            />
            <button
              onClick={send}
              disabled={!input.trim()}
              className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-primary-foreground disabled:opacity-40 hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Bubble */}
      <button
        onClick={() => setOpen(o => !o)}
        className="w-14 h-14 rounded-full bg-gradient-primary shadow-glow flex items-center justify-center hover:scale-110 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-6 h-6 text-white" /> : <MessageCircle className="w-6 h-6 text-white" />}
      </button>
    </div>
  );
};

export default ChatWidget;
