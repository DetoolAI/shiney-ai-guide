import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import SEO from "@/components/SEO";

const reviews = [
  { name: "Jayden Gutierrez", text: "My experience with this marketing agency was a 10/10, definitely recommend.", date: "a day ago" },
  { name: "Leah M", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it.", date: "a month ago" },
  { name: "Vanessa Iheme", text: "I had a great experience with Detool Ai. Such a professional and affordable marketing agency. Offered 24/7 support, delivered on time, and did an amazing job.", date: "a month ago" },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="About — Detool.AI"
        description="Learn about Justin and the story behind Detool.AI — built to help service businesses stop losing leads."
        path="/about"
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-primary font-medium tracking-widest text-sm uppercase mb-4">The people behind it</p>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Built by someone who was tired of watching<br />
            <span className="text-primary italic font-serif">good businesses lose for dumb reasons.</span>
          </h1>
        </div>
      </section>

      {/* Justin's story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden border border-border shadow-md">
                  <img
                    src="/justin.png"
                    alt="Justin — Founder of Detool.AI"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-border rounded-full px-5 py-2 shadow-md whitespace-nowrap">
                  <span className="text-sm font-semibold text-foreground">Justin · Founder</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-5">Hey, I'm Justin.</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I started Detool.AI because I kept seeing the same thing — business owners working their asses off to get leads, then losing them because they couldn't respond fast enough or didn't have a decent website.
                </p>
                <p>
                  That's not a hustle problem. That's a systems problem. And it's 100% fixable.
                </p>
                <p>
                  So I built the tools that fix it. A real website that makes you look legit. Automated follow-up so you never miss a lead. Review requests that go out without you lifting a finger.
                </p>
                <p>
                  We're not some big agency with 50 employees. It's me and a small team that actually gives a damn about the businesses we work with. 150+ clients in, and we're just getting started.
                </p>
              </div>
              <Button asChild className="rounded-full px-8 mt-8 font-semibold shadow-warm">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-3">What clients say</h2>
            <p className="text-muted-foreground">Real reviews from real businesses.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-border rounded-2xl p-6 shadow-sm">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, si) => (
                    <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-2 pt-3 border-t border-border">
                  <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xs">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-sm font-medium"
            >
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-bold text-foreground mb-4">Ready to work together?</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Book a free 20-minute call. We'll talk about your business and figure out if we're a good fit — no pressure.
          </p>
          <Button asChild size="lg" className="rounded-full px-10 py-6 font-semibold shadow-warm">
            <Link to="/contact">Book A Free Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
