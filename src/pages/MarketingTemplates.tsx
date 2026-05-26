import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import SEO from "@/components/SEO";

const MarketingTemplates = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: `${type} copied to clipboard`,
    });
  };

  const emailTemplates = [
    {
      subject: "Lost 40% of leads last month?",
      body: `Hi [Name],

I noticed [Business Name] on Google and wanted to reach out about something that might interest you.

Most businesses lose 30-40% of potential customers because they can't answer calls and messages 24/7. 

I built an AI system that automatically responds to customers on text, Instagram, and calls - even at 2am on weekends.

One of my clients went from 30 bookings/month to 45 bookings/month in just 3 weeks.

Would you be interested in a quick 5-minute demo this week? No sales pitch - just showing you how it works.

Best,
[Your Name]
[Your Phone]

P.S. - I'm offering the first month free to the first 3 businesses that try it.`
    },
    {
      subject: "Your competitors are booking customers while you sleep",
      body: `Hi [Name],

Quick question - how many potential customers text or DM you after hours?

I help businesses like [Business Name] capture those late-night inquiries that usually get lost.

My AI responds to customers instantly on:
✓ Text messages
✓ Instagram DMs  
✓ Facebook messages
✓ Website chat

It books appointments, answers pricing questions, and even handles rescheduling.

Result: My clients typically see 30-50% more bookings within the first month.

Want to see a 3-minute demo of how it works?

[Your Name]
[Your Phone]`
    },
    {
      subject: "Why [Business Name] is losing money every night",
      body: `[Name],

I analyzed 100+ businesses and found something shocking:

The average business loses $2,400/month in potential revenue from missed after-hours inquiries.

Here's what happens:
• Customer texts at 8pm → No response
• Customer messages on Instagram → No response  
• Customer calls Sunday → Voicemail

By Monday, they've already booked with your competitor.

I solved this with an AI that works 24/7 for businesses.

[Client Name] added $18,000 in new revenue last quarter just from after-hours bookings.

Free demo this week?

[Your Name]
detool.ai`
    }
  ];

  const phoneScript = `📞 PHONE SCRIPT FOR DETOOL.AI

[OPENING - First 10 seconds]
"Hi [Name], this is [Your Name]. I saw [Business Name] online and wanted to ask you a quick question - are you currently missing calls and texts from customers after hours?"

[WAIT FOR RESPONSE]

[PROBLEM IDENTIFICATION]
"I work with businesses and found most lose 30-40% of potential bookings because they can't respond 24/7. Does that sound familiar?"

[SOLUTION INTRO]
"I built an AI system that automatically responds to customers on text, Instagram, and calls - even at 2am. One client went from 30 to 45 bookings per month in 3 weeks."

[DEMO OFFER]
"Would you be interested in a quick 5-minute demo? I can show you exactly how it works - no sales pitch."

[OBJECTION HANDLING]

IF "Not interested":
"I understand. Can I ask - what's your current system for handling after-hours inquiries?"

IF "Too expensive":
"I haven't mentioned price yet, but I'm actually offering the first month free to the first 3 businesses that try it. Would that change things?"

IF "Need to think about it":
"Totally understand. The demo takes 5 minutes and there's no commitment. When would be better - tomorrow morning or afternoon?"

IF "Already have a system":
"Great! What are you using? I'm curious because most systems I see don't handle Instagram DMs and texts together."

[CLOSING]
"Perfect! I have [Day] at [Time] or [Day] at [Time] available. Which works better for you?"

[FOLLOW-UP]
"I'll send you a calendar link right after this call. Also, what's the best number to text you at?"

🎯 KEY POINTS TO REMEMBER:
• Keep it conversational, not scripted
• Ask questions and listen
• Focus on their pain (missed revenue)
• Offer value first (free month)
• Always try to book the demo
• Get their best contact info

📱 TEXT FOLLOW-UP (send immediately):
"Hi [Name], great talking with you! Here's the demo link: [calendar link]. Looking forward to showing you how [Business Name] can capture those after-hours bookings!"`;

  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Marketing Templates — Detool.AI"} description={"Copy-and-paste email, SMS, and outreach templates Detool.AI uses to book more appointments."} path={"/marketing"} />
      <Header />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">
                Marketing Templates for <span className="text-primary">Detool.AI</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Ready-to-use cold email templates and phone scripts to close your first deals
              </p>
            </div>

            {/* Email Templates */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Mail className="h-6 w-6 text-primary" />
                  <span>Cold Email Templates</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {emailTemplates.map((template, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-semibold text-lg">Template {index + 1}</h3>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(`Subject: ${template.subject}\n\n${template.body}`, "Email template")}
                        >
                          <Copy className="h-4 w-4 mr-2" />
                          Copy
                        </Button>
                      </div>
                      <div className="mb-3">
                        <strong>Subject:</strong> {template.subject}
                      </div>
                      <div className="bg-muted/50 p-4 rounded text-sm whitespace-pre-line">
                        {template.body}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Phone Script */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Phone className="h-6 w-6 text-primary" />
                  <span>Phone Script</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-end mb-4">
                  <Button
                    variant="outline"
                    onClick={() => copyToClipboard(phoneScript, "Phone script")}
                  >
                    <Copy className="h-4 w-4 mr-2" />
                    Copy Script
                  </Button>
                </div>
                <div className="bg-muted/50 p-6 rounded text-sm whitespace-pre-line font-mono">
                  {phoneScript}
                </div>
              </CardContent>
            </Card>

            {/* Usage Tips */}
            <Card className="mt-8">
              <CardHeader>
                <CardTitle>📈 Usage Tips</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Email Strategy:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Send emails Tuesday-Thursday, 10am-2pm for best response rates</li>
                      <li>Personalize [Name] and [Business Name] for each prospect</li>
                      <li>Follow up 3 times: Day 3, Day 7, Day 14</li>
                      <li>A/B test different subject lines</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Phone Strategy:</h3>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      <li>Call Tuesday-Thursday, 9am-11am or 2pm-4pm</li>
                      <li>Practice the script until it sounds natural</li>
                      <li>Always ask questions and listen</li>
                      <li>Goal is to book a demo, not close on the call</li>
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

export default MarketingTemplates;