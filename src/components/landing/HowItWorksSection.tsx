import { Maximize2 } from "lucide-react";

const HowItWorksSection = () => {
  const videoId = "1SfJkcxYSs__tcZQOp-_yfyWc0Io8FiYi";
  
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            How Detool.AI Works
          </h2>
          
          {/* Video container */}
          <div className="relative">
            <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-card">
              <iframe 
                src={`https://drive.google.com/file/d/${videoId}/preview`}
                className="w-full h-full"
                allow="autoplay"
                allowFullScreen
              />
            </div>
            
            {/* Fullscreen button for mobile */}
            <a
              href={`https://drive.google.com/file/d/${videoId}/view`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:hidden"
            >
              <Maximize2 className="w-4 h-4" />
              <span>Tap to watch fullscreen</span>
            </a>
          </div>
          
          <p className="text-muted-foreground text-center mt-6 text-sm">
            Watch how Detool.AI handles leads from start to finish
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
