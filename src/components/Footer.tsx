import { Link } from "react-router-dom";
import { Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-border pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" alt="Detool.AI" className="w-9 h-9 rounded-lg" />
              <span className="text-lg font-bold text-foreground">detool<span className="text-primary">.ai</span></span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              Website design & automation for service businesses. Real tools, real results.
            </p>
            <a href="mailto:detoolai@gmail.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-4 h-4" /> detoolai@gmail.com
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/websites" className="hover:text-primary transition-colors">Website Design</Link></li>
              <li><Link to="/automation" className="hover:text-primary transition-colors">Automation Tools</Link></li>
              <li><Link to="/automation" className="hover:text-primary transition-colors">Missed Call Text-Back</Link></li>
              <li><Link to="/automation" className="hover:text-primary transition-colors">Review Automation</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Get started */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 text-sm">Get Started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Book A Free Call</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">See Plans</Link></li>
              <li>
                <a href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Google Reviews ⭐
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Detool.AI. All rights reserved.</p>
          <p className="text-xs">Website Design & Automation for Service Businesses</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
