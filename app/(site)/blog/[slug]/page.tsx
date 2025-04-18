import Image from "next/image";
import BlogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import SharePost from "@/components/Blog/SharePost";
import RelatedPost from "@/components/Blog/RelatedPost";
import Link from "next/link";

export async function generateStaticParams() {
  return BlogData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const blog = BlogData.find((blog) => blog.slug === params.slug);
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }
  return {
    title: `${blog.title} | Bethel Secondary School`,
    description: blog.description,
    openGraph: {
      images: [blog.mainImage || blog.image],
      publishedTime: blog.publishedAt,
    },
  };
}

export default function SingleBlogPage({ params }: { params: { slug: string } }) {
  const blog = BlogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="pt-8 pb-16 mt-40 lg:pt-12 lg:pb-20 bg-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Main Content */}
          <article className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="w-full h-64 sm:h-80 md:h-96 overflow-hidden">
              <Image
                src={blog.mainImage || blog.image}
                alt={blog.title}
                width={1200}
                height={630}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                {blog.title}
              </h1>

              {/* Meta Info (Author, Date, Category) */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-4">
                  {blog.author && (
                    <>
                      {blog.author.image && (
                        <div className="relative h-12 w-12 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-md">
                          <Image
                            src={blog.author.image}
                            alt={blog.author.name}
                            width={48}
                            height={48}
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          {blog.author.name}
                        </p>
                        {blog.publishedAt && (
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {new Date(blog.publishedAt).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </>
                  )}
                </div>
                <span className="inline-flex items-center bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light px-4 py-2 rounded-full text-sm font-medium">
                  {blog.category}
                </span>
              </div>

              {/* Blog Content */}
              <div className="prose prose-lg max-w-none dark:prose-invert text-gray-600 dark:text-gray-300">
                {blog.content.map((section, index) => (
                  <div key={index} className="mb-10 last:mb-0">
                    <h2
                      className={`font-semibold text-gray-900 dark:text-white ${
                        index === 0
                          ? "text-2xl sm:text-3xl"
                          : index === blog.content.length - 1
                          ? "text-xl sm:text-2xl"
                          : "text-xl sm:text-2xl"
                      } mt-8 mb-6`}
                    >
                      {section.heading}
                    </h2>
                    <div
                      className="leading-relaxed text-gray-700 dark:text-gray-300"
                      dangerouslySetInnerHTML={{ __html: section.description }}
                    />
                  </div>
                ))}
              </div>

              {/* SharePost */}
              <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
                <SharePost blog={blog} />
              </div>

              {/* RelatedPost */}
              <div className="pt-8">
                <RelatedPost currentBlogId={blog._id} />
              </div>
            </div>
          </article>

          {/* Sidebar (BlogListSidebar) */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 pb-4 border-b border-gray-200 dark:border-gray-700">
                  Recent Posts
                </h3>
                <div className="space-y-6">
                  {BlogData.slice(0, 4).map((post) => (
                    <Link
                      key={post._id}
                      href={`/blog/${post.slug}`}
                      className="group flex gap-4 items-start transition-colors hover:bg-gray-50 dark:hover:bg-gray-700/50 p-3 rounded-lg"
                    >
                      <div className="relative h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden shadow-sm">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={80}
                          height={80}
                          className="object-cover transition-transform group-hover:scale-110 duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-lg text-gray-900 dark:text-white group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h4>
                        {post.publishedAt && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {new Date(post.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </p>
                        )}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}