import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import ChatWidget from "@/components/ChatWidget";
import Index from "./pages/Index";
import Testimonials from "./pages/Testimonials";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import Privacy from "./pages/Privacy";
import DemoThankYou from "./pages/DemoThankYou";
import OurWork from "./pages/OurWork";
import BookACall from "./pages/BookACall";
import Blog from "./pages/Blog";

// Feature pages
import BookingWebsite from "./pages/features/BookingWebsite";
import DepositCollection from "./pages/features/DepositCollection";
import MembershipSystem from "./pages/features/MembershipSystem";
import MissedCallTextBack from "./pages/features/MissedCallTextBack";
import ReviewFunnel from "./pages/features/ReviewFunnel";
import MarketingCampaigns from "./pages/features/MarketingCampaigns";
import LoyaltyRewards from "./pages/features/LoyaltyRewards";
import MemberPortal from "./pages/features/MemberPortal";

// Industry pages
import NailSalons from "./pages/industries/NailSalons";
import LashStudios from "./pages/industries/LashStudios";
import Spas from "./pages/industries/Spas";

// Legacy pages kept for existing links
import Websites from "./pages/Websites";
import Automation from "./pages/Automation";
import HelpCenter from "./pages/HelpCenter";
import Documentation from "./pages/Documentation";
import MarketingTemplates from "./pages/MarketingTemplates";
import PhoneScript from "./pages/PhoneScript";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import ClientOnboardForm from "./pages/ClientOnboardForm";
import Beauty from "./pages/Beauty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThirdPartyScripts />
      <ChatWidget />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/demo-thank-you" element={<DemoThankYou />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/book-a-call" element={<BookACall />} />
          <Route path="/blog" element={<Blog />} />

          {/* Feature pages */}
          <Route path="/features/booking-website" element={<BookingWebsite />} />
          <Route path="/features/deposit-collection" element={<DepositCollection />} />
          <Route path="/features/membership-system" element={<MembershipSystem />} />
          <Route path="/features/missed-call-text-back" element={<MissedCallTextBack />} />
          <Route path="/features/review-funnel" element={<ReviewFunnel />} />
          <Route path="/features/marketing-campaigns" element={<MarketingCampaigns />} />
          <Route path="/features/loyalty-rewards" element={<LoyaltyRewards />} />
          <Route path="/features/member-portal" element={<MemberPortal />} />

          {/* Industry pages */}
          <Route path="/industries/nail-salons" element={<NailSalons />} />
          <Route path="/industries/lash-studios" element={<LashStudios />} />
          <Route path="/industries/spas" element={<Spas />} />

          {/* Legacy routes */}
          <Route path="/websites" element={<Websites />} />
          <Route path="/automation" element={<Automation />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/marketing" element={<MarketingTemplates />} />
          <Route path="/phone-script" element={<PhoneScript />} />
          <Route path="/client-onboard-form" element={<ClientOnboardForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/salons" element={<Beauty />} />

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
