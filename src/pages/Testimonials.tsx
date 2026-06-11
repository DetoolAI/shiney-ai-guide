import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import VideoTestimonialGrid from "@/components/landing/VideoTestimonialGrid";
import { Link } from "react-router-dom";

const writtenReviews = [
  { name: "Creme De La Creme N/LLC", rating: 5, date: "2 weeks ago", biz: "Nail Salon", text: "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!" },
  { name: "Vanessa Iheme", rating: 5, date: "a month ago", biz: "Beauty Business Owner", text: "I had a great experience with Detool AI. He is such a professional and affordable marketing agency! He offered 24/7 support, delivered on time, and did an amazing job." },
  { name: "Leah M", rating: 5, date: "a month ago", biz: "Local Business", text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it." },
];

const Testimonials = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4">Real Results. Real Reviews.</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Every review below is from a real client — not a testimonial we made up.</p>
        </div>
      </section>

      <VideoTestimonialGrid showSeeAll={false} />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-3xl font-black text-gray-900 text-center mb-10">Written Reviews</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {writtenReviews.map((r, i) => (
              <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6">
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-bold text-gray-900 text-sm">{r.name}</p>
                <p className="text-xs text-gray-400">{r.biz} · {r.date}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">
              See all reviews on Google →
            </a>
          </div>
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-white mb-4">Want results like these?</h2>
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
