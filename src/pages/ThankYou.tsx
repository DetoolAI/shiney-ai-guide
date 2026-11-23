import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { CheckCircle, Mail, ClipboardList, Hammer, Rocket } from "lucide-react";
import { ONBOARDING_FORM_URL, BUSINESS_EMAIL } from "@/lib/constants";
import EmailCapture from "@/components/EmailCapture";
import SEO from "@/components/SEO";
import DetoolLogo from "@/components/DetoolLogo";
import { trackSubscribe } from "@/lib/metaPixel";

const timeline = [
  {
    icon: Mail,
    when: "Right now",
    title: "Check your email",
    desc: "Your receipt + onboarding link just went out. Reply with your logo + 3 photos and we start today.",
  },
  {
    icon: ClipboardList,
    when: "Today",
    title: "Fill the onboarding form",
    desc: "Takes ~5 minutes. This is what unlocks your build — without it, nothing moves.",
  },
  {
    icon: Hammer,
    when: "Days 1–10",
    title: "We build your system",
    desc: "Website, lead forms, missed-call text-back, review funnel, and follow-up — done for you.",
  },
  {
    icon: Rocket,
    when: "Day 10",
    title: "It goes live",
    desc: "We launch it. You do nothing. Your system runs while you run the business.",
  },
];

const ThankYou = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const paid = Boolean(sessionId);

  // Subscribe fires only after Stripe redirects here with session_id — not on bare /thank-you visits.
  useEffect(() => {
    if (!sessionId) return;

    const key = `meta_subscribe_${sessionId}`;
    if (sessionStorage.getItem(key)) return;

    const fire = () => {
      if (typeof window === "undefined" || !window.fbq) return false;
      trackSubscribe({ value: 297.0, currency: "USD" });
      sessionStorage.setItem(key, "1");
      return true;
    };

    if (fire()) return;

    // Pixel may still be loading from ThirdPartyScripts
    const id = window.setInterval(() => {
      if (fire()) window.clearInterval(id);
    }, 200);
    const timeout = window.setTimeout(() => window.clearInterval(id), 8000);
    return () => {
      window.clearInterval(id);
      window.clearTimeout(timeout);
    };
  }, [sessionId]);

  return (
    <div className="min-h-screen bg-detool-dark text-white">
      <SEO
        title="You're in — Detool.AI"
        description="You're subscribed. Check your email and complete onboarding so we can start building today."
        path="/thank-you"
      />

      <div className="container mx-auto px-4 pt-16 pb-20">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <div className="flex justify-center mb-6">
            <DetoolLogo size="md" inverse />
          </div>
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black mb-4">
            {paid ? "You\u2019re in." : "You\u2019re almost in."}
          </h1>
          <p className="text-lg md:text-xl text-white/70 mb-2">
            {paid
              ? "Check your email — your build starts now."
              : "If you just paid, give it a second — or open your Stripe receipt email."}
          </p>
          <p className="text-white/50 text-sm">
            Stripe handles your $297/mo subscription + receipt. Next step is the onboarding form.
          </p>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <a
            href={ONBOARDING_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl px-8 py-5 text-lg shadow-md transition-colors"
          >
            Open onboarding form →
          </a>
          <p className="text-center text-white/40 text-xs mt-3">
            Or reply to your receipt with your logo + 3 photos and we start today.
          </p>
        </div>

        <div className="max-w-xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-10">
          <h2 className="text-lg font-bold mb-6 text-center">What happens next</h2>
          <ol className="space-y-5">
            {timeline.map((step) => (
              <li key={step.when} className="flex gap-4 text-left">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">{step.when}</p>
                  <p className="font-semibold text-white">{step.title}</p>
                  <p className="text-sm text-white/60 leading-relaxed">{step.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="max-w-xl mx-auto">
          <EmailCapture
            title="Didn't get the email?"
            subtitle="Drop your email and we'll resend the onboarding link + kick the build."
            source="thank-you"
            buttonLabel="Resend onboarding link"
            dark
          />
        </div>

        <p className="text-center text-white/40 text-sm mt-10">
          Questions?{" "}
          <a href={`mailto:${BUSINESS_EMAIL}`} className="text-primary hover:underline">
            {BUSINESS_EMAIL}
          </a>
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
