import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
                <span className="text-sm font-medium text-primary">Who's behind Detool.AI</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
                I built this because I was tired of watching good businesses lose for the wrong reasons
              </h2>

              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  I'm Justin. I started Detool.AI after seeing the same thing over and over — business owners putting in real work to get leads, then losing them because follow-up was too slow, too inconsistent, or just didn't happen.
                </p>
                <p>
                  That's not a skill problem. That's a systems problem. And it's fixable.
                </p>
                <p>
                  So I built the system myself. One that responds in seconds, follows up automatically, and books appointments while you sleep. 150+ businesses are running on it right now. Yours can too.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="bg-gradient-primary hover:opacity-90 shadow-glow" asChild>
                  <Link to="/contact">Work With Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
