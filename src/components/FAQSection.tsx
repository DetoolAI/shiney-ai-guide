import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can I see results from Detool.AI?",
      answer: "Most businesses see an immediate improvement in customer response times. Booking increases typically happen within the first 2-3 weeks as the AI learns your business patterns and customer preferences. Our fastest client saw a 40% booking increase in just 10 days."
    },
    {
      question: "What if my customers prefer talking to a real person?",
      answer: "Our AI is designed to feel natural and conversational. Many customers don't even realize they're talking to AI initially. However, we always provide seamless handoff to human staff when needed, and you can customize when this happens (complex requests, high-value customers, etc.)."
    },
    {
      question: "How does the AI handle my specific services and pricing?",
      answer: "During setup, we train the AI on your exact services, pricing, availability, and business processes. It learns your packages, add-ons, seasonal promotions, and even your preferred language style. The AI becomes an expert on YOUR specific business."
    },
    {
      question: "What if I already have a booking system?",
      answer: "Detool.AI integrates with most popular booking systems and calendars. We can also work with custom setups. If you don't have one, we can recommend and help set up the perfect solution for your business size and needs."
    },
    {
      question: "Is my customer data secure?",
      answer: "Absolutely. We use enterprise-grade encryption and are fully GDPR compliant. Your customer data never gets shared or used for any purpose other than serving your business. We can also sign custom data privacy agreements if needed."
    },
    {
      question: "What happens if the AI makes a mistake?",
      answer: "Our AI has a 99.2% accuracy rate, but when issues arise, we have built-in safeguards. The AI escalates complex situations to you, and we provide 24/7 monitoring. We also offer a satisfaction guarantee - if you're not happy in the first 30 days, we'll refund everything."
    },
    {
      question: "How much technical knowledge do I need?",
      answer: "Zero! We handle all the technical setup. You just provide information about your business during our onboarding call. We'll have you up and running within 3-7 days without you needing to touch any code or complicated systems."
    },
    {
      question: "Can I customize how the AI talks to my customers?",
      answer: "Yes! You can set the AI's personality (professional, friendly, casual), response style, and even specific phrases to use or avoid. Want it to sound exactly like you? We can train it to match your communication style perfectly."
    },
    {
      question: "What's included in my monthly plan?",
      answer: "Everything: AI customer service, booking management, SMS and social media integration, unlimited conversations, regular AI updates, customer support, and detailed analytics. No hidden fees or per-message charges."
    },
    {
      question: "How do I know if this will work for my business size?",
      answer: "Detool.AI scales with your business. Whether you're a solo operator or have multiple locations, our AI adapts. Small businesses love the 24/7 coverage, while larger operations appreciate the consistency across all customer interactions."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Detool.AI
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left hover:no-underline hover:text-primary">
                <span className="font-semibold">{faq.question}</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Still have questions? We're here to help!
          </p>
          <a 
            href="/contact" 
            className="text-primary hover:underline font-medium"
          >
            Contact our team for personalized answers →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;