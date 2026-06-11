import { Link } from "react-router-dom";
import { Mail, Instagram, Youtube } from "lucide-react";
import RobotLogo from "@/components/RobotLogo";

const LandingFooter = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3">
              <RobotLogo size={36} />
              <div className="leading-none">
                <span className="block text-base font-black text-gray-900 tracking-tight">DETOOL</span>
                <span className="block text-base font-black text-primary tracking-tight -mt-1">.AI</span>
              </div>
            </Link>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">Website design & marketing for beauty businesses.</p>
            <div className="flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-xs font-bold" aria-label="TikTok">
                TT
              </a>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-sm mb-3">Products</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link to="/features/booking-website" className="block hover:text-primary transition-colors">Booking Website</Link>
              <Link to="/features/deposit-collection" className="block hover:text-primary transition-colors">Deposit Collection</Link>
              <Link to="/features/membership-system" className="block hover:text-primary transition-colors">Memberships</Link>
              <Link to="/features/missed-call-text-back" className="block hover:text-primary transition-colors">Missed Call Text Back</Link>
              <Link to="/features/review-funnel" className="block hover:text-primary transition-colors">Review Funnel</Link>
              <Link to="/features/marketing-campaigns" className="block hover:text-primary transition-colors">Campaigns</Link>
              <Link to="/features/loyalty-rewards" className="block hover:text-primary transition-colors">Loyalty Rewards</Link>
              <Link to="/features/member-portal" className="block hover:text-primary transition-colors">Member Portal</Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-sm mb-3">Company</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link to="/pricing" className="block hover:text-primary transition-colors">Pricing</Link>
              <Link to="/testimonials" className="block hover:text-primary transition-colors">Testimonials</Link>
              <Link to="/our-work" className="block hover:text-primary transition-colors">Our Work</Link>
              <Link to="/about" className="block hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="block hover:text-primary transition-colors">Contact</Link>
              <Link to="/book-a-call" className="block hover:text-primary transition-colors">Book A Call</Link>
              <Link to="/privacy" className="block hover:text-primary transition-colors">Privacy</Link>
              <Link to="/terms" className="block hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>

          <div>
            <p className="font-bold text-gray-900 text-sm mb-3">Industries</p>
            <div className="space-y-2 text-sm text-gray-500">
              <Link to="/industries/nail-salons" className="block hover:text-primary transition-colors">Nail Salons</Link>
              <Link to="/industries/lash-studios" className="block hover:text-primary transition-colors">Lash Studios</Link>
              <Link to="/industries/spas" className="block hover:text-primary transition-colors">Spas</Link>
            </div>
            <div className="mt-6">
              <a href="mailto:detoolai@gmail.com" className="text-sm text-gray-500 hover:text-primary transition-colors flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> detoolai@gmail.com
              </a>
            </div>
            <Link to="/book-a-call" className="inline-block mt-4 text-sm font-bold text-primary hover:text-primary/80">
              Book A Call →
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-5 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Detool.AI. All rights reserved. · Website Design & Marketing For Beauty Businesses.
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
