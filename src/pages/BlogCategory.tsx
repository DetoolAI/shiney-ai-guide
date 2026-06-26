import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";
import BookCallLink from "@/components/BookCallLink";
import BlogPostCard from "@/components/blog/BlogPostCard";
import BlogCategoryNav from "@/components/blog/BlogCategoryNav";
import { getCategoryBySlug, getPostsByCategory } from "@/data/blogPosts";

const SITE = "https://detool.ai";

const BlogCategory = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;

  if (!category) {
    return <Navigate to="/blog" replace />;
  }

  const posts = getPostsByCategory(category.slug);
  const path = `/blog/category/${category.slug}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.seoTitle,
      description: category.seoDescription,
      url: `${SITE}${path}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        { "@type": "ListItem", position: 3, name: category.name, item: `${SITE}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO title={category.seoTitle} description={category.seoDescription} path={path} jsonLd={jsonLd} />
      <Header />

      <section className="bg-detool-dark pt-40 pb-12">
        <div className="container mx-auto px-4 text-center">
          <nav aria-label="Breadcrumb" className="text-white/50 text-sm mb-6">
            <Link to="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white/80">{category.name}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">{category.name} for Car Detailers</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">{category.description}</p>
        </div>
      </section>

      <section className="py-8 bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <BlogCategoryNav />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
          {posts.length === 0 && (
            <p className="text-center text-gray-500">No posts in this category yet. Check back soon.</p>
          )}
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Want this built for your shop?</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
            Detool.AI sets up websites, automations, and review funnels for car detailers in about 10 days.
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

export default BlogCategory;
