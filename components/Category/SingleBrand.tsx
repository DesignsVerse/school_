import React from "react";
import Image from "next/image";
import { Category } from "@/types/category"; // Import Category type instead of Brand
import { motion } from "framer-motion";

const SingleCategory = ({ category }: { category: Category }) => {
  const { icon, title, id, hoverImage } = category; // Adjusted to Category properties

  return (
    <motion.a
      variants={{
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 1, delay: id }}
      viewport={{ once: true }}
      href="#" // You can make this dynamic if Category has a link property
      className="animate_top max-w-full relative block h-10 w-[98px]" // Fixed typo: mx-w-full -> max-w-full
    >
      <Image
        className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
        src={icon} // Using 'icon' instead of 'image'
        alt={title} // Using 'title' instead of 'name'
        fill
      />
      <Image
        className="hidden opacity-50 transition-all duration-300 hover:opacity-100 dark:block"
        src={hoverImage || icon} // Using 'hoverImage' for dark mode, fallback to 'icon'
        alt={title}
        fill
      />
    </motion.a>
  );
};

export default SingleCategory;