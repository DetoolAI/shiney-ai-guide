import { Star, Play } from "lucide-react";
import { Link } from "react-router-dom";

export type VideoTestimonial = {
  name: string;
  biz: string;
  quote: string;
};

const defaultTestimonials: VideoTestimonial[] = [
  {
    name: "Creme De La Creme N/LLC",
    biz: "Nail Salon",
    quote: "Incredibly professional website design! Look no further!",
  },
  {
    name: "Vanessa Iheme",
    biz: "Beauty Business Owner",
    quote: "Professional, affordable, delivered on time. Amazing results.",
  },
  {
    name: "Leah M",
    biz: "Local Business",
    quote: "Smart strategies, fast results, and clear communication.",
  },
  {
    name: "Jayden Gutierrez",
    biz: "Business Owner",
    quote: "My experience was a 10/10, definitely recommend.",
  },
  {
    name: "Spencer Shadrach",
    biz: "Service Business",
    quote: "Communication was great. Would work together again.",
  },
  {
    name: "Tito Greene",
    biz: "Business Owner",
    quote: "Wonderful service and quite helpful I must say.",
  },
];

type Props = {
  title?: string;
  subtitle?: string;
  testimonials?: VideoTestimonial[];
  showSeeAll?: boolean;
  dark?: boolean;
};

const VideoTestimonialGrid = ({
  title = "The proof is in the pudding... Let's see what our clients have to say",
  subtitle,
  testimonials = defaultTestimonials,
  showSeeAll = true,
  dark = false,
}: Props) => {
  return (
    <section className={`py-20 ${dark ? "bg-detool-dark" : "bg-detool-cream"}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2
              className={`text-3xl md:text-5xl font-black mb-4 leading-tight ${
                dark ? "text-white" : "text-gray-900"
              }`}
            >
              {title}
            </h2>
            {subtitle && (
              <p className={`text-lg max-w-2xl mx-auto ${dark ? "text-white/70" : "text-gray-500"}`}>
                {subtitle}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col"
              >
                <div className="relative aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-primary/40 flex items-center justify-center group cursor-pointer">
                  <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                    <Play className="w-6 h-6 text-primary fill-primary ml-1" />
                  </div>
                  <span className="absolute bottom-3 left-3 text-white/80 text-xs font-medium">
                    Client testimonial
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, si) => (
                      <Star key={si} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed flex-1 mb-4">"{t.quote}"</p>
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-white font-black text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.biz}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showSeeAll && (
            <div className="text-center mt-10">
              <Link
                to="/testimonials"
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-semibold transition-colors"
              >
                See All Testimonials →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoTestimonialGrid;
