import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, User, MapPin, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ready to transform your car detailing business with AI? Contact our team today for a personalized consultation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <a href="mailto:detoolai@gmail.com" className="text-primary hover:underline">
                        detoolai@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-accent/20 rounded-lg">
                      <Clock className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Team Members */}
              <div className="grid gap-6">
                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center space-x-3">
                      <User className="h-5 w-5 text-primary" />
                      <span>Justin Iheme</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:929-471-7198" className="text-primary hover:underline">
                        929-471-7198
                      </a>
                    </div>
                    <p className="text-muted-foreground mt-2">Founder & CEO</p>
                  </CardContent>
                </Card>

                <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground flex items-center space-x-3">
                      <User className="h-5 w-5 text-primary" />
                      <span>Gaven Kelly</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <a href="tel:347-938-5782" className="text-primary hover:underline">
                        347-938-5782
                      </a>
                    </div>
                    <p className="text-muted-foreground mt-2">Co-Founder & Business Development</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="john@example.com" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="company">Business Name</Label>
                    <Input id="company" placeholder="Your Car Detailing Business" />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your business and how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:opacity-90 shadow-glow"
                    size="lg"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <Card className="bg-primary/10 border-primary/20 shadow-glow max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Book a free consultation call to see how Detool.AI can transform your business
                </p>
                <Button 
                  size="lg" 
                  className="bg-gradient-primary hover:opacity-90 shadow-glow"
                >
                  Schedule Free Demo
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;