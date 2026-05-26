import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Book, MessageCircle, Phone, Mail, HelpCircle } from "lucide-react";
import SEO from "@/components/SEO";

const HelpCenter = () => {
  const categories = [
    {
      icon: Book,
      title: "Getting Started",
      description: "Learn the basics of setting up and using Detool.AI",
      articles: ["Quick Setup Guide", "First Booking Setup", "AI Training Basics", "Account Configuration"]
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "Understanding how our AI booking assistant works",
      articles: ["How AI Responses Work", "Customizing AI Personality", "Training Your AI", "Handling Complex Requests"]
    },
    {
      icon: Phone,
      title: "Integrations",
      description: "Connect with SMS, Instagram, Facebook, and more",
      articles: ["SMS Setup Guide", "Instagram Integration", "Facebook Messenger Setup", "Website Widget Installation"]
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and how to resolve them",
      articles: ["Connection Issues", "Booking Problems", "AI Not Responding", "Integration Errors"]
    }
  ];

  const popularArticles = [
    "How to set up your first AI booking assistant",
    "Connecting Instagram DM automation",
    "Customizing AI responses for your business",
    "Understanding pricing and billing",
    "Setting up SMS notifications",
    "Troubleshooting common integration issues"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO title={"Help Center — Detool.AI"} description={"Answers to common questions about Detool.AI: setup, AI assistant, integrations, billing, and more."} path={"/help"} />
      <Header />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-primary">Help</span> Center
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Find answers, guides, and resources to get the most out of Detool.AI
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search for help articles, guides, and FAQs..." 
                className="pl-12 py-4 text-lg"
              />
            </div>
          </div>

          {/* Popular Articles */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-8 text-center">Popular Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {popularArticles.map((article, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6">
                    <p className="text-foreground font-medium">{article}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center">Browse by Category</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {categories.map((category, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:shadow-card transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-primary/20 rounded-lg">
                        <category.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                        <p className="text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.articles.map((article, articleIndex) => (
                        <li key={articleIndex}>
                          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                            {article}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="bg-card/50 backdrop-blur-sm border-border max-w-2xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-2xl font-bold mb-4">Still need help?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find what you're looking for? Our support team is here to help.
                </p>
                <div className="flex justify-center">
                  <Button asChild className="bg-gradient-primary hover:opacity-90">
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Support
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default HelpCenter;