"use client";
import React, { useState, useEffect } from "react";
import featuresData from "./featuresData";
import SingleFeature from "./SingleFeature";
import SectionHeader from "../Common/SectionHeader";

const Feature: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Show 3 cards per page
  const totalPages = Math.ceil(featuresData.length / itemsPerPage);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === totalPages - 1 ? 0 : prevPage + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  // Handle dot click
  const handleDotClick = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle scroll-to-top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate the start and end indices for the current page
  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFeatures = featuresData.slice(startIndex, endIndex);

  return (
    <section id="features" className="py-20 lg:py-25 xl:py-30 relative">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Section Title */}
        <SectionHeader
          headerInfo={{
            title: "OUR UPCOMING EVENTS",
            subtitle: "Educate & Elevate: Events That Inspire Learning",
            description: "",
          }}
        />

        {/* Event Cards */}
        <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          {currentFeatures.map((feature) => (
            <SingleFeature key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Slider Dots */}
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                currentPage === index ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Go To Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-10 right-10 bg-orange-500 text-white px-4 py-2 rounded-full transform rotate-90 flex items-center gap-2 hover:bg-orange-600 transition duration-300"
      >
        <span className="transform -rotate-90">Go To Top</span>
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

export default Feature;