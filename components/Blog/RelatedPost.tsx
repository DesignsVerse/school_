import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = ({ currentBlogId }: { currentBlogId: number }) => {
  // Filter out the current blog and take 3 related posts
  const relatedPosts = BlogData.filter((post) => post._id !== currentBlogId).slice(0, 3);

  return (
    <div className="mt-12 rounded-lg border border-gray-200 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-gray-800">
      <h4 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        Related Posts
      </h4>
      <div className="space-y-6">
        {relatedPosts.map((post) => (
          <div
            className="flex flex-wrap items-center gap-4 sm:flex-nowrap"
            key={post._id}
          >
            <div className="relative h-16 w-40 flex-shrink-0 overflow-hidden rounded-md">
              <Image
                src={post.mainImage || post.image || "/fallback-image.jpg"}
                alt={post.title}
                fill
                className="object-cover transition-transform hover:scale-105"
              />
            </div>
            <h5 className="text-base font-medium text-gray-900 transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={`/blog/${post.slug}`}>
                {post.title.length > 50 ? `${post.title.slice(0, 50)}...` : post.title}
              </Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RelatedPost