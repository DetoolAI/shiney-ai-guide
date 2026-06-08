import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SEO from "@/components/SEO";

const reviews = [
  { name: "Jayden Gutierrez", rating: 5, date: "a day ago", text: "My experience with this marketing agency was a 10/10, definitely recommend." },
  { name: "Spencer Shadrach", rating: 5, date: "2 weeks ago", text: "We worked together & the communication was great. Would work together again." },
  { name: "Creme De La Creme N/LLC", rating: 5, date: "2 weeks ago", text: "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!" },
  { name: "Tito Greene", rating: 5, date: "a month ago", text: "Wonderful service and quite helpful I must say." },
  { name: "Leah M", rating: 5, date: "a month ago", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it." },
  { name: "Vanessa Iheme", rating: 5, date: "a month ago", text: "I had a great experience with Detool Ai. He is such a professional and affordable marketing agency!! He offered 24/7 support, delivered on time, and did an amazing job. I'm very happy with the results and would recommend him to anyone. I will definitely be working with him again in the near future!" },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEO title="Testimonials — Detool.AI" description="Real reviews from real clients of Detool.AI. See what businesses say about our website design and automation services." path="/testimonials" />
      <Header />

      <section className="pt-32 pb-16" style={{ background: "#0f1b2d" }}>
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            The proof is in the pudding.
          </h1>
          <p className="text-xl text-gray-400">Let's see what our clients have to say.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-center justify-center gap-8 mb-16 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white border border-gray-200 shadow flex items-center justify-center">
                <span className="text-sm font-black" style={{ color: "#4285F4" }}>G</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 font-medium">Google Reviews</p>
                <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}</div>
              </div>
            </div>
            <div className="h-10 w-px bg-gray-200" />
            <p className="text-gray-500 font-medium">150+ businesses served · All 5-star reviews</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {reviews.map((r, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex gap-0.5 mb-3">
                  {[...Array(r.rating)].map((_, si) => <Star key={si} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">{r.name[0]}</div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                    <p className="text-xs text-gray-400">{r.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline text-sm">
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-4xl font-black text-gray-900 mb-4">Ready to be next?</h2>
          <p className="text-gray-500 text-lg mb-8">Book a free call and let's build something that gets you results too.</p>
          <Button asChild size="lg" className="rounded-lg px-10 py-6 font-bold shadow-md">
            <Link to="/contact">Book A Free Call</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Testimonials;
