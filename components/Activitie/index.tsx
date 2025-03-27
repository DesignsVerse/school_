"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Activitie = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl"
          >
            Our Learning Activities
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6 text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Discover our engaging programs designed to foster creativity, critical thinking, and hands-on learning experiences.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left Side: Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-tr-[40px] rounded-bl-[40px] overflow-hidden">
              <div className="absolute inset-0 rounded-tr-[40px] rounded-bl-[40px] border-4 border-transparent hover:border-gradient-to-r hover:from-pink-500 hover:to-purple-500 transition-all duration-500 pointer-events-none"></div>
              <Image
                width={800}
                height={600}
                src="/images.jpg"
                alt="Students engaged in learning activities"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            
            {/* Stats Overlay */}
            <div className="absolute bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-tl-[20px] rounded-br-[20px] flex items-center gap-3 shadow-lg">
              <div className="bg-white bg-opacity-20 p-2 rounded-full">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium">Active Learners</p>
                <p className="text-2xl font-bold">183K+ Students</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:w-1/2"
          >
            {/* <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Our comprehensive programs combine tailored IT design, management, and support services with innovative teaching methodologies.
            </p> */}

            {/* 2x2 Grid of Features with custom border radius */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-tr-[25px] rounded-bl-[25px] relative group"
                >
                  {/* Border element - only shows on rounded corners */}
                  <div className="absolute inset-0 rounded-tr-[25px] rounded-bl-[25px] border-2 border-transparent group-hover:border-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 transition-all duration-300 pointer-events-none"></div>
                  
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-full ${feature.color}`}>
                      <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 px-8 rounded-tr-[20px] rounded-bl-[20px] font-semibold hover:shadow-lg transition-all duration-300 relative overflow-hidden"
            >
              <span className="relative z-10">Explore All Activities</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Activitie;

const features = [
  {
    title: "Constructivist Learning",
    description: "Hands-on, practical learning approaches",
    color: "bg-blue-500"
  },
  {
    title: "Management Excellence",
    description: "Real-world case studies and training",
    color: "bg-green-500"
  },
  {
    title: "Media & Technology",
    description: "Cutting-edge media solutions integrated",
    color: "bg-purple-500"
  },
  {
    title: "Industry Collaboration",
    description: "Direct partnerships with leading companies",
    color: "bg-red-500"
  }
];