import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How quickly can Detool.AI be set up for my business?",
    answer: "Most clients are fully live within 3 days. We handle the entire setup — AI training, channel connections, and automation rules — so you don't have to touch anything technical."
  },
  {
    question: "What channels does the AI respond on?",
    answer: "Detool.AI handles SMS, email, Instagram DMs, and Facebook messages. All conversations flow into one dashboard so nothing slips through."
  },
  {
    question: "Will the AI say something wrong or embarrassing to my leads?",
    answer: "No. We train the AI specifically on your business, your services, and your tone before going live. You review and approve the responses before the system is activated, and you can update it anytime."
  },
  {
    question: "Does it work with my existing CRM?",
    answer: "Yes. Detool.AI integrates with the most popular CRMs including GoHighLevel, HubSpot, and Follow Up Boss. If you use something else, reach out and we'll confirm compatibility."
  },
  {
    question: "What happens when a lead is ready to book?",
    answer: "The AI qualifies the lead, then automatically offers available appointment slots based on your calendar. The booking is confirmed via SMS or email without any manual work from you."
  },
  {
    question: "Is there a long-term contract?",
    answer: "No long-term contracts. We work month-to-month. If you're not seeing results, you can cancel anytime — though most clients see a booking increase within the first two weeks."
  },
  {
    question: "How much does it cost?",
    answer: "Pricing depends on the number of channels and contacts you need covered. Check our Pricing page for current plans, or book a call and we'll find the right fit for your volume."
  },
  {
    question: "Do I need to hire anyone to manage it?",
    answer: "No. That's the whole point. Detool.AI runs 24/7 on its own. You get the output of a full follow-up team without adding headcount or training anyone."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-500 text-lg">
              Everything you need to know before getting started.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 text-gray-500 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
