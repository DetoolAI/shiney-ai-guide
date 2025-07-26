import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Blog = () => {
  const featuredPost = {
    title: "How AI Increased Our Client's Car Detailing Revenue by 87% in 60 Days",
    excerpt: "A deep dive case study showing exactly how one car detailing business transformed their operations with AI customer service and booking automation.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=400&fit=crop",
    category: "Case Study",
    readTime: "8 min read",
    date: "January 22, 2025",
    author: "Justin Iheme"
  };

  const blogPosts = [
    {
      title: "10 Ways AI Can Transform Your Car Detailing Business in 2025",
      excerpt: "From automated booking to smart customer service, discover how AI is revolutionizing the car detailing industry.",
      image: "https://images.unsplash.com/photo-1609125537171-3e11fbe6d3aa?w=400&h=250&fit=crop",
      category: "AI Trends",
      readTime: "5 min read",
      date: "January 20, 2025",
      author: "Gaven Kelly",
      icon: TrendingUp
    },
    {
      title: "The Complete Guide to Automating Customer Service for Detailers",
      excerpt: "Learn how to set up automated customer service that feels personal and drives more bookings.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      category: "Automation",
      readTime: "12 min read", 
      date: "January 18, 2025",
      author: "Justin Iheme",
      icon: Zap
    },
    {
      title: "Why 73% of Car Detailing Customers Prefer Instant Responses",
      excerpt: "New research reveals what customers really want when contacting car detailing businesses.",
      image: "https://images.unsplash.com/photo-1560472355-a9a6e1a44088?w=400&h=250&fit=crop",
      category: "Customer Research",
      readTime: "6 min read",
      date: "January 15, 2025", 
      author: "Gaven Kelly",
      icon: Users
    },
    {
      title: "From $5K to $25K Monthly: A Detailing Business Transformation",
      excerpt: "Follow the journey of how one solo detailer scaled to a multi-location operation using AI automation.",
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=400&h=250&fit=crop",
      category: "Success Story",
      readTime: "10 min read",
      date: "January 12, 2025",
      author: "Justin Iheme",
      icon: TrendingUp
    },
    {
      title: "SMS vs Instagram vs Facebook: Which Channel Converts Best?",
      excerpt: "We analyzed 10,000 customer interactions to find which communication channel drives the most bookings.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      category: "Marketing",
      readTime: "7 min read",
      date: "January 10, 2025",
      author: "Gaven Kelly", 
      icon: Users
    },
    {
      title: "Setting Up AI Customer Service: Step-by-Step Implementation Guide",
      excerpt: "A detailed walkthrough of implementing AI customer service in your car detailing business.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop",
      category: "Implementation",
      readTime: "15 min read",
      date: "January 8, 2025",
      author: "Justin Iheme",
      icon: Zap
    }
  ];

  const categories = ["All", "Case Studies", "AI Trends", "Automation", "Success Stories", "Marketing", "Implementation"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              The Detool.AI <span className="text-primary">Blog</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Insights, case studies, and actionable strategies to grow your car detailing business with AI
            </p>
          </div>

          {/* Featured Post */}
          <Card className="bg-card/50 backdrop-blur-sm border-border shadow-card mb-16 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">Featured</Badge>
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-4">{featuredPost.category}</Badge>
                <h2 className="text-3xl font-bold mb-4 line-clamp-2">{featuredPost.title}</h2>
                <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.date}</span>
                  <Clock className="h-4 w-4 mr-2" />
                  <span className="mr-4">{featuredPost.readTime}</span>
                  <span>By {featuredPost.author}</span>
                </div>
                
                <Button className="bg-gradient-primary hover:opacity-90 w-fit">
                  Read Full Case Study
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </div>
          </Card>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className={category === "All" ? "bg-gradient-primary hover:opacity-90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Blog Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border shadow-card hover:shadow-glow transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 left-3 bg-background/80 text-foreground">
                    {post.category}
                  </Badge>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-4">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="mr-4">{post.date}</span>
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{post.readTime}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">By {post.author}</span>
                    <post.icon className="h-5 w-5 text-primary" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="bg-primary/10 border-primary/20 shadow-glow max-w-2xl mx-auto mt-16">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-muted-foreground mb-6">
                Get the latest insights on AI automation for car detailing businesses delivered to your inbox weekly.
              </p>
              <Button asChild className="bg-gradient-primary hover:opacity-90">
                <Link to="/contact">Subscribe to Newsletter</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Blog;