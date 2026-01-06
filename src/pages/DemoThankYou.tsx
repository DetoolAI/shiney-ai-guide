import { useEffect, useState } from "react";
import { CheckCircle, Calendar, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const DemoThankYou = () => {
  const [firstName, setFirstName] = useState("there");

  useEffect(() => {
    // Get stored form data
    const storedData = sessionStorage.getItem("demoFormData");
    if (storedData) {
      const data = JSON.parse(storedData);
      if (data.firstName) {
        setFirstName(data.firstName);
      }
    }
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center">
        {/* Success Icon */}
        <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="w-10 h-10 text-primary" />
        </div>
        
        {/* Main Message */}
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
          Thanks, {firstName}!
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your demo request has been received. Our team will contact you shortly to schedule your personalized demo.
        </p>
        
        {/* What to expect */}
        <div className="bg-card rounded-xl border border-border p-6 mb-8">
          <h2 className="text-lg font-semibold text-foreground mb-4">What happens next?</h2>
          <div className="space-y-4 text-left">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">We'll reach out within 24 hours</p>
                <p className="text-sm text-muted-foreground">Via phone or email to schedule your demo</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">Personalized 15-minute demo</p>
                <p className="text-sm text-muted-foreground">See exactly how Detool.AI can work for your business</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* WhatsApp option */}
        <p className="text-muted-foreground mb-4">Want to chat right now?</p>
        <Button 
          variant="outline"
          size="lg"
          onClick={() => {
            const message = encodeURIComponent(`Hi! I'm ${firstName} and I just requested a demo. I'd love to learn more about Detool.AI.`);
            window.open(`https://wa.me/19543174734?text=${message}`, "_blank");
          }}
          className="w-full sm:w-auto"
        >
          Message Us on WhatsApp
        </Button>
        
        {/* Logo */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <img 
            src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" 
            alt="Detool.AI" 
            className="w-8 h-8 rounded"
          />
          <span className="text-foreground font-semibold">
            detool<span className="text-primary">.ai</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DemoThankYou;
