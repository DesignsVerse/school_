"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const CTA: React.FC = () => {
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
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "backOut",
      },
    },
  };

  return (
    <section ref={ref} className="px-4 py-20 md:px-8 2xl:px-0">
      <motion.div
        className="mx-auto max-w-c-1390 bg-blue-600 rounded-lg flex flex-col md:flex-row items-center gap-8 p-6"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {/* Left Side: Image */}
        <motion.div 
          className="w-full md:w-[500px]"
          variants={imageVariants}
        >
          <div className="relative bg-white rounded-lg w-full h-[300px] overflow-hidden">
            <Image
              src="/images.jpg"
              alt="Students and teacher"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Right Side: Text and Button */}
        <motion.div 
          className="w-full md:flex-1"
          variants={containerVariants}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <motion.div 
              className="text-white"
              variants={textVariants}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Study Flexibly with <strong  className="text-orange-500">Bethel Secondary School</strong> 
              </h2>
              <p className="text-base md:text-lg">
              We provide reliable and innovative learning solutions that inspire creativity and foster academic excellence for students of all ages.              </p>
            </motion.div>
            
            <motion.a
              href="#"
              className="rounded-full bg-orange-500 px-10 py-2.5 mr-0 md:mr-20 text-white font-medium hover:bg-orange-600 transition duration-300 whitespace-nowrap self-start md:self-center"
              variants={buttonVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
Get Started Today"            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;