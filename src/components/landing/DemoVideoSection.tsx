import { Play } from "lucide-react";

const DemoVideoSection = () => {
  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            See How Detool.AI Works in Under 60 Seconds
          </h2>
          <p className="text-muted-foreground mb-10">
            Watch the simple flow: Lead comes in → AI responds → Follow-ups sent → Appointment booked
          </p>
          
          {/* Video placeholder - replace with actual video embed */}
          <div className="relative aspect-video bg-card rounded-2xl border border-border overflow-hidden shadow-card">
            {/* Placeholder for video - shows visual flow */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="flex items-center gap-8 mb-8 flex-wrap justify-center px-4">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">📥</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Lead Arrives</span>
                </div>
                <div className="text-primary text-2xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">🤖</span>
                  </div>
                  <span className="text-sm text-muted-foreground">AI Responds</span>
                </div>
                <div className="text-primary text-2xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">📱</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Follow-ups</span>
                </div>
                <div className="text-primary text-2xl">→</div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-2">
                    <span className="text-2xl">📅</span>
                  </div>
                  <span className="text-sm text-muted-foreground">Booked!</span>
                </div>
              </div>
              
              {/* Play button overlay - for when video is added */}
              <button className="w-20 h-20 rounded-full bg-primary/90 flex items-center justify-center hover:bg-primary transition-colors group">
                <Play className="w-8 h-8 text-primary-foreground ml-1 group-hover:scale-110 transition-transform" />
              </button>
              <p className="text-muted-foreground text-sm mt-4">Click to watch demo</p>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-6">
            * Demo video coming soon. Book a free demo to see it in action!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DemoVideoSection;
