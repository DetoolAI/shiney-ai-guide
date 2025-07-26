import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageCircle, X, Send, User, Bot } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LiveChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "bot",
      text: "Hi! I'm the Detool.AI assistant. I'd love to help you learn how our AI can transform your car detailing business. What questions do you have?",
      timestamp: new Date()
    }
  ]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [userInfo, setUserInfo] = useState({ name: "", email: "" });
  const [showForm, setShowForm] = useState(true);
  const { toast } = useToast();

  const botResponses = [
    "That's a great question! Our AI typically increases bookings by 40-60% within the first month. Would you like to know how it works?",
    "Absolutely! The setup process takes 3-7 days and we handle everything for you. No technical knowledge required on your part.",
    "Our AI integrates with Instagram, Facebook, SMS, and your existing booking system. It works 24/7 to never miss a customer inquiry.",
    "Pricing starts at $297/month and includes everything - unlimited conversations, all integrations, and full support. Most clients see ROI within 3 weeks.",
    "Perfect! I'd recommend scheduling a free consultation where we can show you exactly how this would work for your specific business. Would you like me to connect you with our team?",
    "Great question! Our AI learns your specific services, pricing, and communication style. It becomes an expert on YOUR business specifically.",
    "Security is our top priority. We use enterprise-grade encryption and are fully GDPR compliant. Your data is completely safe with us."
  ];

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInfo.name.trim()) {
      setShowForm(false);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: "bot",
        text: `Thanks ${userInfo.name}! I'm here to answer any questions about how Detool.AI can help your car detailing business. What would you like to know?`,
        timestamp: new Date()
      }]);
    }
  };

  const handleSendMessage = () => {
    if (!currentMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      type: "user" as const,
      text: currentMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");

    // Simulate bot response
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        id: messages.length + 2,
        type: "bot" as const,
        text: randomResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const handleStartRealChat = () => {
    const subject = `Live Chat Request from ${userInfo.name}`;
    const body = `
Hi Detool.AI team,

I was chatting with your AI assistant and would like to speak with a real person.

Name: ${userInfo.name}
Email: ${userInfo.email}

Recent conversation:
${messages.slice(-3).map(m => `${m.type}: ${m.text}`).join('\n')}

Please contact me to continue this conversation.

Thanks!
    `.trim();

    const mailtoLink = `mailto:detoolai@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;

    toast({
      title: "Connecting you with our team!",
      description: "Your email client should open with a message to our team.",
    });
  };

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 rounded-full w-16 h-16 bg-gradient-primary hover:opacity-90 shadow-glow z-50"
          size="lg"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[600px] bg-card/95 backdrop-blur-sm border-border shadow-2xl z-50 flex flex-col">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b border-border">
            <CardTitle className="text-lg flex items-center">
              <Bot className="h-5 w-5 text-primary mr-2" />
              Detool.AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0">
            {showForm ? (
              <div className="p-6 flex-1 flex flex-col justify-center">
                <div className="text-center mb-6">
                  <Bot className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Welcome to Detool.AI!</h3>
                  <p className="text-sm text-muted-foreground">
                    Let's get started. What should I call you?
                  </p>
                </div>
                
                <form onSubmit={handleSubmitForm} className="space-y-4">
                  <Input
                    placeholder="Your name"
                    value={userInfo.name}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Email (optional)"
                    value={userInfo.email}
                    onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
                  />
                  <Button type="submit" className="w-full bg-gradient-primary hover:opacity-90">
                    Start Chatting
                  </Button>
                </form>
              </div>
            ) : (
              <>
                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.type === 'user' ? 'bg-primary' : 'bg-muted'}`}>
                          {message.type === 'user' ? 
                            <User className="h-4 w-4 text-white" /> : 
                            <Bot className="h-4 w-4 text-primary" />
                          }
                        </div>
                        <div className={`rounded-lg p-3 ${message.type === 'user' ? 'bg-primary text-white' : 'bg-muted'}`}>
                          <p className="text-sm">{message.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Input */}
                <div className="border-t border-border p-4">
                  <div className="flex space-x-2 mb-3">
                    <Input
                      placeholder="Ask about our AI solutions..."
                      value={currentMessage}
                      onChange={(e) => setCurrentMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    />
                    <Button 
                      onClick={handleSendMessage}
                      size="sm"
                      className="bg-gradient-primary hover:opacity-90"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full text-xs"
                    onClick={handleStartRealChat}
                  >
                    Speak with a real person →
                  </Button>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default LiveChatWidget;