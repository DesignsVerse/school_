"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import eventData from "./eventdata";
import SingleFeature from "./SingleFeature";

const Event: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const itemsPerPage = 3;
  const totalPages = Math.ceil(eventData.length / itemsPerPage);

  // Auto-slide with pause on hover
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && inView) {
      interval = setInterval(() => {
        setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, totalPages, inView]);

  const handleDotClick = (page: number) => {
    setCurrentPage(page);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const currentFeatures = eventData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const dotVariants = {
    inactive: { scale: 1 },
    active: { scale: 1.3 },
  };

  return (
    <section 
      id="events" 
      ref={ref}
      className="py-20 lg:py-25 xl:py-30 relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Custom Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-15"
        >
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
            OUR EVENTS
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-4">
            Upcoming <span className="text-blue-600">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our upcoming events designed to inspire learning and growth
          </p>
        </motion.div>

        {/* Event Cards with Staggered Animation */}
        <motion.div
          className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            {currentFeatures.map((feature) => (
              <motion.div
                key={`${feature.id}-${currentPage}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{ duration: 0.4 }}
                className="hover:scale-[1.02] transition-transform duration-300"
              >
                <SingleFeature feature={feature} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced Pagination Dots */}
        <motion.div 
          className="flex justify-center mt-10 gap-2"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              variants={dotVariants}
              animate={currentPage === index ? "active" : "inactive"}
              className={`w-3 h-3 rounded-full ${
                currentPage === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              whileHover={{ scale: 1.2 }}
              aria-label={`Go to page ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Event;