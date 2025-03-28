import React from 'react'

const page = () => {
  return (
    <div>
      
    </div>
  )
}

export default page

// import Image from "next/image";
// import SharePost from "@/components/Blog/SharePost";
// import BlogListSidebar from "@/components/Blog/BlogListSidebar";
// import BlogData from "@/components/Blog/blogData";
// import { Blog } from "@/types/blog";

// interface PageProps {
//   params: { slug: string };
// }

// // Generate static params for SSG
// export async function generateStaticParams() {
//   return BlogData.map((blog) => ({
//     slug: blog._id.toString(),
//   }));
// }

// // Metadata generation
// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const blog = BlogData.find((b) => b._id.toString() === params.slug);
//   if (!blog) {
//     return {
//       title: "Blog Not Found",
//       description: "This blog post could not be found.",
//     };
//   }
//   return {
//     title: `${blog.title} - Solid SaaS Boilerplate`,
//     description: blog.description,
//   };
// }

// // Page component with type assertion
// const SingleBlogPage = ({ params }: PageProps) => {
//   const blog = BlogData.find((b) => b._id.toString() === params.slug);

//   if (!blog) {
//     return (
//       <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//         <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//           <h2 className="text-3xl font-semibold text-black dark:text-white">
//             Blog Not Found
//           </h2>
//           <p className="mt-4 text-gray-600 dark:text-gray-300">
//             Sorry, the blog post you are looking for does not exist.
//           </p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section className="pb-20 pt-35 lg:pb-25 lg:pt-45 xl:pb-30 xl:pt-50">
//       <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
//         <div className="flex flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
//           <div className="lg:w-2/3">
//             <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
//               <div className="mb-10 w-full overflow-hidden">
//                 <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
//                   <Image
//                     src={blog.mainImage || blog.image}
//                     alt={blog.title}
//                     fill
//                     className="rounded-md object-cover object-center"
//                   />
//                 </div>
//               </div>
//               <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
//                 {blog.title}
//               </h2>
//               <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5">
//                 <li>
//                   <span className="text-black dark:text-white">Author: </span>
//                   {blog.author?.name || "Unknown"}
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">Published On: </span>
//                   {blog.publishedAt || "N/A"}
//                 </li>
//                 <li>
//                   <span className="text-black dark:text-white">Category: </span>
//                   {blog.category}
//                 </li>
//               </ul>
//               <div className="blog-details">
//                 <p>{blog.body || blog.description}</p>
//               </div>
//               <SharePost />
//             </div>
//           </div>
//           <div className="md:w-1/2 lg:w-[32%]">
//             <BlogListSidebar />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// } 

// export default SingleBlogPage;