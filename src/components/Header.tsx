import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" alt="Detool.AI" className="w-10 h-10 rounded-lg" />
            <div className="leading-none">
              <span className="block text-xl font-black text-gray-900 tracking-tight">DETOOL</span>
              <span className="block text-xl font-black text-primary tracking-tight -mt-1">SYSTEMS</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                Services <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <Link to="/websites" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors font-medium">
                    Website Design
                  </Link>
                  <Link to="/automation" className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors font-medium">
                    Automation Tools
                  </Link>
                </div>
              )}
            </div>
            <Link to="/pricing" className={`text-sm font-semibold transition-colors ${pathname === '/pricing' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>Pricing</Link>
            <Link to="/#reviews" className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Testimonials</Link>
            <Link to="/about" className={`text-sm font-semibold transition-colors ${pathname === '/about' ? 'text-primary' : 'text-gray-700 hover:text-primary'}`}>About</Link>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-primary hover:underline">Contact</Link>
            <Button asChild className="rounded-lg px-6 py-2.5 text-sm font-bold bg-primary hover:bg-primary/90 shadow-md">
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
          <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4 flex flex-col gap-3">
            <Link to="/websites" onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700">Website Design</Link>
            <Link to="/automation" onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700">Automation Tools</Link>
            <Link to="/pricing" onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700">Pricing</Link>
            <Link to="/about" onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="text-sm font-semibold text-gray-700">Contact</Link>
            <Button asChild className="rounded-lg w-full font-bold mt-2">
              <Link to="/contact" onClick={() => setOpen(false)}>Book A Call</Link>
            </Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
