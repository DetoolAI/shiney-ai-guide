import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import RobotLogo from "@/components/RobotLogo";

const LandingFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/" className="flex items-center gap-2">
            <RobotLogo size={36} />
            <div className="leading-none">
              <span className="block text-base font-black text-gray-900 tracking-tight">DETOOL</span>
              <span className="block text-base font-black text-primary tracking-tight -mt-1">.AI</span>
            </div>
          </Link>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <Link to="/websites" className="hover:text-primary transition-colors">Website Design</Link>
            <Link to="/automation" className="hover:text-primary transition-colors">Automation</Link>
            <Link to="/pricing" className="hover:text-primary transition-colors">Pricing</Link>
            <Link to="/testimonials" className="hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/about" className="hover:text-primary transition-colors">About</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
          </div>

          <a href="mailto:detoolai@gmail.com" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
            <Mail className="w-3.5 h-3.5" /> detoolai@gmail.com
          </a>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Detool.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
