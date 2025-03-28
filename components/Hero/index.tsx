"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15
      }
    }
  };

  return (
    <section className="relative overflow-hidden  mt-14 md:mt-30 py-12 md:py-16 xl:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
      {/* Decorative Elements */}
      <motion.div 
        className="absolute bottom-10 left-4 md:bottom-20 md:left-10 opacity-80"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
      >
        <Image
          src="/images/hero/pencil.png"
          alt="Pencil illustration"
          width={80}
          height={80}
          className="w-12 h-12 md:w-16 md:h-16 hover:rotate-12 transition-transform duration-500"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      <motion.div 
        className="absolute top-20 right-4 md:top-32 md:right-10 opacity-80"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <Image
          src="/images/hero/education.png"
          alt="Education icon"
          width={80}
          height={80}
          className="w-12 h-12 md:w-16 md:h-16 hover:scale-110 transition-transform duration-500"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      <motion.div 
        className="absolute bottom-10 right-4 md:bottom-16 md:right-20 opacity-80"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.7, type: "spring" }}
      >
        <Image
          src="/images/doodles/dashed-lines.png"
          alt="Decorative lines"
          width={100}
          height={100}
          className="w-14 h-14 md:w-20 md:h-20 animate-float"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10 bg-repeat" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 xl:gap-16">
          {/* Text Content */}
          <motion.div 
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block mb-4 px-4 py-2 rounded-full bg-orange-100 text-orange-600 font-medium text-sm md:text-base">
                Welcome to Eduor!
              </span>
            </motion.div>

            <motion.h1 
              className="mb-6 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight"
              variants={fadeInUp}
            >
              <span className="text-gray-900">Empowering </span>
              <span className="text-orange-500">Young Minds</span>
              <br className="md:hidden" />
              <span className="text-gray-900"> Through Quality Education</span>
            </motion.h1>

            <motion.p 
              className="mb-8 text-base md:text-lg xl:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              variants={fadeInUp}
            >
              We provide innovative learning solutions that inspire creativity and foster academic excellence for students of all ages.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6"
              variants={fadeInUp}
            >
              <button
                className="relative px-6 py-3 md:px-8 md:py-4 rounded-full text-white font-semibold text-base md:text-lg overflow-hidden group w-full sm:w-auto"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:from-orange-600 group-hover:to-orange-700 transition-all duration-300"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </span>
              </button>

              <button
                className="group flex items-center justify-center gap-3 text-gray-700 hover:text-orange-600 transition-colors duration-300 w-full sm:w-auto"
              >
                <div className="flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full bg-white shadow-md group-hover:bg-orange-100 transition-colors duration-300">
                  <svg
                    className="h-5 w-5 md:h-6 md:w-6 text-orange-500 group-hover:scale-110 transition-transform duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-base md:text-lg font-semibold">Watch Demo</span>
              </button>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-orange-100 to-blue-100 transform rotate-2 scale-95"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                <Image
                  src="/images.jpg"
                  alt="Happy child learning"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 right-0 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-2xl shadow-lg">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="bg-orange-100 p-2 md:p-3 rounded-full">
                    <svg className="h-5 w-5 md:h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm md:text-base">5000+</p>
                    <p className="text-xs md:text-sm text-gray-600">Happy Students</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;