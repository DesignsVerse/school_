import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

interface BlogItemProps {
  blog: Blog;
}

export default function BlogItem({ blog }: BlogItemProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-28 w-full overflow-hidden sm:h-48">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-3 sm:p-6">
        <div className="flex items-center gap-1 mb-1 sm:gap-2 sm:mb-3">
          <span className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-[10px] font-medium px-1.5 py-0.5 rounded sm:text-xs sm:px-2.5 sm:py-1">
            {blog.category}
          </span>
          {blog.publishedAt && (
            <time
              dateTime={blog.publishedAt}
              className="text-[10px] text-gray-500 dark:text-gray-400 sm:text-xs"
            >
              {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </time>
          )}
        </div>

        <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1 line-clamp-2 sm:text-xl sm:mb-3">
          <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
            {blog.title}
          </Link>
        </h3>

        <p className="text-gray-600 dark:text-gray-300 text-xs mb-2 line-clamp-2 sm:text-sm sm:mb-4 sm:line-clamp-3">
          {blog.description}
        </p>

        {blog.author && (
          <div className="flex items-center gap-1 mt-2 sm:gap-3 sm:mt-4">
            {blog.author.image && (
              <div className="relative h-5 w-5 rounded-full overflow-hidden sm:h-8 sm:w-8">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-xs text-gray-700 dark:text-gray-300 sm:text-sm">
              {blog.author.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
