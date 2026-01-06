import { MapPin, Home, Globe } from "lucide-react";

const LeadScraperSection = () => {
  const platforms = [
    {
      icon: MapPin,
      title: "Google Maps",
      description: "Extract every local business in any category or city."
    },
    {
      icon: Home,
      title: "Zillow & Real Estate",
      description: "Pull active listings and agent data to dominate the property market."
    },
    {
      icon: Globe,
      title: "Web-Wide Extraction",
      description: "Scrape unique business names, phone numbers, and emails from across the web directly into your Google Sheets."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
            Extract High-Quality Leads From Everywhere
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12 max-w-3xl mx-auto">
            Stop searching manually. Our AI Scraper pulls fresh, unique leads from the most powerful platforms on the web instantly.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {platforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-colors"
              >
                <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-5">
                  <platform.icon className="w-7 h-7 text-primary" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {platform.title}
                </h3>
                
                <p className="text-muted-foreground">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadScraperSection;
