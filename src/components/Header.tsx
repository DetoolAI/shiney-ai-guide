import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png" 
              alt="Detool.AI Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold text-foreground">
              detool<span className="text-primary">.ai</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#solutions" className="text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </Link>
            <Link to="/#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm" 
              asChild
              className="bg-gradient-to-r from-pink-500 to-violet-500 border-0 text-white hover:from-pink-600 hover:to-violet-600 hidden md:inline-flex"
            >
              <a 
                href="https://www.instagram.com/detool.ai/?hl=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Instagram size={16} />
                <span>@detool.ai</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;