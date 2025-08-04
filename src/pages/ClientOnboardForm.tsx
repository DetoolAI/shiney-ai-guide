import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const clientOnboardSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  legalBusinessName: z.string().min(2, "Legal business name is required"),
  phone: z.string().min(10, "Valid phone number is required"),
  website: z.string().url("Valid website URL is required").optional().or(z.literal("")),
  email: z.string().email("Valid email is required"),
  openingHours: z.string().min(1, "Opening hours are required"),
  salesRepInfo: z.string().min(1, "Sales rep information is required"),
  callsPerHour: z.string().min(1, "Call capacity is required"),
  termsAccepted: z.boolean().refine((val) => val === true, "You must accept the terms and conditions"),
  forwardCalls: z.boolean(),
  crmName: z.string().min(1, "CRM name is required"),
  leadInfo: z.string().min(1, "Lead information is required"),
  companyInfo: z.string().min(1, "Company information is required"),
  valuePropositions: z.string().min(1, "Value propositions are required"),
  specialPromotions: z.string().optional(),
});

type ClientOnboardFormData = z.infer<typeof clientOnboardSchema>;

const ClientOnboardForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ClientOnboardFormData>({
    resolver: zodResolver(clientOnboardSchema),
    defaultValues: {
      fullName: "",
      legalBusinessName: "",
      phone: "",
      website: "",
      email: "",
      openingHours: "",
      salesRepInfo: "",
      callsPerHour: "",
      termsAccepted: false,
      forwardCalls: false,
      crmName: "",
      leadInfo: "",
      companyInfo: "",
      valuePropositions: "",
      specialPromotions: "",
    },
  });

  const onSubmit = async (data: ClientOnboardFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Submitting client onboard data:", data);
      
      // Send email via Supabase Edge Function
      const { data: emailResult, error: emailError } = await supabase.functions.invoke('send-onboard-email', {
        body: data
      });

      if (emailError) {
        console.error("Email error:", emailError);
        throw new Error(emailError.message || "Failed to send email");
      }

      console.log("Email sent successfully:", emailResult);
      
      toast({
        title: "Form Submitted Successfully!",
        description: "We've received your onboarding information and will review it shortly.",
      });
      
      form.reset();
    } catch (error) {
      console.error("Submission error:", error);
      toast({
        title: "Submission Failed",
        description: "Please try again or contact support if the problem persists.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const businessTypes = [
    "LLC",
    "Corporation",
    "Partnership",
    "Sole Proprietorship",
    "S-Corp",
    "C-Corp",
    "Non-Profit",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-center">Client Onboarding Form</CardTitle>
            <CardDescription className="text-center text-lg">
              Please fill out all information to get started with Detool.AI automation
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Basic Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold border-b pb-2">Basic Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="legalBusinessName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Legal Business Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your legal business name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone *</FormLabel>
                          <FormControl>
                            <Input placeholder="(555) 123-4567" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="website"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Website</FormLabel>
                          <FormControl>
                            <Input placeholder="https://yourwebsite.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email *</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@company.com" type="email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Phone & Communication */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold border-b pb-2">Phone & Communication Setup</h3>

                  <FormField
                    control={form.control}
                    name="openingHours"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Opening Hours for Your Sales Team *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="When is your sales team available? (e.g., Mon-Fri 9AM-6PM EST)" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="salesRepInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Sales Rep(s) Name and Phone Number(s) *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="We need the phone number they will call leads from (e.g., John Smith - (555) 123-4567)" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="callsPerHour"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>How many calls can be scheduled every 30 minutes? *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., 5 calls per 30 minutes" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="forwardCalls"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            Should incoming calls from leads be forwarded to you?
                          </FormLabel>
                        </div>
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="crmName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>CRM Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="e.g., Salesforce, HubSpot, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Company Information */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold border-b pb-2">Company & Lead Information</h3>
                  
                  <FormField
                    control={form.control}
                    name="leadInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>General + Detailed Info about your leads for initial touchpoint *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Provide detailed information about your target leads and how to approach them initially"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="companyInfo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Additional Company Information *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us more about your company, services, and unique aspects"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="valuePropositions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>What are specific value propositions your company offers? *</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="List the key value propositions and benefits you offer to customers"
                            className="min-h-[100px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="specialPromotions"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Any special value proposition or promotion you can offer these leads?</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Describe any special offers, discounts, or promotions for new leads"
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                {/* Terms and Conditions */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold border-b pb-2">Terms and Conditions</h3>
                  
                  <FormField
                    control={form.control}
                    name="termsAccepted"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I accept the terms and conditions *
                          </FormLabel>
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Client Onboarding Form"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default ClientOnboardForm;