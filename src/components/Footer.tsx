import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
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
              <li><a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Solutions</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Features</a></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Pricing</Link></li>
              <li><a href="#integrations" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Help Center</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact Us</Link></li>
              <li><Link to="/documentation" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Documentation</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About</a></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy</Link></li>
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