import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import BookCallLink from "@/components/BookCallLink";

const posts = [
  {
    title: "The $500/Week Trick That Beauty Salons Keep Ignoring",
    date: "June 5, 2026",
    excerpt: "Deposits aren't just about protecting your time — they're a revenue stream. Here's the math on how 25 bookings a week at $20 each puts $2,000/month in your pocket before you even open your doors.",
    tag: "Revenue",
  },
  {
    title: "Why Nail Salons Lose 30% of Their Calls (And How to Fix It in 10 Minutes)",
    date: "May 28, 2026",
    excerpt: "Most beauty business owners don't realize how many calls they're actually missing. We analyzed over 500 salons — here's what we found, and the one automation that solves it instantly.",
    tag: "Automation",
  },
  {
    title: "How to Build a Loyal Client Base Without Spending a Dollar on Ads",
    date: "May 20, 2026",
    excerpt: "Your existing clients are your best growth asset. Loyalty programs, birthday campaigns, and re-engagement texts cost almost nothing to run — and they keep your chair full.",
    tag: "Retention",
  },
  {
    title: "Membership Revenue: Why the Smartest Lash Studios Are Switching to Subscriptions",
    date: "May 12, 2026",
    excerpt: "Predictable monthly revenue changes everything. We break down how lash studios are using membership tiers to lock in $2,000–$5,000/month in guaranteed bookings.",
    tag: "Memberships",
  },
  {
    title: "5-Star Reviews on Autopilot: The Exact Funnel We Use for Beauty Businesses",
    date: "May 4, 2026",
    excerpt: "Getting more Google reviews isn't about asking harder — it's about asking smarter. Here's the timing, the message, and the system that gets more reviews without annoying your clients.",
    tag: "Reviews",
  },
  {
    title: "Slow Tuesdays and Empty Chairs: The Campaign That Fills Them in 2 Hours",
    date: "April 26, 2026",
    excerpt: "Every salon has slow days. Most owners do nothing about it. Here's a proven SMS campaign framework that fills your schedule fast — without discounting your services.",
    tag: "Marketing",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="bg-detool-dark pt-40 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">The Beauty Business Blog</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">Practical advice for nail salons, lash studios, spas, and beauty pros who want more bookings and less stress.</p>
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
