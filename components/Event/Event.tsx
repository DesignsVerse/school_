"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import eventData from "./eventdata";
import SingleFeature from "./SingleFeature";

const Event: React.FC = () => {
  const [visibleEvents, setVisibleEvents] = useState(3);
  const [autoPlay, setAutoPlay] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (autoPlay && inView && eventData.length > visibleEvents) {
      interval = setInterval(() => {
        setVisibleEvents((prev) => (prev + 3 > eventData.length ? 3 : prev + 3));
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, visibleEvents, inView]);

  const handleViewMore = () => {
    setVisibleEvents((prev) => Math.min(prev + 3, eventData.length));
  };

  const currentFeatures = eventData.slice(0, visibleEvents);

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

  return (
    <section
      id="events"
      ref={ref}
      className="py-8 bg-white sm:py-20 lg:py-25 xl:py-30 relative overflow-hidden"
    >
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Custom Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-6 sm:mb-15"
        >
          <span className="inline-block px-3 py-1 mb-2 text-xs font-medium text-blue-600 bg-blue-100 rounded-full sm:px-4 sm:py-1 sm:text-sm sm:mb-4">
            OUR EVENTS
          </span>
          <h2 className="text-xl font-bold text-gray-900 mb-2 sm:text-3xl md:text-4xl xl:text-5xl sm:mb-4">
            Upcoming <span className="text-blue-600">Events</span>
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto sm:text-lg">
            Discover our upcoming events designed to inspire learning and growth
          </p>
        </motion.div>

        {/* Event Cards */}
        <motion.div
          className="mt-6 grid grid-cols-1 gap-4 sm:mt-12.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          onMouseEnter={() => setAutoPlay(false)}
          onMouseLeave={() => setAutoPlay(true)}
        >
          <AnimatePresence mode="wait">
            {currentFeatures.map((feature) => (
              <motion.div
                key={feature.id}
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

        {/* View More Button */}
        {visibleEvents < eventData.length && (
          <motion.div
            className="flex justify-center mt-6 sm:mt-10"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            <button
              onClick={handleViewMore}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 sm:px-6 sm:py-3"
            >
              View More Events
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Event;
