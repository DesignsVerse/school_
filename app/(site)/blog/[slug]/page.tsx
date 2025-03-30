import Image from "next/image";
import SharePost from "@/components/Blog/SharePost";
import BlogListSidebar from "@/components/Blog/BlogListSidebar";
import BlogData from "@/components/Blog/blogData";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return BlogData.map((blog) => ({
    slug: blog.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = BlogData.find((blog) => blog.slug === params.slug);
  
  if (!blog) {
    return {
      title: "Blog Not Found",
      description: "The blog post you're looking for doesn't exist.",
    };
  }

  return {
    title: `${blog.title} | Your Site Name`,
    description: blog.description,
    openGraph: {
      images: [blog.mainImage || blog.image],
      publishedTime: blog.publishedAt,
    },
  };
}

export default function SingleBlogPage({ params }: PageProps) {
  const blog = BlogData.find((blog) => blog.slug === params.slug);

  if (!blog) {
    notFound();
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <article className="lg:w-2/3">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-96 w-full">
                <Image
                  src={blog.mainImage || blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                />
              </div>
              
              <div className="p-6 md:p-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  {blog.title}
                </h1>
                
                <div className="flex items-center gap-4 mb-6">
                  {blog.author && (
                    <div className="flex items-center gap-3">
                      {blog.author.image && (
                        <div className="relative h-10 w-10 rounded-full overflow-hidden">
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
                          <p className="text-sm text-gray-500">
                            {new Date(blog.publishedAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </p>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <span className="bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-light px-3 py-1 rounded-full text-sm font-medium">
                    {blog.category}
                  </span>
                </div>
                
                <div
                  className="prose max-w-none dark:prose-invert prose-headings:font-semibold prose-a:text-primary prose-img:rounded-lg"
                  dangerouslySetInnerHTML={{ __html: blog.body || blog.description }}
                />
                
                {blog.tags && blog.tags.length > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-semibold mb-2">Tags:</h3>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* <SharePost 
                  title={blog.title} 
                  url={`/blog/${blog.slug}`} 
                  className="mt-8" */}
                {/* /> */}
              </div>
            </div>
          </article>
          
          <aside className="lg:w-1/3">
            <BlogListSidebar />
          </aside>
        </div>
      </div>
    </section>
  );
}