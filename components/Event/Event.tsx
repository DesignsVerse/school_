"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import eventData from "@/components/Event/eventdata";
import SingleFeature from "@/components/Event/SingleFeature";

const Event: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const itemsPerPage = 12; // Set to 12 items per page
  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  const currentFeatures = eventData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top when changing pages
  };

  return (
    <section 
      id="events" 
      ref={ref}
      className="py-20 lg:py-25 xl:py-30 relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-c-1315   px-4 md:px-8 xl:px-0">
        {/* Custom Header Section */}

        {/* Event Cards with Staggered Animation */}
        <motion.div
          className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            {currentFeatures.map((feature, index) => (
              <motion.div
                key={`${feature.id}-${currentPage}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Pagination Controls */}
        {totalPages > 1 && (
          <motion.div 
            className="flex justify-center items-center mt-10 gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            {/* Previous Button */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 0}
              className={`px-4 py-2 rounded-full ${
                currentPage === 0 
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } transition-colors duration-300`}
            >
              Previous
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => handlePageChange(index)}
                  className={`w-10 h-10 rounded-full ${
                    currentPage === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  } transition-colors duration-300`}
                >
                  {index + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages - 1}
              className={`px-4 py-2 rounded-full ${
                currentPage === totalPages - 1
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-blue-500 text-white hover:bg-blue-600'
              } transition-colors duration-300`}
            >
              Next
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Event;