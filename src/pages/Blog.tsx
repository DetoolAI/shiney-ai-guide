import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import BookCallLink from "@/components/BookCallLink";

const posts = [
  {
    title: "The $800/Month Trick Mobile Detailers Keep Ignoring",
    date: "June 5, 2026",
    excerpt: "One extra detailing job per week at $200 pays for your entire marketing system. Here's the math — and why missed calls are costing you more than you think.",
    tag: "Revenue",
  },
  {
    title: "Why Detailers Lose 30% of Their Calls (And How to Fix It in 10 Minutes)",
    date: "May 28, 2026",
    excerpt: "You're on a job. The phone rings. They call the next detailer on Google. We analyzed hundreds of detailing businesses — here's the one automation that fixes it instantly.",
    tag: "Automation",
  },
  {
    title: "How to Get More Google Reviews Without Begging",
    date: "May 20, 2026",
    excerpt: "Google Maps is everything for detailers. Automated review requests after every job stack 5-star reviews while you focus on the cars.",
    tag: "Reviews",
  },
  {
    title: "Slow Week? The SMS Campaign That Fills Your Schedule in 2 Hours",
    date: "May 12, 2026",
    excerpt: "Every detailer has slow weeks. Most do nothing. Here's a proven one-click campaign that brings past customers back — without slashing your prices.",
    tag: "Marketing",
  },
  {
    title: "5-Star Reviews on Autopilot: The Exact Funnel We Use for Detailers",
    date: "May 4, 2026",
    excerpt: "Getting more Google reviews isn't about asking harder — it's about asking at the right time. Here's the system that works for auto detailing businesses.",
    tag: "Reviews",
  },
  {
    title: "Quote Forms vs. Phone Tag: Why Detailers Need Both",
    date: "April 26, 2026",
    excerpt: "A professional website with a quote form captures leads 24/7. Pair it with missed-call text-back and you never lose a hot lead again.",
    tag: "Leads",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">The Car Detailer Blog</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Practical advice for mobile detailers and detailing shops who want more leads, more reviews, and less phone tag.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
                <div className="bg-gray-50 h-40 flex items-center justify-center border-b border-gray-200">
                  <span className="text-gray-300 text-sm font-medium">{post.tag}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1">{post.tag}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-snug mb-3">{post.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
                  <span className="text-primary font-semibold text-sm hover:underline cursor-pointer">Read more →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to put this into action?</h2>
          <p className="text-gray-500 text-lg mb-8">Stop reading about what works and start doing it. Book a free call and we'll build your system in 10 days.</p>
          <BookCallLink className="inline-flex items-center justify-center bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors shadow-md px-10 py-4 text-lg">
            Book A Free Call
          </BookCallLink>
        </div>
      </section>

      <LandingFooter />
    </div>
  );
};

export default Blog;
