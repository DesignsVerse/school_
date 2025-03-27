"use client";
import Image from "next/image";
import categoryData from "./brandData";
import { Category } from "@/types/category";
import { motion } from "framer-motion";
import { useState } from "react";

const Categories = () => {
  // Updated color palette with darker circle colors
  const colorPairs = [
    { 
      bg: "bg-blue-50", 
      border: "border-l-blue-500",
      text: "text-blue-600",
      hoverBg: "bg-blue-100",
      circle: "bg-blue-700" // Darker blue for circle
    },
    { 
      bg: "bg-emerald-50", 
      border: "border-l-emerald-500",
      text: "text-emerald-600",
      hoverBg: "bg-emerald-100",
      circle: "bg-emerald-700" // Darker emerald for circle
    },
    { 
      bg: "bg-amber-50", 
      border: "border-l-amber-500",
      text: "text-amber-600",
      hoverBg: "bg-amber-100",
      circle: "bg-amber-700" // Darker amber for circle
    },
    { 
      bg: "bg-violet-50", 
      border: "border-l-violet-500",
      text: "text-violet-600",
      hoverBg: "bg-violet-100",
      circle: "bg-violet-700" // Darker violet for circle
    },
    { 
      bg: "bg-rose-50", 
      border: "border-l-rose-500",
      text: "text-rose-600",
      hoverBg: "bg-rose-100",
      circle: "bg-rose-700" // Darker rose for circle
    },
  ];

  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
    },
  };

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Enhanced heading section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 rounded-full mb-4">
            <span className="text-blue-600 font-medium text-sm uppercase tracking-wider">
              Our Course Categories
            </span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Discover <span className="text-blue-600">Creative</span> Learning Paths
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our specialized courses designed to help you achieve your learning goals.
          </p>
        </motion.div>

        {/* Enhanced Category Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
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
                className={`relative overflow-hidden rounded-xl ${bg} ${border} border-l-4 h-52 transition-all duration-300 group`}
              >
                {/* Background overlay on hover */}
                {category.hoverImage && (
                  <div className={`absolute inset-0 transition-opacity duration-300 ${isHovered ? 'opacity-20' : 'opacity-0'}`}>
                    <Image
                      src={category.hoverImage}
                      alt={category.title}
                      fill
                      className="object-cover"
                      priority={index < 3}
                    />
                  </div>
                )}

                {/* Updated Circular Icon with darker color */}
                <motion.div
                  className={`absolute -left-8 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full ${circle} flex items-center justify-center z-10 shadow-md`}
                  animate={{
                    x: isHovered ? 10 : 0,
                    scale: isHovered ? 1.1 : 1,
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative w-12 h-12">
                    <Image
                      src={category.icon}
                      alt={category.title}
                      fill
                      className="filter brightness-0 invert transition-all duration-300"
                    />
                  </div>
                </motion.div>

                {/* Enhanced Content */}
                <div className="relative h-full pl-20 pr-6 flex flex-col justify-center z-10">
                  <motion.h3
                    className={`text-xl font-bold mb-2 ${isHovered ? 'text-white' : 'text-gray-900'}`}
                    animate={{ x: isHovered ? 5 : 0 }}
                  >
                    {category.title}
                  </motion.h3>
                  <motion.p
                    className={`text-sm ${isHovered ? 'text-gray-200' : 'text-gray-600'}`}
                    animate={{ x: isHovered ? 5 : 0 }}
                  >
                    {category.description}
                  </motion.p>
                  
                  {/* Enhanced Learn more button */}
                  <motion.div
                    className="mt-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className={`px-4 py-2 rounded-lg text-sm font-medium ${text.replace('text', 'bg')} text-white hover:opacity-90 transition flex items-center gap-2`}
                    >
                      Explore Courses
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </motion.div>
                </div>

                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br from-black/10 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Categories;