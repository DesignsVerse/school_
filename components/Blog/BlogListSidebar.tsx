import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

export default function BlogListSidebar() {
  const recentPosts = BlogData.slice(0, 3);

  return (
    <div className="sticky top-20 bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Recent Posts
      </h3>
      
      <div className="space-y-4">
        {recentPosts.map((post) => (
          <Link 
            key={post._id} 
            href={`/blog/${post.slug}`}
            className="group flex gap-4 items-start"
          >
            <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
            </div>
            <div>
              <h4 className="font-medium text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h4>
              {post.publishedAt && (
                <p className="text-xs text-gray-500 mt-1">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}