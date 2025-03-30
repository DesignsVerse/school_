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
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="relative mt-14  overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 py-12 md:mt-30 md:py-16 xl:py-24">
      {/* Decorative Elements */}
      <motion.div
        className="absolute bottom-10 left-4 opacity-80 md:bottom-20 md:left-10"
        initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
        animate={{ opacity: 0.8, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.3, type: "spring" }}
      >
        <Image
          src="/images/hero/pencil.png"
          alt="Pencil illustration"
          width={80}
          height={80}
          className="h-12 w-12 transition-transform duration-500 hover:rotate-12 md:h-16 md:w-16"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      <motion.div
        className="absolute right-4 top-20 opacity-80 md:right-10 md:top-32"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 0.8, x: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring" }}
      >
        <Image
          src="/images/hero/education.png"
          alt="Education icon"
          width={80}
          height={80}
          className="h-12 w-12 transition-transform duration-500 hover:scale-110 md:h-16 md:w-16"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-4 opacity-80 md:bottom-16 md:right-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1, delay: 0.7, type: "spring" }}
      >
        <Image
          src="/images/doodles/dashed-lines.png"
          alt="Decorative lines"
          width={100}
          height={100}
          className="animate-float h-14 w-14 md:h-20 md:w-20"
          style={{ filter: "drop-shadow(0 4px 6px rgba(15, 34, 57, 0.15))" }}
        />
      </motion.div>

      {/* Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.png')] bg-repeat opacity-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 md:gap-12 lg:flex-row xl:gap-16">
          {/* Text Content */}
          <motion.div
            className="w-full text-center lg:w-1/2 lg:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <motion.div variants={fadeInUp}>
              <span className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-2 text-sm font-medium text-orange-600 md:text-base">
                Welcome to Bethel Secondary School
              </span>
            </motion.div>

            <motion.h1
              className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl xl:text-6xl"
              variants={fadeInUp}
            >
              <span className="text-gray-900">Empowering </span>
              <span className="text-orange-500">Young Minds</span>
              <br className="md:hidden" />
              <span className="text-gray-900"> Through Quality Education</span>
            </motion.h1>

            <motion.p
              className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg lg:mx-0 xl:text-xl"
              variants={fadeInUp}
            >
              At Bethel Secondary School, we inspire creativity and foster
              academic excellence, nurturing students to become lifelong
              learners and responsible citizens.{" "}
            </motion.p>

            <motion.div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-6 lg:justify-start"
              variants={fadeInUp}
            >
              <button className="group relative w-full overflow-hidden rounded-full px-6 py-3 text-base font-semibold text-white sm:w-auto md:px-8 md:py-4 md:text-lg">
                <span className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 group-hover:from-orange-600 group-hover:to-orange-700"></span>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Explore Our Programs
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

              <button className="group flex w-full items-center justify-center gap-3 text-gray-700 transition-colors duration-300 hover:text-orange-600 sm:w-auto">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md transition-colors duration-300 group-hover:bg-orange-100 md:h-14 md:w-14">
                  <svg
                    className="h-5 w-5 text-orange-500 transition-transform duration-300 group-hover:scale-110 md:h-6 md:w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-base font-semibold md:text-lg">
                  Watch Demo
                </span>
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
            <div className="relative mx-auto w-full max-w-md sm:max-w-lg md:max-w-xl">
              <div className="absolute inset-0 rotate-2 scale-95 transform rounded-3xl bg-gradient-to-tr from-orange-100 to-blue-100"></div>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/images.jpg"
                  alt="Happy child learning"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 right-0 rounded-2xl bg-white p-3 shadow-lg md:-bottom-6 md:-right-6 md:p-4">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="rounded-full bg-orange-100 p-2 md:p-3">
                    <svg
                      className="h-5 w-5 text-orange-600 md:h-6"
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
