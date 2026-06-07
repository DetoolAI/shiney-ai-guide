import { Maximize2, X, Play } from "lucide-react";
import { useState } from "react";

const HowItWorksSection = () => {
  // YouTube video ID — replace with your real YouTube video ID (the part after ?v= in the URL)
  const youtubeId = "dQw4w9WgXcQ";
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <section className="relative py-16 md:py-24 -mt-8">
        {/* Warm ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-warm)" }}
        />
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 w-[80%] h-64 opacity-40 blur-3xl pointer-events-none"
          style={{ background: "var(--gradient-primary)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
                <Play className="w-3.5 h-3.5 text-primary fill-primary" />
                <span className="text-xs uppercase tracking-widest text-primary font-semibold">
                  Website showcase
                </span>
              </div>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-3">
                See What We Build For You
              </h2>
              <p className="text-muted-foreground text-base md:text-lg">
                A look at the kind of professional websites we create for our clients — fast, modern, and built to convert.
              </p>
            </div>

            {/* Featured video frame with warm glow */}
            <div className="relative group">
              <div
                className="absolute -inset-2 rounded-3xl opacity-60 blur-2xl group-hover:opacity-90 transition-opacity"
                style={{ background: "var(--gradient-primary)" }}
              />
              <div
                className="relative aspect-video rounded-2xl overflow-hidden border-2 border-primary/30 bg-card shadow-warm cursor-pointer md:cursor-default"
                onClick={() => setIsFullscreen(true)}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Detool.AI Website Showcase"
                />
              </div>

              <button
                onClick={() => setIsFullscreen(true)}
                className="mt-4 flex items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm md:hidden w-full"
              >
                <Maximize2 className="w-4 h-4" />
                <span>Tap video to watch fullscreen</span>
              </button>
            </div>
          </div>
        </div>
      </section>

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
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
              className="w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Detool.AI Website Showcase Fullscreen"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HowItWorksSection;
