import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ThirdPartyScripts from "@/components/ThirdPartyScripts";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";
import HelpCenter from "./pages/HelpCenter";
import Privacy from "./pages/Privacy";
import Documentation from "./pages/Documentation";
import MarketingTemplates from "./pages/MarketingTemplates";
import PhoneScript from "./pages/PhoneScript";
import Welcome from "./pages/Welcome";
import Auth from "./pages/Auth";
import ClientOnboardForm from "./pages/ClientOnboardForm";
import DemoThankYou from "./pages/DemoThankYou";
import Beauty from "./pages/Beauty";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ThirdPartyScripts />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/marketing" element={<MarketingTemplates />} />
          <Route path="/phone-script" element={<PhoneScript />} />
          <Route path="/client-onboard-form" element={<ClientOnboardForm />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/demo-thank-you" element={<DemoThankYou />} />
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
