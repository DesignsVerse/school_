"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const CompleteEducationSection = () => {
  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Left Side: Images and Badge - Made larger */}
          <motion.div 
            className="w-full lg:w-[55%] relative" // Increased width to 55%
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Main Image with Circular Background */}
            <div className="relative flex justify-center">
              <motion.div 
                className="absolute inset-0 flex items-center justify-center z-0"
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full"></div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Image
                  src="/images/hero/banner.jpg"
                  alt="Person reading"
                  width={500} // Increased width
                  height={500} // Increased height
                  className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[480px] mx-auto"
                  priority
                />
              </motion.div>
            </div>

            {/* Smaller Overlapping Image - Made slightly larger */}
            <motion.div 
              className="absolute top-[-24px] left-6 sm:left-8 md:left-10 transform translate-y-3/4 sm:translate-y-2/3 md:translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              {/* <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg"> */}
                {/* <Image
                  src="/images/logo/logo.png"
                  alt="School's Logo"
                  fill
                  className="object-cover"
                  priority
                /> */}
                {/* <div className="absolute inset-0 bg-gradient-to-br from-teal-50/20 to-blue-50/20 rounded-full"></div> */}
              {/* </div> */}
            </motion.div>

            {/* Experience Badge - Enhanced */}
            <motion.div 
  className="absolute bottom-3 right-1/2 transform -translate-x-1/2 lg:right-0 lg:transform-none bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 shadow-xl z-30"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.8 }}
  viewport={{ once: true }}
>
  <span className="text-sm sm:text-base font-semibold whitespace-nowrap">40+ YEARS OF EXPERIENCE</span>
</motion.div>
          </motion.div>

          {/* Right Side: Content - Slightly narrower */}
          <motion.div 
            className="w-full lg:w-[45%] mt-8 lg:mt-0"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <motion.div 
              className="flex items-center gap-2 mb-3 sm:mb-4"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
              <span className="text-blue-600 text-xs sm:text-sm font-semibold tracking-wider">OUR ABOUT US</span>
            </motion.div>

            {/* Main Heading - Adjusted for better hierarchy */}
            <motion.h2 
              className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-gray-900 mb-4 sm:mb-5 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Empowering Future Leaders Through Holistic Education
            </motion.h2>

            {/* Description - Added placeholder text */}
            <motion.p 
              className="text-gray-600 mb-5 sm:mb-7 text-sm sm:text-base md:text-[0.95rem]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              We provide world-class education with innovative teaching methods that empower students to achieve their full potential and excel in their chosen fields.
            </motion.p>

            {/* Features List - Slightly more compact */}
            <motion.ul 
              className="space-y-3 sm:space-y-3.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.li 
                className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-pink-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-[1.05rem] font-semibold text-gray-900 mb-1"> Founded in 1982</h4>
                  <p className="text-gray-600 text-sm sm:text-[0.92rem] leading-snug">
                  Over 40+ years of academic excellence and value-based education.
                  </p>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-[1.05rem] font-semibold text-gray-900 mb-1">Thousands of Students Empowered</h4>
                  <p className="text-gray-600 text-sm sm:text-[0.92rem] leading-snug">
                  Generations of students transformed into confident, capable citizens.
                  </p>
                </div>
              </motion.li>

              <motion.li 
                className="flex items-start gap-3 sm:gap-3.5 p-3 sm:p-3.5 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="w-6 h-6 sm:w-7 sm:h-7 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base sm:text-[1.05rem] font-semibold text-gray-900 mb-1"> Strong Career Foundation</h4>
                  <p className="text-gray-600 text-sm sm:text-[0.92rem] leading-snug">
                  Students equipped to succeed in higher education and competitive careers.
                  </p>
                </div>
              </motion.li>

              
              
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CompleteEducationSection;