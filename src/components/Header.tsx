import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          {/* LEFT — Logo */}
          <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity flex-shrink-0">
            <img src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" alt="Detool.AI" className="w-11 h-11 rounded-lg" />
            <div className="leading-none">
              <span className="block text-2xl font-black text-gray-900 tracking-tight">DETOOL</span>
              <span className="block text-2xl font-black text-primary tracking-tight -mt-1.5">.AI</span>
            </div>
          </Link>

          {/* CENTER — Nav links */}
          <nav className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            {/* Products dropdown */}
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className={`flex items-center gap-1 font-semibold text-base transition-colors ${productsOpen ? "text-primary" : "text-gray-800 hover:text-primary"}`}>
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  <Link to="/websites" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors" onClick={() => setProductsOpen(false)}>Website Design</Link>
                  <Link to="/automation" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors" onClick={() => setProductsOpen(false)}>Missed Call Text-Back</Link>
                  <Link to="/automation" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors" onClick={() => setProductsOpen(false)}>Review Automation</Link>
                  <Link to="/automation" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors" onClick={() => setProductsOpen(false)}>AI Chatbot</Link>
                  <Link to="/automation" className="block px-5 py-3 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors" onClick={() => setProductsOpen(false)}>Marketing Campaigns</Link>
                </div>
              )}
            </div>

            <Link to="/pricing" className={`font-semibold text-base transition-colors ${isActive("/pricing") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Pricing</Link>
            <Link to="/testimonials" className={`font-semibold text-base transition-colors ${isActive("/testimonials") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Testimonials</Link>
            <Link to="/about" className={`font-semibold text-base transition-colors ${isActive("/about") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>About</Link>
          </nav>

          {/* RIGHT — CTA */}
          <div className="hidden md:flex items-center gap-5 flex-shrink-0">
            <Link to="/contact" className="text-base font-semibold text-gray-600 hover:text-primary transition-colors">Contact</Link>
            <Button asChild className="rounded-lg px-7 py-3 text-base font-bold bg-primary hover:bg-primary/90 shadow-md h-auto">
              <Link to="/contact">Book A Call</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden p-2 text-gray-700" onClick={() => setOpen(!open)}>
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
            <Button asChild className="rounded-lg w-full font-bold mt-1">
              <Link to="/contact" onClick={() => setOpen(false)}>Book A Call</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
