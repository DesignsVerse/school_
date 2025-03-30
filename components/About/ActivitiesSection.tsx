"use client";

import { useState } from "react";
import Slider from "react-slick";
import { FaBasketballBall, FaSchool, FaChartLine, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

const ActivitiesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" } },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6 md:mt-8">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 rounded-full bg-white bg-opacity-40 transition hover:bg-opacity-100 cursor-pointer" />
    ),
    dotsClass: "slick-dots",
  };

  const activities = [
    { icon: <FaBasketballBall />, title: "Sports Training", description: "Professional coaching for various sports", bgColor: "bg-orange-500", hoverBg: "bg-orange-600" },
    { icon: <FaSchool />, title: "School Programs", description: "Comprehensive curriculum for all ages", bgColor: "bg-blue-500", hoverBg: "bg-blue-600" },
    { icon: <FaChartLine />, title: "Digital Learning", description: "Modern education with technology", bgColor: "bg-teal-500", hoverBg: "bg-teal-600" },
    { icon: <FaBook />, title: "Parent Resources", description: "Guidance and support for parents", bgColor: "bg-purple-500", hoverBg: "bg-purple-600" },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-6 ">
        {/* Section Header */}
        <motion.div className="text-center mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Engaging Activities for Happy Learning</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Discover our diverse programs crafted to inspire and educate students of all ages.
          </p>
        </motion.div>

        {/* Activities Carousel */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.6 }} viewport={{ once: true }}>
          <Slider {...settings}>
            {activities.map((activity, index) => (
              <div key={index} className="px-3">
                <motion.div
                  className={`relative rounded-xl overflow-hidden h-80 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ${activity.bgColor} hover:${activity.hoverBg}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white bg-opacity-25 transition-all group-hover:bg-opacity-35 mb-4">
                    {React.cloneElement(activity.icon, { className: "text-3xl text-white" })}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                  <p className="text-white/90 text-base">{activity.description}</p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
