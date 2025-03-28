"use client";
import { useState } from "react";
import Slider from "react-slick";
import { FaBasketballBall, FaSchool, FaChartLine, FaBook, FaArrowRight } from "react-icons/fa";
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
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-6 md:mt-8">
        <ul className="flex justify-center gap-3">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white bg-opacity-40 transition-all duration-300 hover:bg-opacity-100 cursor-pointer" />
    ),
    dotsClass: "slick-dots !bottom-[-10px]",
  };

  const activities = [
    {
      icon: <FaBasketballBall />,
      title: "Sports Training",
      description: "Professional coaching for basketball, soccer, and more",
      bgColor: "bg-orange-500",
      hoverBg: "bg-orange-600",
    },
    {
      icon: <FaSchool />,
      title: "School Programs",
      description: "Comprehensive curriculum for all age groups",
      bgColor: "bg-blue-500",
      hoverBg: "bg-blue-600",
    },
    {
      icon: <FaChartLine />,
      title: "Digital Learning",
      description: "Cutting-edge technology for modern education",
      bgColor: "bg-teal-500",
      hoverBg: "bg-teal-600",
    },
    {
      icon: <FaBook />,
      title: "Parent Resources",
      description: "Guidance and support for parents",
      bgColor: "bg-purple-500",
      hoverBg: "bg-purple-600",
    },
    {
      icon: <FaBasketballBall />,
      title: "Summer Camps",
      description: "Fun and educational seasonal programs",
      bgColor: "bg-red-500",
      hoverBg: "bg-red-600",
    },
  ];

  return (
    <section className="py-12 md:py-20 lg:py-24 bg-gradient-to-br from-purple-800 via-purple-700 to-indigo-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-4 mb-4">
            <div className="w-2 h-2 bg-white rounded-full" />
            <span className="text-sm md:text-base font-semibold tracking-widest text-white/90">
              OUR BEST ACTIVITIES
            </span>
            <div className="w-2 h-2 bg-white rounded-full" />
          </div>
          <motion.h2
            className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Engaging Activities for<br className="hidden md:block" /> Happy Learning
          </motion.h2>
          <motion.p
            className="text-white/80 text-sm md:text-base max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover our diverse programs crafted to inspire and educate students of all ages.
          </motion.p>
        </motion.div>

        {/* Activities Carousel */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <Slider {...settings}>
            {activities.map((activity, index) => (
              <div key={index} className="px-2 md:px-3 outline-none">
                <motion.div
                  className={`relative rounded-xl overflow-hidden h-[320px] md:h-[360px] transition-all duration-500 group ${activity.bgColor} hover:${activity.hoverBg}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-between p-6 md:p-8 text-center z-10">
                    {/* Icon */}
                    <div
                      className={`w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center transition-all duration-300 bg-white bg-opacity-25 group-hover:bg-opacity-35 mb-4`}
                    >
                      {React.cloneElement(activity.icon, {
                        className: "text-2xl md:text-3xl text-white",
                      })}
                    </div>

                    {/* Text Content */}
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">
                        {activity.title}
                      </h3>
                      <p className="text-white/90 text-sm md:text-base leading-relaxed">
                        {activity.description}
                      </p>
                    </div>

                    {/* Learn More Button */}
                    <motion.button
                      className={`flex items-center gap-2 px-4 py-2 rounded-full font-medium text-white border border-white/30 hover:border-white transition-all duration-300 ${
                        hoveredCard === index ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      Learn More
                      <FaArrowRight className="text-sm" />
                    </motion.button>
                  </div>
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