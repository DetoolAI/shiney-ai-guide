import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    setOpen(false);
    if (pathname !== "/") {
      navigate("/");
      setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }), 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-semibold text-gray-700 hover:text-primary transition-colors">
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-52 bg-white border border-gray-200 rounded-xl shadow-lg py-2 z-50">
                  <button onClick={() => { setServicesOpen(false); scrollTo("features"); }} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary font-medium">Website Design</button>
                  <button onClick={() => { setServicesOpen(false); scrollTo("features"); }} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary font-medium">Missed Call Text-Back</button>
                  <button onClick={() => { setServicesOpen(false); scrollTo("features"); }} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary font-medium">Review Automation</button>
                  <button onClick={() => { setServicesOpen(false); scrollTo("features"); }} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary font-medium">Marketing Campaigns</button>
                  <button onClick={() => { setServicesOpen(false); scrollTo("features"); }} className="block w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-orange-50 hover:text-primary font-medium">AI Chatbot</button>
                </div>
              )}
            </div>
            <button onClick={() => scrollTo("pricing")} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Pricing</button>
            <button onClick={() => scrollTo("reviews")} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">Testimonials</button>
            <button onClick={() => scrollTo("about")} className="text-sm font-semibold text-gray-700 hover:text-primary transition-colors">About</button>
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="text-sm font-semibold text-gray-500 hover:text-primary transition-colors">Contact</Link>
            <Button asChild className="rounded-lg px-6 py-2.5 text-sm font-bold bg-primary hover:bg-primary/90 shadow-md">
              <Link to="/contact">Book A Call</Link>
            </Button>
          </div>

          <button className="md:hidden p-2 text-gray-700" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pt-4 pb-2 border-t border-gray-200 mt-4 flex flex-col gap-3">
            <button onClick={() => scrollTo("features")} className="text-left text-sm font-semibold text-gray-700">Products</button>
            <button onClick={() => scrollTo("pricing")} className="text-left text-sm font-semibold text-gray-700">Pricing</button>
            <button onClick={() => scrollTo("reviews")} className="text-left text-sm font-semibold text-gray-700">Testimonials</button>
            <button onClick={() => scrollTo("about")} className="text-left text-sm font-semibold text-gray-700">About</button>
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
