import { Link, useParams, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import LandingFooter from "@/components/landing/LandingFooter";
import SEO from "@/components/SEO";
import BookCallLink from "@/components/BookCallLink";
import BlogPostCard from "@/components/blog/BlogPostCard";
import {
  getPostBySlug,
  getCategoryBySlug,
  getCategoryName,
  getPostsByCategory,
} from "@/data/blogPosts";

const SITE = "https://detool.ai";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const category = getCategoryBySlug(post.categorySlug);
  const categoryName = getCategoryName(post.categorySlug);
  const path = `/blog/${post.slug}`;
  const relatedPosts = getPostsByCategory(post.categorySlug)
    .filter((p) => p.slug !== post.slug)
    .slice(0, 2);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      datePublished: post.publishedAt,
      dateModified: post.publishedAt,
      author: { "@type": "Organization", name: "Detool.AI", url: SITE },
      publisher: {
        "@type": "Organization",
        name: "Detool.AI",
        logo: { "@type": "ImageObject", url: `${SITE}/detool-logo.svg` },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${path}` },
      articleSection: categoryName,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE },
        { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE}/blog` },
        {
          "@type": "ListItem",
          position: 3,
          name: categoryName,
          item: `${SITE}/blog/category/${post.categorySlug}`,
        },
        { "@type": "ListItem", position: 4, name: post.title, item: `${SITE}${path}` },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={`${post.title} | Detool.AI Blog`}
        description={post.excerpt}
        path={path}
        ogType="article"
        jsonLd={jsonLd}
      />
      <Header />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <nav aria-label="Breadcrumb" className="text-gray-400 text-sm mb-8">
              <Link to="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link to="/blog" className="hover:text-primary transition-colors">
                Blog
              </Link>
              <span className="mx-2">/</span>
              <Link to={`/blog/category/${post.categorySlug}`} className="hover:text-primary transition-colors">
                {categoryName}
              </Link>
            </nav>

            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <Link
                to={`/blog/category/${post.categorySlug}`}
                className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 hover:bg-primary/20 transition-colors"
              >
                {categoryName}
              </Link>
              <time className="text-sm text-gray-400" dateTime={post.publishedAt}>
                {post.date}
              </time>
            </div>

            <h1 className="text-3xl md:text-5xl font-black text-gray-900 leading-tight mb-8">{post.title}</h1>

            <div className="prose prose-gray max-w-none">
              {post.content.map((paragraph, i) => (
                <p key={i} className="text-gray-600 text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {category && (
              <p className="text-sm text-gray-400 mt-10 pt-8 border-t border-gray-100">
                More in{" "}
                <Link to={`/blog/category/${category.slug}`} className="text-primary font-medium hover:underline">
                  {category.name}
                </Link>
                : {category.description}
              </p>
            )}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && (
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Related articles</h2>
            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
              {relatedPosts.map((related) => (
                <BlogPostCard key={related.slug} post={related} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-4">Ready to put this into action?</h2>
          <p className="text-gray-500 text-lg mb-8 max-w-2xl mx-auto">
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

export default BlogPost;
