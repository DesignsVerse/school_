"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-28 xl:py-32 bg-gradient-to-r from-blue-50 to-purple-50"
    >
      {/* Decorative Elements */}
      <motion.div 
        className="absolute top-40 left-10 opacity-70"
        initial={{ y: -20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 0.7 } : {}}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/images/about/icon-1.gif"
          alt="book doodle"
          width={60}
          height={60}
          className="w-12 h-12 lg:w-16 lg:h-16"
        />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-30 right-20 opacity-70"
        initial={{ y: 20, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 0.7 } : {}}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Image
          src="/images/about/icon-2.gif"
          alt="dots doodle"
          width={70}
          height={70}
          className="w-14 h-14 lg:w-20 lg:h-20"
        />
      </motion.div>

      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 xl:gap-24">
          {/* Left Side: Text Content */}
          <motion.div 
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="max-w-lg">
              <motion.span 
                className="inline-block px-3 py-1 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full"
                variants={itemVariants}
              >
                Our About Us
              </motion.span>
              
              <motion.h2 
                className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 mb-6 leading-tight"
                variants={itemVariants}
              >
                Shaping Futures: Encouraging Growth and Education at <span className="text-orange-500">Bethel Secondary School </span>
              </motion.h2>
              
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed"
                variants={itemVariants}
              >
At Bethel Secondary School, we are dedicated to providing a comprehensive educational experience that emphasizes.              </motion.p>

              {/* Checklist */}
              <motion.ul 
                className="space-y-4 mb-10"
                variants={containerVariants}
              >
                {[
                  "Constructivist Learning Philosophy",
                  "Student-Centered Education",
                  "Innovative Learning Approaches",
                  "Student-centered education philosophy",
                  "Innovative learning approaches"
                ].map((item, index) => (
                  <motion.li 
                    key={index} 
                    className="flex items-start gap-4"
                    variants={itemVariants}
                  >
                    <div className="flex-shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-orange-500"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              {/* Button */}
              <motion.div 
                className="group"
                variants={itemVariants}
              >
                <a
                  href="/about"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3.5 text-lg font-semibold text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105"
                >
                  About More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Image */}
          <motion.div 
            className="lg:w-1/2 relative"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image.jpg"
                alt="Students with books"
                fill
                className="object-cover"
                priority
              />
              
              {/* Stats badge */}
              <motion.div 
                className="absolute bottom-6 right-6 bg-white p-4 rounded-xl shadow-lg flex items-center gap-3 border border-blue-100"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-lg">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Successfully Completed</p>
                  <p className="text-2xl font-bold text-gray-900">183K+</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;