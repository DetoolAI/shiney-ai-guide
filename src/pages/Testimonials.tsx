import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

const reviews = [
  { name: "Creme De La Creme N/LLC", rating: 5, date: "2 weeks ago", biz: "Nail Salon", text: "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!" },
  { name: "Vanessa Iheme", rating: 5, date: "a month ago", biz: "Beauty Business Owner", text: "I had a great experience with Detool AI. He is such a professional and affordable marketing agency! He offered 24/7 support, delivered on time, and did an amazing job. I'm very happy with the results and would definitely be working with him again." },
  { name: "Leah M", rating: 5, date: "a month ago", biz: "Local Business", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it." },
  { name: "Jayden Gutierrez", rating: 5, date: "a day ago", biz: "Business Owner", text: "My experience with this marketing agency was a 10/10, definitely recommend." },
  { name: "Spencer Shadrach", rating: 5, date: "2 weeks ago", biz: "Service Business", text: "We worked together and the communication was great. Would work together again." },
  { name: "Tito Greene", rating: 5, date: "a month ago", biz: "Business Owner", text: "Wonderful service and quite helpful I must say." },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section style={{ background: "#0f1b2d" }} className="pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />)}
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Real Results. Real Reviews.</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Every review below is from a real client — not a testimonial we made up. These are people who trusted us with their business.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {reviews.map((r, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex flex-col">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(r.rating)].map((_, si) => <Star key={si} className="w-4 h-4 fill-primary text-primary" />)}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{r.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm flex-shrink-0">{r.name[0]}</div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                      <p className="text-xs text-gray-400">{r.biz} · {r.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center">
              <a href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
                See all reviews on Google →
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Want results like these?</h2>
          <p className="text-gray-500 text-lg mb-8">Book a free 20-minute call and we'll show you exactly what we'd build for your salon.</p>
          <Link to="/book-a-call" className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </Link>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Testimonials;
