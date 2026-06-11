import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import DetoolLogo from "@/components/DetoolLogo";

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

const DropdownMenu = ({
  label,
  open,
  onOpen,
  onClose,
  links,
}: {
  label: string;
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
  links: { label: string; to: string }[];
}) => (
  <div
    className="relative"
    onMouseEnter={onOpen}
    onMouseLeave={onClose}
  >
    <button
      type="button"
      className={`flex items-center gap-1 font-semibold text-base transition-colors ${open ? "text-primary" : "text-gray-800 hover:text-primary"}`}
    >
      {label} <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
    </button>
    {open && (
      <div className="absolute top-full left-0 pt-2 w-56 z-50">
        <div className="bg-white border border-gray-200 rounded-xl shadow-xl py-2">
          {links.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={onClose}
              className="block px-5 py-2.5 text-sm font-semibold text-gray-700 hover:bg-orange-50 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
);

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

  const closeDropdowns = () => {
    setProductsOpen(false);
    setAboutOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-20 gap-8">
          <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <DetoolLogo size={44} wordmarkSize="md" />
          </Link>

          <nav className="hidden md:flex flex-1 items-center justify-center gap-7">
            <DropdownMenu
              label="Products"
              open={productsOpen}
              onOpen={() => { setAboutOpen(false); setProductsOpen(true); }}
              onClose={closeDropdowns}
              links={featureLinks}
            />
            <Link to="/pricing" className={`font-semibold text-base transition-colors ${isActive("/pricing") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Pricing</Link>
            <Link to="/testimonials" className={`font-semibold text-base transition-colors ${isActive("/testimonials") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Testimonials</Link>
            <Link to="/our-work" className={`font-semibold text-base transition-colors ${isActive("/our-work") ? "text-primary" : "text-gray-800 hover:text-primary"}`}>Our Work</Link>
            <DropdownMenu
              label="About"
              open={aboutOpen}
              onOpen={() => { setProductsOpen(false); setAboutOpen(true); }}
              onClose={closeDropdowns}
              links={aboutLinks}
            />
          </nav>

          <div className="hidden md:flex items-center gap-4 flex-shrink-0">
            <Link to="/auth" className="font-semibold text-base text-gray-800 hover:text-primary transition-colors">
              Log In
            </Link>
            <Button onClick={handleBookCall} className="rounded-lg px-7 py-3 text-base font-bold bg-primary hover:bg-primary/90 shadow-md h-auto">
              Book A Call
            </Button>
          </div>

          <button className="md:hidden ml-auto p-2 text-gray-700" onClick={() => setOpen(!open)}>
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

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
            <hr className="border-gray-200 my-1" />
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wide px-1">About</p>
            {aboutLinks.map((a) => (
              <Link key={a.to} to={a.to} onClick={() => setOpen(false)} className="font-semibold text-gray-700 text-sm pl-2">{a.label}</Link>
            ))}
            <hr className="border-gray-200 my-1" />
            <Link to="/auth" onClick={() => setOpen(false)} className="font-semibold text-gray-800">Log In</Link>
            <Button onClick={handleBookCall} className="rounded-lg w-full font-bold mt-2 bg-primary hover:bg-primary/90">Book A Call</Button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
