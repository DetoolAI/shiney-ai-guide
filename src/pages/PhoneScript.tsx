import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PhoneScript = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Phone script copied to clipboard",
    });
  };

  const phoneScript = `🎯 DETOOL.AI PHONE SCRIPT
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📞 OPENING HOOK (First 10 seconds)
"Hi [Name], this is [Your Name] from Detool.AI. I help car detailing businesses like [Business Name] capture customers who text and message after hours. Quick question - how many potential bookings do you think you lose each week because you can't respond to texts and Instagram DMs at night?"

[PAUSE - Let them answer]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔍 PROBLEM IDENTIFICATION QUESTIONS

"That's exactly what I help with. Let me ask you a few quick questions:

1. Do customers ever text you after 6pm or on weekends asking about pricing or availability?

2. How about Instagram DMs - do people message you there asking about services?

3. When someone calls and you're busy detailing a car, what happens to that call?

4. How many appointments would you say you could handle per week if you had perfect booking coverage?"

[Listen to their answers - take notes]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💡 SOLUTION INTRODUCTION

"Here's what's happening - you're probably losing 30-40% of potential bookings just from after-hours inquiries. That's exactly what Detool.AI solves.

We built an AI system specifically for car detailing businesses that:

✓ Responds to text messages instantly - even at 2AM
✓ Handles Instagram and Facebook DM conversations 
✓ Answers pricing questions with YOUR exact rates
✓ Books appointments directly into your calendar
✓ Follows up with customers automatically
✓ Never sleeps, never takes a day off

Our clients typically see a 50% increase in bookings within the first month. One shop owner told me he went from 30 appointments per month to 45 just from capturing those after-hours inquiries he was missing."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 DEMO OFFER

"I'd love to show you exactly how this works for [Business Name]. It takes about 5 minutes and I can demonstrate it with your actual services and pricing.

Would you be available for a quick demo this afternoon or would tomorrow morning work better?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🛡️ OBJECTION HANDLING

❌ "I'm not interested"
"I totally understand. Can I ask what you're currently doing to capture customers who reach out after hours? Most shop owners tell me they had no idea how much revenue they were missing until they saw the numbers."

❌ "It sounds expensive"
"I haven't even mentioned pricing yet! Actually, most of our clients tell me it pays for itself in the first week just from the bookings they capture. Plus, I'm running a special right now - would you be open to seeing how it works first?"

❌ "I need to think about it"
"Absolutely, that makes sense. The demo is just 5 minutes with no commitment - think of it as getting a free consultation on how to capture more bookings. What part would you want to think about after seeing how it actually works?"

❌ "I don't have time"
"I get it - you're busy running your business. That's exactly why this works so well. It handles all the customer conversations you don't have time for. The demo takes 5 minutes - less time than detailing a headlight. When's your slowest time of day?"

❌ "My customers prefer calling"
"That's great - ours handles calls too. But here's what's interesting: 70% of customers under 40 prefer texting over calling. Are you capturing those customers? The demo will show you exactly what messages you might be missing."

❌ "I already have a booking system"
"Perfect! What are you using? Most systems handle scheduling but don't actually talk to customers or answer their questions. Ours works with your existing calendar - it just captures the customers who would otherwise slip through the cracks."

❌ "I need to talk to my partner/spouse"
"Smart move - this affects your whole business. Why don't we do the demo with both of you? Or I can show you how it works and you can share it with them. When would work for both of you?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🎯 CLOSING TECHNIQUES

Option 1 - Time Choice Close:
"Great! I have a slot at 2PM today or 10AM tomorrow. Which works better for your schedule?"

Option 2 - Assumption Close:
"Perfect, let me grab my calendar. What's the best number to send you the meeting link?"

Option 3 - Benefit Close:
"Excellent. After this 5-minute demo, you'll know exactly how many more bookings [Business Name] could be getting each month. I have [time] or [time] available - which is better?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 FOLLOW-UP TEXT TEMPLATE

Send immediately after the call:

"Hi [Name]! Great talking with you about [Business Name]. Here's the demo link for [Day] at [Time]: [calendar link]

Looking forward to showing you how Detool.AI can help capture those after-hours bookings! 

- [Your Name]
Detool.AI"

If they didn't book:

"Hi [Name], thanks for your time today. I know you're busy running [Business Name]. 

Just so you know - I'm offering the first month free to the first 3 detailing shops that try Detool.AI. 

If you change your mind about that demo, just reply to this text. No pressure!

- [Your Name]"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 KEY STATS TO MENTION
✓ 150+ car detailing businesses already use Detool.AI
✓ Average 50% increase in bookings
✓ Works 24/7 - never misses a customer
✓ Handles SMS, Instagram, Facebook, and calls
✓ 3-day average setup time

🎯 REMEMBER:
• Keep it conversational, not robotic
• Ask questions and LISTEN to their answers
• Focus on THEIR specific pain points
• Always try to book the demo
• Get their best contact info
• Mention you're local/understand their market`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Complete Phone Script for <span className="text-primary">Detool.AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Professional phone script based on your website content and value proposition
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Phone className="h-6 w-6 text-primary" />
                    <span>Detool.AI Phone Script</span>
                  </div>
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(phoneScript)}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Script
                  </Button>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted/50 p-6 rounded text-sm whitespace-pre-line font-mono">
                  {phoneScript}
                </div>
              </CardContent>
            </Card>

            {/* Pro Tips */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>🏆 Pro Tips for Success</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold mb-3 text-primary">Before the Call:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Research their business on Google/Instagram</li>
                      <li>Check their current response time on social</li>
                      <li>Note their service types and pricing if visible</li>
                      <li>Practice saying their business name correctly</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-3 text-primary">During the Call:</h3>
                    <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                      <li>Smile while talking - it comes through in your voice</li>
                      <li>Mirror their energy level and speaking pace</li>
                      <li>Take notes on their specific challenges</li>
                      <li>Use their business name frequently</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PhoneScript;