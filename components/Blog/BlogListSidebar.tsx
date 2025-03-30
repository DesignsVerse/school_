import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const BlogListSidebar = () => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Recent Posts
      </h4>
      <div className="space-y-6">
        {BlogData.slice(0, 3).map((post) => (
          <div key={post._id} className="flex gap-4">
            <Image
              src={post.image || "/fallback-image.jpg"}
              alt={post.title}
              width={100}
              height={100}
              className="rounded-md object-cover"
            />
            <div className="flex-1">
              <h5 className="text-lg font-medium text-black dark:text-white hover:text-primary transition-all duration-300">
                <Link href={post.link}>{post.title}</Link>
              </h5>
              <p className="text-sm text-gray-500">
                {/* {new Date(post.publishedAt).toLocaleDateString()} | {post.category} */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogListSidebar;