import { MessageSquare, Zap, Calendar } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-muted/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            How Detool.AI Works
          </h2>
          
          {/* Video container */}
          <div className="aspect-video rounded-2xl overflow-hidden border border-border bg-card shadow-card">
            <iframe 
              src="https://drive.google.com/file/d/1SfJkcxYSs__tcZQOp-_yfyWc0Io8FiYi/preview"
              className="w-full h-full"
              allow="autoplay"
              allowFullScreen
            />
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
