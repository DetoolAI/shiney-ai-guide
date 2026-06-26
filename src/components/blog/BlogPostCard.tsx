import { Link } from "react-router-dom";
import type { BlogPost } from "@/data/blogPosts";
import { getCategoryName } from "@/data/blogPosts";

interface BlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({ post }: BlogPostCardProps) => {
  const categoryName = getCategoryName(post.categorySlug);

  return (
    <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm flex flex-col">
      <Link
        to={`/blog/category/${post.categorySlug}`}
        className="bg-gray-50 h-40 flex items-center justify-center border-b border-gray-200 hover:bg-gray-100 transition-colors"
        aria-label={`View ${categoryName} articles`}
      >
        <span className="text-gray-400 text-sm font-semibold uppercase tracking-wide">{categoryName}</span>
      </Link>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <Link
            to={`/blog/category/${post.categorySlug}`}
            className="text-xs font-semibold text-primary bg-primary/10 rounded-full px-3 py-1 hover:bg-primary/20 transition-colors"
          >
            {categoryName}
          </Link>
          <time className="text-xs text-gray-400" dateTime={post.publishedAt}>
            {post.date}
          </time>
        </div>
        <h2 className="font-bold text-gray-900 text-lg leading-snug mb-3">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">{post.excerpt}</p>
        <Link to={`/blog/${post.slug}`} className="text-primary font-semibold text-sm hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
};

export default BlogPostCard;
