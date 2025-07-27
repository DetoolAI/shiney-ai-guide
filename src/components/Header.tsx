import { Button } from "@/components/ui/button";
import { Instagram, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center text-muted-foreground hover:text-primary transition-colors">
                Sections
                <ChevronDown className="ml-1 h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border-border">
                <DropdownMenuItem asChild>
                  <a href="#about" className="w-full cursor-pointer">About</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#testimonials" className="w-full cursor-pointer">Testimonials</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#solutions" className="w-full cursor-pointer">Solutions</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#features" className="w-full cursor-pointer">Features</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#integrations" className="w-full cursor-pointer">Integrations</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#faq" className="w-full cursor-pointer">FAQ</a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a href="#cta" className="w-full cursor-pointer">Get Started</a>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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