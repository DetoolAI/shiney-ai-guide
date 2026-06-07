import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { LogIn, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useNavigateToSection } from "@/hooks/useNavigateToSection";
import { supabase } from "@/integrations/supabase/client";
import { User } from "@supabase/supabase-js";

const Header = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();
  const navigateToSection = useNavigateToSection();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity cursor-pointer">
            <img 
              src="/lovable-uploads/ca46362a-ecff-4aef-b0d3-5d2e8e8497ac.png" 
              alt="Detool.AI Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold text-foreground">
              detool<span className="text-primary">.ai</span>
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            {user ? (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleLogout}
                className="flex items-center space-x-2"
              >
                <LogOut size={16} />
                <span className="hidden sm:inline">Logout</span>
              </Button>
            ) : (
              <Button 
                variant="default" 
                size="sm" 
                asChild
              >
                <Link to="/auth" className="flex items-center space-x-2">
                  <LogIn size={16} />
                  <span>Login</span>
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;