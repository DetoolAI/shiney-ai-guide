import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { trackLead, trackCompleteRegistration, trackGoogleAdsConversion } from "@/lib/metaPixel";
import { supabase } from "@/integrations/supabase/client";

const DemoRequestForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    } else if (formData.firstName.length > 100) {
      newErrors.firstName = "Name must be less than 100 characters";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    } else if (formData.email.length > 255) {
      newErrors.email = "Email must be less than 255 characters";
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.length > 20) {
      newErrors.phone = "Phone number too long";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Send email notification via edge function
      const { error } = await supabase.functions.invoke('send-demo-request', {
        body: {
          firstName: formData.firstName.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim()
        }
      });

      if (error) {
        console.error('Error sending demo request:', error);
        // Still proceed to thank you page even if email fails
      }

      // Track Meta Pixel events
      trackLead({
        content_name: "Demo Request",
        content_category: "Landing Page"
      });
      
      trackCompleteRegistration({
        content_name: "Demo Request Form"
      });

      // Track Google Ads conversion
      trackGoogleAdsConversion();
      
      // Store form data for thank you page
      sessionStorage.setItem("demoFormData", JSON.stringify({
        firstName: formData.firstName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim()
      }));
      
      // Redirect to thank you page
      navigate("/demo-thank-you");
    } catch (err) {
      console.error('Error:', err);
      // Still redirect on error - don't block the user
      navigate("/demo-thank-you");
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section id="demo-form" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-2xl border border-border p-8 md:p-10 shadow-card">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
              Book Your Free Meeting
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              See how Detool.AI can book more appointments for you
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange("firstName")}
                  maxLength={100}
                  className={`h-12 ${errors.firstName ? 'border-destructive' : ''}`}
                />
                {errors.firstName && (
                  <p className="text-destructive text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange("email")}
                  maxLength={255}
                  className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange("phone")}
                  maxLength={20}
                  className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                />
                {errors.phone && (
                  <p className="text-destructive text-sm mt-1">{errors.phone}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                size="lg"
                className="w-full h-14 text-lg font-semibold"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processing..." : "Book My Meeting"}
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground text-center mt-6">
              Trusted by sales professionals and teams across the U.S.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoRequestForm;
