import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";
import SectionHeader from "@/components/Common/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Bethel Secondary School - Updates & Insights",
  description:
    "Explore the latest updates, news, and educational insights from Bethel Secondary School. Stay informed with our blog!",
  keywords:
    "Bethel Secondary School, school blog, education news, student updates, school insights, academic articles",
  robots: "index, follow",
  authors: [{ name: "Bethel Secondary School Team" }],
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/blog",
  },
  openGraph: {
    title: "Blog - Bethel Secondary School | News & Insights",
    description:
      "Read the latest blog posts from Bethel Secondary School about education, student life, and more.",
    images: [
      {
        url: "/images/blog-featured.jpg", // Placeholder
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School Blog",
      },
    ],
    url: "https://www.bethelsecondaryschool.com/blog",
    type: "website",
  },
};

const BlogPage = async () => {
  return (
    <>
  <SectionHeader title="Blog" breadcrumbPath="Blog" />
  {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {BlogData.map((post, key) => (
              <BlogItem key={key} blog={post} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default BlogPage;