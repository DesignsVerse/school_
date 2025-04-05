"use client";
import BlogItem from "./BlogItem";
import BlogData from "./blogData";
import { motion } from "framer-motion";
import Link from "next/link";

const Blog = () => {
  return (
    <section className="py-8 bg-gray-50 dark:bg-gray-900 sm:py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <div className="animate_top mx-auto text-center mb-6 sm:mb-15">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl xl:text-sectiontitle3"
          >
            Latest Blog Posts
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-1 text-sm text-gray-600 dark:text-gray-300 max-w-3xl mx-auto sm:mt-4 sm:text-lg"
          >
            Discover insightful articles, news, and updates from our team of experts.
          </motion.p>
        </div>
      </div>

      <div className="mx-auto mt-6 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0 sm:mt-15">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.slice(0, 3).map((blog) => (
            <BlogItem blog={blog} key={blog._id} />
          ))}
        </div>
      </div>

      <div className="text-center mt-6 sm:mt-15">
        <Link href="/blog" passHref>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black dark:bg-white text-white dark:text-black py-2 px-5 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300 sm:py-3.5 sm:px-7.5"
          >
            View All Articles
          </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default Blog;
