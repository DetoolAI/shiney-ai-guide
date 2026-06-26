import { ReactNode } from "react";
import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import { Check, Star } from "lucide-react";
import BookCallLink from "@/components/BookCallLink";

type Step = { title: string; desc: string };

type Props = {
  label?: string;
  title: string;
  subtitle: string;
  demoLabel: string;
  benefits: string[];
  steps?: Step[];
  testimonial?: { quote: string; author: string; biz?: string };
  ctaTitle?: string;
  ctaSubtitle?: string;
  children?: ReactNode;
};

const FeaturePageLayout = ({
  label = "Feature",
  title,
  subtitle,
  demoLabel,
  benefits,
  steps,
  testimonial,
  ctaTitle = "Ready to get started?",
  ctaSubtitle = "Book a free call and we'll show you a live demo built for your detailing business.",
  children,
}: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/60 font-medium mb-2 uppercase tracking-wide text-sm">{label}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 leading-tight">
            {title}
          </h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">{subtitle}</p>
        </div>
      </section>

      <section className="py-20 bg-detool-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="aspect-video rounded-2xl bg-gradient-to-br from-detool-dark via-gray-800 to-primary/50 flex items-center justify-center shadow-xl">
            <span className="text-white/90 font-bold text-xl md:text-2xl">{demoLabel} Demo</span>
          </div>
        </div>
      </section>

      {children && (
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">{children}</div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-start gap-3 bg-detool-cream border border-gray-200 rounded-xl p-4">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{b}</span>
              </div>
            ))}
          </div>

          {steps && steps.length > 0 && (
            <>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">How it works</h2>
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {steps.map((s, i) => (
                  <div key={i} className="bg-detool-cream border border-gray-200 rounded-2xl p-6 text-center">
                    <div className="text-4xl font-black text-primary/20 mb-3">0{i + 1}</div>
                    <h3 className="font-bold text-gray-900 mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </>
          )}

          {testimonial && (
            <div className="bg-detool-cream border border-gray-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
              <div className="flex justify-center gap-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <blockquote className="text-gray-700 text-lg leading-relaxed italic mb-4">
                "{testimonial.quote}"
              </blockquote>
              <p className="text-gray-500 text-sm">
                — {testimonial.author}
                {testimonial.biz ? `, ${testimonial.biz}` : ""}
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="bg-detool-dark py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">{ctaTitle}</h2>
          <p className="text-white/70 text-lg mb-8 max-w-xl mx-auto">{ctaSubtitle}</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default FeaturePageLayout;
