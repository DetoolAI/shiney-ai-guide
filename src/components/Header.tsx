import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/710113d7-81ef-41c9-9319-ba9612fc9114.png" 
              alt="Detool.AI Logo" 
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-xl font-bold text-foreground">
              detool<span className="text-primary">.ai</span>
            </span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-muted-foreground hover:text-primary transition-colors">
              Solutions
            </a>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">
              Features
            </a>
            <a href="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:inline-flex">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;