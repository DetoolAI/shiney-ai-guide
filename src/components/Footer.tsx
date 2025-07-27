import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";

const Footer = () => {
  const navigateToSection = useNavigateToSection();
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png" 
                alt="Detool.AI Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                detool<span className="text-primary">.ai</span>
              </span>
            </div>
            <p className="text-muted-foreground">
              AI-powered sales automation for car detailing businesses.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToSection('solutions')} 
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => navigateToSection('features')} 
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Features
                </button>
              </li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">Pricing</Link></li>
              <li>
                <button 
                  onClick={() => navigateToSection('integrations')} 
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  Integrations
                </button>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors">Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => navigateToSection('about')} 
                  className="text-muted-foreground hover:text-primary transition-colors bg-transparent border-none cursor-pointer"
                >
                  About
                </button>
              </li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground">
            © 2025 Detool.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;