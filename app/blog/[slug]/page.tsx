import Image from "next/image";
import BlogListSidebar from "@/components/Blog/BlogListSidebar";
import BlogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

export async function generateStaticParams() {
  return BlogData.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: any };
}): Promise<Metadata> {
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

interface PageProps {
  params: { slug: string };
}

export default function SingleBlogPage({ params }: PageProps) {
  const blog = BlogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6 md:p-10">
          {/* Image */}
          <div className="w-full rounded-2xl overflow-hidden shadow-md mb-8">
            <Image
              src={blog.mainImage || blog.image}
              alt={blog.title}
              width={800}
              height={450}
              className="object-cover w-full h-64 rounded-2xl transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="text-center space-y-6">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
              {blog.title}
            </h1>

            {/* Author Info */}
            {blog.author && (
              <div className="flex flex-col items-center gap-3">
                {blog.author.image && (
                  <div className="relative h-14 w-14 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.name}
                      fill
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
              </div>
            )}

            {/* Category */}
            <span className="inline-block bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light px-4 py-1.5 rounded-full text-sm font-medium">
              {blog.category}
            </span>

            {/* Body */}
            <div
              className="prose max-w-none dark:prose-invert mx-auto
                        prose-headings:font-semibold prose-a:text-primary
                        prose-a:no-underline prose-a:border-b-2 prose-a:border-primary/30 hover:prose-a:border-primary
                        prose-img:rounded-xl prose-img:shadow-lg
                        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:bg-gray-100 dark:prose-blockquote:bg-gray-700/20
                        text-gray-600 dark:text-gray-300"
              dangerouslySetInnerHTML={{
                __html: blog.body || blog.description,
              }}
            />

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex flex-wrap justify-center gap-3">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-white dark:bg-gray-700 px-3 py-1 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </article>
      </div>
    </section>
  );
}
