import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const LandingFooter = () => {
  return (
    <footer className="bg-card border-t border-border pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img
              src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png"
              alt="Detool.AI"
              className="w-9 h-9 rounded-lg"
            />
            <span className="text-lg font-bold text-foreground">
              detool<span className="text-primary">.ai</span>
            </span>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>

          <div className="flex flex-col gap-1 text-sm text-muted-foreground text-right">
            <a href="mailto:detoolai@gmail.com" className="hover:text-primary transition-colors flex items-center gap-1 justify-end">
              <Mail className="w-3.5 h-3.5" /> detoolai@gmail.com
            </a>
            <a href="tel:+19294985564" className="hover:text-primary transition-colors flex items-center gap-1 justify-end">
              <Phone className="w-3.5 h-3.5" /> (929) 498-5564
            </a>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-5 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Detool.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
