// components/Blog/BlogListSidebar.tsx
import Image from "next/image";
import Link from "next/link";

type BlogPost = {
  title: string;
  imageSrc: string;
  date: string;
  category: string;
};

const blogPosts: BlogPost[] = [
  {
    title: "Top 5 Tips for Effective Learning",
    imageSrc: "/images/blog/blog-01.png",
    date: "August 10, 2023",
    category: "Education",
  },
  {
    title: "How to Stay Productive While Studying",
    imageSrc: "/images/blog/blog-02.png",
    date: "July 25, 2023",
    category: "Productivity",
  },
  {
    title: "The Future of Online Education",
    imageSrc: "/images/blog/blog-03.png",
    date: "June 15, 2023",
    category: "Technology",
  },
];

const BlogListSidebar = () => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Recent Posts
      </h4>
      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <div key={index} className="flex gap-4">
            <Image
              src={post.imageSrc}
              alt={post.title}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex-1">
              <h5 className="text-lg font-medium text-black dark:text-white hover:text-primary transition-all duration-300">
                <Link href="#">{post.title}</Link>
              </h5>
              <p className="text-sm text-gray-500">
                {post.date} | {post.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListSidebar;