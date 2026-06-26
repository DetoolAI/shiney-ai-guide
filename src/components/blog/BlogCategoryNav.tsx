import { Link, useLocation } from "react-router-dom";
import { blogCategories } from "@/data/blogPosts";

const BlogCategoryNav = () => {
  const { pathname } = useLocation();
  const isAll = pathname === "/blog";

  return (
    <nav aria-label="Blog categories" className="flex flex-wrap justify-center gap-2 md:gap-3">
      <Link
        to="/blog"
        className={`text-sm font-semibold rounded-full px-4 py-2 transition-colors ${
          isAll ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
      >
        All posts
      </Link>
      {blogCategories.map((category) => {
        const isActive = pathname === `/blog/category/${category.slug}`;
        return (
          <Link
            key={category.slug}
            to={`/blog/category/${category.slug}`}
            className={`text-sm font-semibold rounded-full px-4 py-2 transition-colors ${
              isActive ? "bg-primary text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default BlogCategoryNav;
