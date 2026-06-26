import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import BookCallLink from "@/components/BookCallLink";
import BlogPostCard from "@/components/blog/BlogPostCard";
import BlogCategoryNav from "@/components/blog/BlogCategoryNav";
import { blogPosts, blogCategories } from "@/data/blogPosts";

const SITE = "https://detool.ai";

const Blog = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "The Car Detailer Blog",
      description:
        "Practical advice for mobile detailers and detailing shops — leads, reviews, automation, marketing, and revenue.",
      url: `${SITE}/blog`,
      publisher: {
        "@type": "Organization",
        name: "Detool.AI",
        logo: { "@type": "ImageObject", url: `${SITE}/detool-logo.svg` },
      },
      blogPost: blogPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        datePublished: post.publishedAt,
        url: `${SITE}/blog/${post.slug}`,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title="Car Detailer Blog — Leads, Reviews & Marketing Tips | Detool.AI"
        description="Free guides for mobile detailers and detailing shops: get more Google reviews, capture missed calls, fill slow weeks, and grow revenue."
        path="/blog"
        jsonLd={jsonLd}
      />
      <Header />

      <section className="bg-detool-dark pt-40 pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4">The Car Detailer Blog</h1>
          <p className="text-white/70 text-xl max-w-2xl mx-auto">
            Practical advice for mobile detailers and detailing shops who want more leads, more reviews, and less phone
            tag.
          </p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <BlogCategoryNav />
        </div>
      </section>

      <section className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-sm font-bold text-gray-400 uppercase tracking-wide text-center mb-6">Browse by topic</h2>
          <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blogCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/blog/category/${category.slug}`}
                className="block bg-white border border-gray-200 rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all"
              >
                <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to put this into action?</h2>
          <p className="text-gray-500 text-lg mb-8">
            Stop reading about what works and start doing it. Book a free call and we'll build your system in 10 days.
          </p>
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
