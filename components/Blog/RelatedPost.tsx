import React from "react";
import Image from "next/image";
import Link from "next/link";
import BlogData from "./blogData";

const RelatedPost = () => {
  return (
    <div className="animate_top rounded-md border border-stroke bg-white p-9 shadow-solid-13 dark:border-strokedark dark:bg-blacksection">
      <h4 className="mb-7.5 text-2xl font-semibold text-black dark:text-white">
        Related Posts
      </h4>
      <div>
        {BlogData.slice(0, 3).map((post) => (
          <div
            className="mb-7.5 flex flex-wrap gap-4 xl:flex-nowrap 2xl:gap-6"
            key={post._id}
          >
            <div className="relative h-18 w-45">
              <Image
                src={post.mainImage || post.image || "/fallback-image.jpg"}
                alt={post.title}
                width={180}
                height={72}
                className="rounded-md object-cover"
              />
            </div>
            <h5 className="text-md font-medium text-black transition-all duration-300 hover:text-primary dark:text-white dark:hover:text-primary">
              <Link href={post.link}>{post.title.slice(0, 40)}...</Link>
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPost;