import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const LandingFooter = () => {
  return (
    <footer className="bg-card border-t border-border pt-14 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img
                src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png"
                alt="Detool.AI"
                className="w-9 h-9 rounded-lg"
              />
              <span className="text-lg font-bold text-foreground">
                detool<span className="text-primary">.ai</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              AI-powered websites, lead follow-up, and booking automation. Trusted by 150+ agents and teams across the US.
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:detoolai@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                detoolai@gmail.com
              </a>
              <a href="tel:+19294985564" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                (929) 498-5564
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Website Building</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">AI Lead Follow-Up</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Booking Automation</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Paid Traffic (Ads)</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Lead Scraping</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">On-Site SEO</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
              <li><Link to="/help" className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link></li>
              <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Get Started</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/contact" className="hover:text-primary transition-colors">Book a Free Call</Link></li>
              <li><Link to="/pricing" className="hover:text-primary transition-colors">See Plans</Link></li>
              <li><Link to="/client-onboard-form" className="hover:text-primary transition-colors">Client Onboarding</Link></li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Google Reviews ⭐
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Detool.AI. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/help" className="hover:text-primary transition-colors">Help Center</Link>
            <Link to="/documentation" className="hover:text-primary transition-colors">Documentation</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
