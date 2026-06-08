import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  MessageSquare,
  Sparkles,
  Star,
  RefreshCw,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import DemoRequestForm from "@/components/landing/DemoRequestForm";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";

const scrollToForm = () => {
  const el = document.getElementById("demo-form");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

const Beauty = () => {
  const problems = [
    {
      icon: MessageSquare,
      title: "Instagram DMs piling up",
      pain: "Clients message at 11pm asking about pricing, availability, or a balayage quote — and they're booked with your competitor by morning.",
      fix: "AI replies to every DM in under 60 seconds, qualifies the client, and drops a booking link.",
    },
    {
      icon: Calendar,
      title: "No-shows on color & lash appointments",
      pain: "One no-show on a 3-hour color = $200+ gone. Manual reminder texts are inconsistent.",
      fix: "Automated SMS confirmations + smart rescheduling drop no-shows by 25–50%.",
    },
    {
      icon: RefreshCw,
      title: "Clients don't rebook",
      pain: "Lash fills are every 2–3 weeks. Color every 6. If you don't text them, they ghost.",
      fix: "AI auto-texts each client at their exact rebook window with a one-tap booking link.",
    },
    {
      icon: Star,
      title: "Not enough Google reviews",
      pain: "The salon down the street has 200 reviews. You have 12. Guess who shows up first on Google Maps.",
      fix: "After every appointment, AI texts a review request — clients tap once and you climb the Map Pack.",
    },
    {
      icon: Clock,
      title: "Empty chairs, last-minute",
      pain: "A 2pm cancellation = a hole in the day no one fills.",
      fix: "Auto-blast your VIP list with the open slot — usually filled within an hour.",
    },
    {
      icon: Sparkles,
      title: "Add-ons left on the table",
      pain: "Gloss, brow tint, deluxe upgrade — clients say yes when asked. They're rarely asked.",
      fix: "AI suggests the right add-on during booking based on each client's history.",
    },
  ];

  const results = [
    { stat: "30–50%", label: "More bookings from 24/7 DM + form replies" },
    { stat: "25–50%", label: "Fewer no-shows with smart reminders" },
    { stat: "2×", label: "Rebook rate from automated follow-up" },
    { stat: "5–10×", label: "More Google reviews per month" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="AI Booking & Marketing for Salons | Detool.AI"
        description="Detool.AI books more appointments, cuts no-shows, and gets more 5-star reviews for hair, lash, brow, and beauty salons — automatically."
        path="/beauty"
      />

      {/* HERO */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage:
              "url('/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png')",
          }}
        />
        <div className="absolute inset-0 bg-white" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm text-gray-900/80 tracking-wide">
                Built for salons
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-[1.05] tracking-tight">
              Fill every chair.<br />
              <span className="text-primary italic">On autopilot.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-500 mb-4 max-w-3xl mx-auto leading-relaxed">
              Detool.AI books your appointments, cuts no-shows, rebooks your
              regulars, and stacks 5-star Google reviews — so you can focus on
              the chair, not the phone.
            </p>

            <p className="text-sm text-gray-500/80 mb-10">
              For hair salons • Lash & brow studios • Nail bars • Med spas •
              Beauty bars
            </p>

            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Book a Free Meeting
            </Button>

            <p className="text-sm text-gray-500 mt-6">
              See exactly how it would work for your salon — in under 20 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* RESULTS BAR */}
      <section className="py-12 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {results.map((r, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {r.stat}
                </div>
                <div className="text-sm text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What's <span className="text-primary">costing your salon</span>{" "}
              money right now
            </h2>
            <p className="text-xl text-gray-500">
              Every one of these is fixable — without hiring a receptionist.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {problems.map((p, i) => (
              <Card
                key={i}
                className="bg-white/50 backdrop-blur-sm border-gray-200 shadow-card"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/20 rounded-lg shrink-0">
                      <p.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {p.title}
                      </h3>
                      <p className="text-gray-500 mb-3">{p.pain}</p>
                      <div className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                        <p className="text-gray-900 font-medium">{p.fix}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How it works for your <span className="text-primary">salon</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "We plug into your booking system",
                body: "Vagaro, Square, GlossGenius, Boulevard, Mindbody, Google Calendar — whatever you use.",
              },
              {
                step: "2",
                title: "AI takes over the inbox",
                body: "Instagram DMs, website forms, missed calls, SMS — every lead gets an instant, on-brand reply.",
              },
              {
                step: "3",
                title: "You watch the chair fill up",
                body: "More bookings, fewer no-shows, more rebooks, more reviews. You stay focused on clients.",
              },
            ].map((s) => (
              <div
                key={s.step}
                className="bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl p-6"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 text-primary font-bold text-xl flex items-center justify-center mb-4">
                  {s.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                <p className="text-gray-500">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUTCOME / CTA STRIP */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              The salons winning right now aren't{" "}
              <span className="text-primary italic">better</span>.
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              They just reply faster, follow up automatically, and ask for the
              review every single time. We build that system for you in days,
              not months.
            </p>
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-10 py-7 font-semibold shadow-glow hover:scale-105 transition-transform"
            >
              Book a Free Meeting
            </Button>
          </div>
        </div>
      </section>

      <DemoRequestForm />
      <LandingFooter />
    </div>
  );
};

export default Beauty;
