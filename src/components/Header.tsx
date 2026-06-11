import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import RobotLogo from "@/components/RobotLogo";

const featureLinks = [
  { label: "Booking Website", to: "/features/booking-website" },
  { label: "Deposit Collection", to: "/features/deposit-collection" },
  { label: "Membership System", to: "/features/membership-system" },
  { label: "Missed Call Text Back", to: "/features/missed-call-text-back" },
  { label: "Review Funnel", to: "/features/review-funnel" },
  { label: "Marketing Campaigns", to: "/features/marketing-campaigns" },
  { label: "Loyalty Rewards", to: "/features/loyalty-rewards" },
  { label: "Member Portal", to: "/features/member-portal" },
];

const aboutLinks = [
  { label: "About Us", to: "/about" },
  { label: "Contact", to: "/contact" },
  { label: "Nail Salons", to: "/industries/nail-salons" },
  { label: "Lash Studios", to: "/industries/lash-studios" },
  { label: "Spas", to: "/industries/spas" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => pathname === path;

  const handleBookCall = () => {
    setOpen(false);
    navigate("/book-a-call");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20 gap-8">

          {/* Logo */}
          <Link to="/" className="flex items-end gap-0 hover:opacity-80 transition-opacity flex-shrink-0 relative">
            <div className="relative z-10 -mr-1" style={{ marginBottom: "-8px" }}>
              <RobotLogo size={56} />
            </div>
            <div className="leading-none pb-1">
              <span className="block text-2xl font-black text-gray-900 tracking-tight">DETOOL</span>
              <span className="block text-2xl font-black text-primary tracking-tight -mt-1">.AI</span>
            </div>
          </Link>

          {/* Nav — CENTER */}
          <nav className="hidden md:flex flex-1 items-center justify-center gap-7">
            {/* Products dropdown */}
            <div className="relative" onMouseEnter={() => setProductsOpen(true)} onMouseLeave={() => setProductsOpen(false)}>
              <button className={`flex items-center gap-1 font-semibold text-base transition-colors ${productsOpen ? "text-primary" : "text-gray-800 hover:text-primary"}`}>
                Products <ChevronDown className="w-4 h-4" />
              </button>
              {productsOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  {featureLinks.map((f) => (
                    <Link key={f.to} to={f.to} onClick={() => setProductsOpen(false)} className="block px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      {f.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/pricing" className={`font-semibold text-base transition-colors ${isActive("/pricing") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Pricing</Link>
            <Link to="/testimonials" className={`font-semibold text-base transition-colors ${isActive("/testimonials") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Testimonials</Link>
            <Link to="/our-work" className={`font-semibold text-base transition-colors ${isActive("/our-work") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Our Work</Link>
            <Link to="/blog" className={`font-semibold text-base transition-colors ${isActive("/blog") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Blog</Link>

            {/* About dropdown */}
            <div className="relative" onMouseEnter={() => setAboutOpen(true)} onMouseLeave={() => setAboutOpen(false)}>
              <button className={`flex items-center gap-1 font-semibold text-base transition-colors ${aboutOpen ? "text-primary" : "text-gray-800 hover:text-primary"}`}>
                About <ChevronDown className="w-4 h-4" />
              </button>
              {aboutOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl py-2 z-50">
                  {aboutLinks.map((a) => (
                    <Link key={a.to} to={a.to} onClick={() => setAboutOpen(false)} className="block px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors">
                      {a.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Actions — RIGHT */}
          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Link to="/auth" className="font-semibold text-base text-gray-800 hover:text-primary transition-colors">
              Log In
            </Link>
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
          <div className="md:hidden py-4 border-t border-gray-200 flex flex-col gap-3 max-h-[80vh] overflow-y-auto">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1">Products</p>
            {featureLinks.map((f) => (
              <Link key={f.to} to={f.to} onClick={() => setOpen(false)} className="font-semibold text-gray-700 text-sm pl-2">{f.label}</Link>
            ))}
            <hr className="border-gray-200 my-1" />
            <Link to="/pricing" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Pricing</Link>
            <Link to="/testimonials" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Testimonials</Link>
            <Link to="/our-work" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Our Work</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Blog</Link>
            <hr className="border-gray-200 my-1" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1">Industries</p>
            <Link to="/industries/nail-salons" onClick={() => setOpen(false)} className="font-semibold text-gray-700 text-sm pl-2">Nail Salons</Link>
            <Link to="/industries/lash-studios" onClick={() => setOpen(false)} className="font-semibold text-gray-700 text-sm pl-2">Lash Studios</Link>
            <Link to="/industries/spas" onClick={() => setOpen(false)} className="font-semibold text-gray-700 text-sm pl-2">Spas</Link>
            <hr className="border-gray-200 my-1" />
            <Link to="/about" onClick={() => setOpen(false)} className="font-semibold text-gray-800">About</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Contact</Link>
            <Link to="/auth" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Log In</Link>
            <Button onClick={handleBookCall} className="rounded-lg w-full font-bold mt-2 bg-primary hover:bg-primary/90">Book A Call</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
