import { Maximize2, X, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const HowItWorksSection = () => {
  const videoId = "1uJ12TPvQaseBLW47tdugAMP3zph_N9_6";
  const [isFullscreen, setIsFullscreen] = useState(false);
  const demoUrl = "https://detool.onrender.com";
  
  return (
    <>
      <section className="py-20 bg-muted/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
              How Detool.AI Works
            </h2>
            
            {/* Interactive Demo */}
            <div className="mb-16 md:mb-20">
            {/* Mobile: Direct users to desktop */}
              <div className="flex flex-col items-center gap-4 p-6 rounded-2xl border border-border bg-card md:hidden">
                <p className="text-muted-foreground text-center text-sm">
                  For the best experience with our interactive AI demo, please visit this page on a desktop or laptop computer.
                </p>
              </div>
              
              {/* Desktop: Show iframe with Safari fallback */}
              <div className="hidden md:block">
                <iframe
                  src={demoUrl}
                  style={{ width: '100%', height: '700px', border: 0, borderRadius: '20px' }}
                  allow="microphone"
                />
                <p className="text-center mt-4 text-sm text-muted-foreground">
                  Demo not loading?{" "}
                  <a 
                    href={demoUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center gap-1"
                  >
                    Open in new tab <ExternalLink className="h-3 w-3" />
                  </a>
                </p>
              </div>
            </div>
            
            {/* Video container */}
            <div className="relative">
              <div 
                className="aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-card cursor-pointer md:cursor-default"
                onClick={() => setIsFullscreen(true)}
              >
                <iframe 
                  src={`https://drive.google.com/file/d/${videoId}/preview`}
                  className="w-full h-full pointer-events-none md:pointer-events-auto"
                  allow="autoplay"
                  allowFullScreen
                />
              </div>
              
              {/* Fullscreen hint for mobile */}
              <button
                onClick={() => setIsFullscreen(true)}
                className="mt-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm md:hidden w-full"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Tap video to watch fullscreen</span>
              </button>
            </div>
            
            <p className="text-muted-foreground text-center mt-6 text-sm">
              Watch how Detool.AI handles leads from start to finish
            </p>
          </div>
        </div>
      </section>

      {/* Fullscreen modal overlay */}
      {isFullscreen && (
        <div 
          className="fixed inset-0 z-50 bg-black flex items-center justify-center"
          onClick={() => setIsFullscreen(false)}
        >
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            aria-label="Close fullscreen"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div 
            className="w-full h-full max-h-[100dvh] flex items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe 
              src={`https://drive.google.com/file/d/${videoId}/preview`}
              className="w-full aspect-video"
              allow="autoplay"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HowItWorksSection;
