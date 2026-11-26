import { Check, X } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";
import type { PlanId } from "@/lib/constants";

type Plan = {
  id: PlanId;
  name: string;
  price: string;
  tagline: string;
  badge?: string;
  features: string[];
  excluded?: string[];
  cta: string;
  highlight: boolean;
};

export const plans: Plan[] = [
  {
    id: "website",
    name: "Website Only",
    price: "$99",
    tagline: "A professional, custom-designed website — built for you.",
    features: [
      "Custom-designed website (up to 5 pages)",
      "Mobile-friendly and fast",
      "Contact / quote form that emails you leads",
      "Basic on-page SEO setup",
      "Hosting, SSL and maintenance included",
      "Built for you in 10 days",
      "No contracts — cancel anytime",
    ],
    excluded: [
      "Missed-call text-back",
      "Review funnel",
      "Follow-up automations & campaigns",
    ],
    cta: "Get my website - $99/mo",
    highlight: false,
  },
  {
    id: "full",
    name: "Full System",
    price: "$297",
    tagline: "Website plus everything that turns visitors into paying customers.",
    badge: "Most popular",
    features: [
      "Everything in Website Only",
      "Missed-call text-back (replies in seconds)",
      "5-star review funnel",
      "Automated lead follow-up",
      "One-click marketing campaigns",
      "Lead & booking forms built in",
      "Built for you in 10 days",
      "No contracts — cancel anytime",
    ],
    cta: "Get started - $297/mo",
    highlight: true,
  },
];

const PlansSection = ({
  id = "pricing",
  dark = false,
  title = "Pick your plan",
  subtitle = "Both plans are done for you. No contracts. Cancel anytime. Upgrade whenever you're ready.",
}: {
  id?: string;
  dark?: boolean;
  title?: string;
  subtitle?: string;
}) => (
  <section id={id} className={`py-20 scroll-mt-24 ${dark ? "bg-detool-dark" : "bg-white"}`}>
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className={`text-3xl md:text-5xl font-black mb-4 ${dark ? "text-white" : "text-gray-900"}`}>{title}</h2>
        <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-white/70" : "text-gray-500"}`}>{subtitle}</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`relative rounded-2xl p-8 flex flex-col border-2 ${
              plan.highlight ? "bg-white border-primary shadow-xl" : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            {plan.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold uppercase tracking-wider px-4 py-1 rounded-full">
                {plan.badge}
              </span>
            )}
            <h3 className="text-xl font-black text-gray-900 mb-1">{plan.name}</h3>
            <div className="mb-2">
              <span className="text-5xl font-black text-gray-900">{plan.price}</span>
              <span className="text-gray-400 text-base">/mo</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{plan.tagline}</p>

            <ul className="space-y-2.5 mb-4 flex-1">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-gray-700">{f}</span>
                </li>
              ))}
              {plan.excluded?.map((f) => (
                <li key={f} className="flex items-start gap-2.5">
                  <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-300" />
                  <span className="text-sm text-gray-400 line-through">{f}</span>
                </li>
              ))}
            </ul>

            <BookCallLink
              plan={plan.id}
              className={`block text-center py-4 rounded-xl font-bold text-base transition-colors mt-4 ${
                plan.highlight
                  ? "bg-primary text-white hover:bg-primary/90 shadow-md"
                  : "bg-gray-900 text-white hover:bg-gray-800"
              }`}
            >
              {plan.cta}
            </BookCallLink>
            <p className="text-xs text-center text-gray-400 mt-3">Cancel anytime · Live in 10 days</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PlansSection;
