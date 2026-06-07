import { Star } from "lucide-react";

const reviews = [
  {
    name: "Jayden Gutierrez",
    rating: 5,
    date: "a day ago",
    text: "My experience with this marketing agency was a 10/10, definitely recommend."
  },
  {
    name: "Spencer Shadrach",
    rating: 5,
    date: "2 weeks ago",
    text: "We worked together & the communication was great. Would work together again."
  },
  {
    name: "Creme De La Creme N/LLC",
    rating: 5,
    date: "2 weeks ago",
    text: "Justin does an amazing job at paying attention to detail and at making sure he achieves client satisfaction. Incredibly professional website design! Look no further!"
  },
  {
    name: "Tito Greene",
    rating: 5,
    date: "a month ago",
    text: "Wonderful service and quite helpful I must say."
  },
  {
    name: "Leah M",
    rating: 5,
    date: "a month ago",
    text: "Detool AI is the real deal. Smart strategies, fast results, and clear communication. If you want marketing that actually converts, this is it."
  },
  {
    name: "Vanessa Iheme",
    rating: 5,
    date: "a month ago",
    text: "I had a great experience with Detool Ai. He is such a professional and affordable marketing agency!! He offered 24/7 support, delivered on time, and did an amazing job. I'm very happy with the results and would recommend him to anyone. I will definitely be working with him again in the near future!"
  }
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "fill-primary text-primary" : "text-border"}`}
      />
    ))}
  </div>
);

const ReviewsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-medium text-primary">5.0 on Google</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Are Saying
            </h2>
            <p className="text-muted-foreground text-lg">
              Real results from real businesses across the country.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4"
              >
                <StarRating rating={review.rating} />
                <p className="text-foreground text-sm leading-relaxed flex-1">
                  "{review.text}"
                </p>
                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">
                      {review.name[0]}
                    </div>
                    <span className="font-semibold text-foreground text-sm">{review.name}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="https://www.google.com/maps/place/Detool+ai/@40.6968967,-73.7422542,15z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              See all reviews on Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
