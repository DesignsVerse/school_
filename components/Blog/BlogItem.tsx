import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

interface BlogItemProps {
  blog: Blog;
}

export default function BlogItem({ blog }: BlogItemProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light text-xs font-medium px-2.5 py-1 rounded">
            {blog.category}
          </span>
          {blog.publishedAt && (
            <time 
              dateTime={blog.publishedAt}
              className="text-xs text-gray-500 dark:text-gray-400"
            >
              {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </time>
          )}
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
          <Link href={`/blog/${blog.slug}`} className="hover:text-primary transition-colors">
            {blog.title}
          </Link>
        </h3>
        
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
          {blog.description}
        </p>
        
        {blog.author && (
          <div className="flex items-center gap-3 mt-4">
            {blog.author.image && (
              <div className="relative h-8 w-8 rounded-full overflow-hidden">
                <Image
                  src={blog.author.image}
                  alt={blog.author.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-sm text-gray-700 dark:text-gray-300">
              {blog.author.name}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}