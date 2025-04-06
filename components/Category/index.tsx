"use client";
import Image from "next/image";
import categoryData from "./brandData";
import { Category } from "@/types/category";
import { motion } from "framer-motion";
import { useState } from "react";

const Categories = () => {
  const colorPairs = [
    { bg: "bg-blue-50", border: "border-blue-500", text: "text-blue-600", hoverBg: "bg-blue-100", circle: "bg-blue-600" },
    { bg: "bg-emerald-50", border: "border-emerald-500", text: "text-emerald-600", hoverBg: "bg-emerald-100", circle: "bg-emerald-600" },
    { bg: "bg-amber-50", border: "border-amber-500", text: "text-amber-600", hoverBg: "bg-amber-100", circle: "bg-amber-600" },
    { bg: "bg-violet-50", border: "border-violet-500", text: "text-violet-600", hoverBg: "bg-violet-100", circle: "bg-violet-600" },
    { bg: "bg-rose-50", border: "border-rose-500", text: "text-rose-600", hoverBg: "bg-rose-100", circle: "bg-rose-600" },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.02, transition: { duration: 0.2 } },
  };

  return (
    <section className="py-8 md:py-12 lg:py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 m-10 md:mb-12"
        >
          <span className="inline-block px-3 py-1 bg-blue-100 rounded-full text-blue-600 font-medium text-xs md:text-sm uppercase tracking-wide mb-3">
            Our School Services
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            Discover <span className="text-blue-600">Creative</span> Learnings
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
            Explore our specialized services designed to help you achieve your career goals.
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1   sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {categoryData.map((category: Category, index: number) => {
            const { bg, border, text, hoverBg, circle } = colorPairs[index % colorPairs.length];
            const isHovered = hoveredItem === index;

            return (
              <motion.div
                key={category.id}
                variants={itemVariants}
                whileHover="hover"
                onMouseEnter={() => setHoveredItem(index)}
                onMouseLeave={() => setHoveredItem(null)}
                className={`relative rounded-lg ${bg} border ${border} p-4 md:p-6 h-48 md:h-56 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
              >
                {/* Circle Icon */}
                <motion.div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-full ${circle} flex items-center justify-center mb-4`}
                  animate={{ scale: isHovered ? 1.1 : 1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 9H9V9h10v2zm-4 4H9v-2h6v2zm4-8H9V5h10v2z" />
                  </svg>
                </motion.div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className={`text-base md:text-lg font-semibold ${text}`}>
                    {category.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-sm line-clamp-3">
                    {category.description}
                  </p>
                </div>

                {/* Hover Overlay */}
                {category.hoverImage && (
                  <div
                    className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <Image
                      src={category.hoverImage}
                      alt={category.title}
                      fill
                      className="object-cover opacity-30"
                      priority={index < 3}
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Categories;