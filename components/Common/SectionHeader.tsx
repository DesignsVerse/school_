"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";

type AboutUsSectionProps = {
  title?: string;
  subtitle?: string;
  breadcrumbPath?: string;
  imageUrl?: string;
  imageAlt?: string;
  scrollTargetId?: string;
};

const SectionHeader = ({
  title = "About Us",
  subtitle = "Learn more about our mission and value",
  breadcrumbPath = "About Us",
  imageUrl = "/images/about-us-person.png",
  imageAlt = "Person studying",
  scrollTargetId = "about-content",
}: AboutUsSectionProps) => {
  const targetRef = useRef<HTMLElement>(null);

  const handleScroll = () => {
    const targetElement = document.getElementById(scrollTargetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 100, // Adjust offset as needed
        behavior: "smooth"
      });
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-50 to-purple-50 mt-20  overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-200 blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-purple-200 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 2xl:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side: Main Heading and Subtitle */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight"
            >
              {title}
            </motion.h1>
            
            {/* Added Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-gray-600 mb-6 max-w-lg"
            >
              {subtitle}
            </motion.p>
          </motion.div>

          {/* Right Side: Breadcrumb */}
          <motion.div 
            className="lg:w-1/2 flex justify-end"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.nav
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <ol className="flex items-center space-x-2 text-gray-500">
                <Link 
                  href="/" 
                  className="text-gray-500 hover:text-orange-600 transition-colors duration-300 flex items-center"
                >
                  Home
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                </Link>
                <li className="text-gray-400">/</li>
                <li className="text-orange-600 font-medium">{breadcrumbPath}</li>
              </ol>
            </motion.nav>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SectionHeader;