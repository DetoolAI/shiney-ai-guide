import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import RobotLogo from "@/components/RobotLogo";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => pathname === path;

  // Book A Call always scrolls to the demo form on homepage
  const handleBookCall = () => {
    setOpen(false);
    if (pathname === "/") {
      document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
      }, 500);
    }
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20 gap-8">

          {/* Logo — LEFT */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0">
            <RobotLogo size={44} />
            <div className="leading-none">
              <span className="block text-xl font-black text-gray-900 tracking-tight">DETOOL</span>
              <span className="block text-xl font-black text-primary tracking-tight -mt-1">.AI</span>
            </div>
          </Link>

          {/* Nav — CENTER (flex-1 + justify-center) */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
            {/* Products dropdown */}
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className={`flex items-center gap-1 font-semibold text-base transition-colors ${productsOpen ? "text-primary" : "text-gray-800 hover:text-primary"}`}>
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  <Link to="/websites" onClick={() => setProductsOpen(false)} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary">Website Design</Link>
                  <Link to="/automation" onClick={() => setProductsOpen(false)} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary">Missed Call Text-Back</Link>
                  <Link to="/automation" onClick={() => setProductsOpen(false)} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary">Review Automation</Link>
                  <Link to="/automation" onClick={() => setProductsOpen(false)} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary">AI Chatbot</Link>
                  <Link to="/automation" onClick={() => setProductsOpen(false)} className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary">Marketing Campaigns</Link>
                </div>
              )}
            </div>

            <Link to="/pricing" className={`font-semibold text-base transition-colors ${isActive("/pricing") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Pricing</Link>
            <Link to="/testimonials" className={`font-semibold text-base transition-colors ${isActive("/testimonials") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Testimonials</Link>
            <Link to="/about" className={`font-semibold text-base transition-colors ${isActive("/about") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>About</Link>
            <Link to="/contact" className={`font-semibold text-base transition-colors ${isActive("/contact") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Contact</Link>
          </nav>

          {/* Book A Call — RIGHT */}
          <div className="hidden md:block flex-shrink-0">
            <Button onClick={handleBookCall} className="rounded-lg px-7 py-3 text-base font-bold bg-primary hover:bg-primary/90 shadow-md h-auto">
              Book A Call
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden ml-auto p-2 text-gray-700" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden py-4 border-t border-gray-200 flex flex-col gap-4">
            <Link to="/websites" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Website Design</Link>
            <Link to="/automation" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Automation Tools</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Pricing</Link>
            <Link to="/testimonials" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Testimonials</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="font-semibold text-gray-800">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Contact</Link>
            <Button onClick={handleBookCall} className="rounded-lg w-full font-bold mt-1">Book A Call</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
