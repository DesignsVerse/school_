// BlogItem.tsx
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";

const BlogItem = ({ blog }: { blog: Blog }) => {
  const { title, description, image, category, link } = blog;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="p-6">
        <span className="inline-block bg-pink-100 text-pink-600 dark:bg-pink-900 dark:text-pink-300 text-xs font-semibold px-3 py-1 rounded-full mb-4">
          {category || "Uncategorized"}
        </span>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description}
        </p>
        <Link href={`/blog/${blog.slug}`}>
          <span className="text-orange-500 font-semibold text-sm flex items-center gap-2 hover:text-orange-600 transition">
            Read More
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;