import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import RobotLogo from "@/components/RobotLogo";

const LandingHero = () => {
  const scrollToForm = () => {
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-20" style={{ background: "#0f1b2d" }}>
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-end min-h-[85vh]">

          {/* LEFT — text */}
          <div className="py-16 self-center">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-white leading-[0.9] tracking-tight mb-8">
              Website Design &<br />
              Marketing<br />
              <span className="text-primary">For Beauty<br />Businesses.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-8 max-w-lg leading-relaxed">
              Cut the bulls**t — no agency has a miracle solution to all your problems. We'll give you the tools that work, but you need to commit to using them.
            </p>

            {/* Face stack + CTA */}
            <div className="flex items-center gap-5 mb-10 flex-wrap">
              <div className="flex -space-x-3">
                {["J","S","L","V","C"].map((letter, i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-primary border-2 border-white flex items-center justify-center text-white font-bold text-sm">
                    {letter}
                  </div>
                ))}
              </div>
              <Button
                onClick={scrollToForm}
                className="rounded-lg px-8 py-4 text-base font-bold bg-primary hover:bg-primary/90 shadow-lg"
              >
                Book A Call
              </Button>
            </div>

            {/* Rating badges */}
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <span className="text-sm font-black" style={{ color: "#4285F4" }}>G</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Google</p>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}</div>
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600 self-center" />
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center font-black text-xs text-gray-800">150+</div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Clients Served</p>
                  <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-primary text-primary" />)}</div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Robot standing full body at bottom, arms crossed */}
          <div className="hidden md:flex items-end justify-center h-full">
            <div className="relative" style={{ marginBottom: "-2px" }}>
              {/* Orange glow behind robot */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full opacity-20 bg-primary blur-3xl" />
              <RobotLogo size={420} className="relative z-10 drop-shadow-2xl" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LandingHero;
