"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.15,
      },
    },
  };

  // Decorative elements animations
  const pencilAnimation = {
    initial: { opacity: 0, scale: 0.8, rotate: -15 },
    animate: { 
      opacity: 0.7, 
      scale: 1, 
      rotate: 0,
      y: [0, -5, 0],
      transition: {
        rotate: { duration: 1, delay: 0.3, type: "spring" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  const educationAnimation = {
    initial: { opacity: 0, x: 30 },
    animate: { 
      opacity: 0.7, 
      x: 0,
      y: [0, -8, 0],
      transition: {
        x: { duration: 1, delay: 0.5, type: "spring" },
        y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  const ideaAnimation = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 0.7, 
      y: 0,
      scale: [1, 1.05, 1],
      transition: {
        y: { duration: 1, delay: 0.7, type: "spring" },
        scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[740px] overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 md:mt-14 md:h-auto md:min-h-0 md:py-16 xl:py-24">
      {/* Pencil with subtle floating */}
      <motion.div
        className="absolute bottom-16 left-4 hidden opacity-70 md:bottom-20 md:left-10 md:block md:opacity-80"
        initial="initial"
        animate="animate"
        variants={pencilAnimation}
      >
        <Image
          src="/images/hero/pencil.png"
          alt="Pencil illustration"
          width={60}
          height={60}
          className="h-10 w-10 md:h-16 md:w-16"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      {/* Education icon with gentle floating */}
      <motion.div
        className="absolute right-4 top-20 hidden opacity-70 md:right-10 md:top-32 md:block md:opacity-80"
        initial="initial"
        animate="animate"
        variants={educationAnimation}
      >
        <Image
          src="/images/hero/education.png"
          alt="Education icon"
          width={60}
          height={60}
          className="h-10 w-10 md:h-16 md:w-16"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      {/* Idea bulb with subtle pulse */}
      <motion.div
        className="absolute bottom-20 right-4 hidden opacity-70 md:bottom-16 md:right-20 md:block md:opacity-80"
        initial="initial"
        animate="animate"
        variants={ideaAnimation}
      >
        <Image
          src="/images/hero/idea.png"
          alt="Decorative lines"
          width={80}
          height={80}
          className="h-12 w-12 md:h-20 md:w-20"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10" />

      <div className="relative mt-4 z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex flex-col items-center gap-6 py-4 md:gap-12 lg:flex-row xl:gap-16">
          {/* Hero Image */}
          <motion.div
            className="order-first w-full lg:order-none lg:w-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative mx-auto w-full max-w-xs sm:max-w-md md:max-w-xl">
              <div className="absolute inset-0 rotate-2 scale-95 transform rounded-3xl bg-gradient-to-tr from-orange-100 to-blue-100"></div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl md:shadow-2xl">
                <Image
                  src="/images.jpg"
                  alt="Happy child learning"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 right-0 rounded-xl bg-white p-2 shadow-md md:-bottom-6 md:-right-6 md:rounded-2xl md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="rounded-full bg-orange-100 p-2 md:p-3">
                    <svg
                      className="h-5 w-5 text-orange-600 md:h-6 md:w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900 md:text-base">
                      5000+
                    </p>
                    <p className="text-xs text-gray-600 md:text-sm">
                      Happy Students
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="order-last w-full lg:order-none lg:w-1/2 lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-3 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600 md:mb-4 md:px-4 md:py-2 md:text-base">
                Welcome to Bethel Secondary School
              </span>
            </motion.div>

            <motion.h1
              className="mb-4 text-2xl font-bold leading-tight sm:text-4xl md:text-5xl md:mb-6 xl:text-6xl"
              variants={fadeInUp}
            >
              <span className="text-gray-900">Empowering </span>
              <span className="text-orange-500">Young Minds</span>
              <br className="md:hidden" />
              <span className="text-gray-900"> Since 1982</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-base md:mb-8 lg:mx-0 xl:text-lg"
              variants={fadeInUp}
            >
            Bethel Secondary School is an Educational Institution run by the Bethel Educational Society (Regd. & Recogd. by the Govt. of Rajasthan), started for educating the children in the Fear of the Lord and excellence in knowledge. The School was started in 1982 by Late. Sri M.M. Thankachan. Now it is headed by Mrs. Sheeja Stanley, Principal and Mr. Stanley John, Director
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-3 sm:flex-row md:gap-6 lg:justify-start"
              variants={fadeInUp}
            >
              <button 
  onClick={() => window.location.href = "/admissionForm"}
  className="group relative w-full overflow-hidden rounded-full px-6 py-3 text-sm font-semibold text-white sm:w-auto md:px-8 md:py-4 md:text-base"
>
  <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:from-orange-600 group-hover:to-orange-700"></span>
  <span className="relative z-10 flex items-center justify-center gap-2">
    Register Now – Admission Open!
    <svg
      className="h-4 w-4 md:h-5 md:w-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      ></path>
    </svg>
  </span>
</button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;