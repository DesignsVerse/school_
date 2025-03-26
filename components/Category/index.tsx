"use client";
import Image from "next/image";
import categoryData from "./brandData"; // Adjust the path if needed
import { Category } from "@/types/category"; // Adjust the path if needed

const Categories: React.FC = () => {
  // Function to handle scroll-to-top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-16 bg-white relative">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Heading */}
        <div className="text-center mb-12">
          <h4 className="text-blue-600 text-lg font-medium mb-2">
            Our Course Categories
          </h4>
          <h2 className="text-4xl font-bold text-gray-800">
            Creative Category For Students.
          </h2>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categoryData.map((category: Category) => (
            <div
              key={category.id}
              className="group relative bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{
                backgroundImage: "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Hover Image (visible on hover) */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
                style={{
                  backgroundImage: `url(${category.hoverImage})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              {/* Card Content */}
              <div className="relative z-10">
                <div
                  className={`w-16 h-16 rounded-full ${category.bgColor} flex items-center justify-center mb-4`}
                >
                  <Image
                    src={category.icon}
                    alt={category.title}
                    width={32}
                    height={32}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* To Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-10 right-10 bg-orange-500 text-white px-4 py-2 rounded-full transform rotate-90 flex items-center gap-2 hover:bg-orange-600 transition duration-300"
      >
        <span className="transform -rotate-90">To Top</span>
        <svg
          className="w-5 h-5 transform -rotate-90"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </section>
  );
};

export default Categories;