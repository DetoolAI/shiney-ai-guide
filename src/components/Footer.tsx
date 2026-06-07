import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png"
              alt="Detool.AI Logo"
              className="w-8 h-8 rounded-lg"
            />
            <span className="text-lg font-bold text-foreground">
              detool<span className="text-primary">.ai</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Detool.AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
