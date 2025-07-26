import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Marcus Johnson",
      business: "Elite Auto Detailing",
      location: "Miami, FL",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Detool.AI increased our bookings by 65% in just 3 weeks. The AI handles customer inquiries 24/7, and we've never missed a potential client since implementing it.",
      results: "65% more bookings"
    },
    {
      name: "Sarah Chen",
      business: "Premium Car Care",
      location: "Los Angeles, CA", 
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "The ROI was immediate. Within the first month, the AI paid for itself. Our customers love the instant responses and easy booking process.",
      results: "ROI within 30 days"
    },
    {
      name: "David Rodriguez",
      business: "Shine & Detail Pro",
      location: "Austin, TX",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      rating: 5,
      text: "Game changer! The AI understands our services perfectly and even upsells packages. We've saved 15 hours per week on customer service.",
      results: "15 hrs/week saved"
    }
  ];

  const stats = [
    { number: "150+", label: "Happy Businesses" },
    { number: "50%", label: "Avg. Booking Increase" },
    { number: "24/7", label: "Customer Support" },
    { number: "3 Days", label: "Average Setup Time" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-primary">150+</span> Car Detailing Businesses
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how real businesses are transforming their operations with Detool.AI
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur-sm border-border shadow-card">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="bg-primary/10 p-3 rounded-lg mb-6">
                  <div className="text-primary font-semibold text-center">
                    {testimonial.results}
                  </div>
                </div>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.business}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Join hundreds of successful car detailing businesses
          </p>
          <div className="flex justify-center space-x-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;