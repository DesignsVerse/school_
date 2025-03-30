"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Activities = () => {
  return (
    <section className="py-10 md:py-14 xl:py-16 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"> {/* Reduced container width */}
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12"> {/* Reduced margin */}
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white" // Reduced text size
          >
            Our Learning Philosophy
          </motion.h2>
          <motion.p
            className="mt-3 md:mt-4 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto" // Smaller text and width
          >
            At Bethel Secondary School in Rajasthan, we combine heritage with modern pedagogy.
          </motion.p>
        </div>

        {/* Main Content - Adjusted spacing */}
        <div className="flex flex-col lg:flex-row items-center gap-6 md:gap-8"> {/* Reduced gap */}
          
          {/* Left Image Section */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div 
              className="relative rounded-tr-[20px] rounded-bl-[20px] overflow-hidden shadow-lg" // Smaller border radius
            >
              <Image
                width={600}  // Reduced image size
                height={400}
                src="/images.jpg"
                alt="Students"
                className="w-full h-auto object-cover aspect-[4/3]"
              />
              
              {/* Stats Overlay - Smaller */}
              <motion.div 
                className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-2 md:p-3 rounded-tl-[10px] rounded-br-[10px] flex items-center gap-2 text-xs" // Smaller padding
              >
                <div className="bg-white/20 p-1 rounded-full">
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[0.7rem] md:text-xs">Active Learners</p>
                  <p className="text-sm md:text-base">183K+ Students</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content Section */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4"> {/* Tighter grid */}
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 md:p-4 rounded-tr-[15px] rounded-bl-[15px] shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700" // Reduced padding
                >
                  <div className="flex items-start gap-2"> {/* Smaller gap */}
                    <div className={`p-2 rounded-lg ${feature.color} shadow-md`}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="text-base md:text-lg font-semibold mb-1"> {/* Smaller text */}
                        {feature.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400"> {/* Smaller text */}
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Smaller */}
            {/* <motion.button 
              className="mt-4 md:mt-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 px-6 rounded-tr-[10px] rounded-bl-[10px] text-sm md:text-base font-medium hover:shadow-lg transition-all duration-300" // Smaller padding
            >
              Explore All Activities
            </motion.button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

// Updated Features Array with Smaller Icons
const features = [
  {
    title: "Practical Learning",
    description: "Hands-on projects & field studies in Rajasthan's ecosystem",
    color: "bg-blue-500",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    )
  },
  {
    title: "Tech Integration",
    description: "AI labs & coding bootcamps with modern tools",
    color: "bg-purple-500",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
      </svg>
    )
  },
  {
    title: "Leadership Training",
    description: "Management simulations & case studies",
    color: "bg-green-500",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Industry Connect",
    description: "Partnerships with Rajasthan's top companies",
    color: "bg-orange-500",
    icon: (
      <svg className="h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  }
];

export default Activities;