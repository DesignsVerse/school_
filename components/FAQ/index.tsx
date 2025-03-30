"use client";
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionItems = [
    {
      title: 'What grade levels does Bethel Secondary School serve?',
      content: 'We offer education from Grade 1 through Grade 10, focusing on holistic development and academic excellence.',
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
      icon: <FaCheckCircle className="text-green-500" />,
    },
    {
      title: 'What is the school educational philosophy ? ',
      content: 'Our approach emphasizes student-centered learning, encouraging active participation and critical thinking to foster a lifelong love for learning.',
      icon: <FaCheckCircle className="text-green-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      title: 'Are extracurricular activities available?',
      content: 'Yes, we provide a variety of extracurricular programs, including sports, arts, and community service initiatives, to support well-rounded student development.',
      icon: <FaCheckCircle className="text-green-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      title: 'How can I apply for admission?',
      content: 'Admissions information and application forms are available on our website. For further assistance, please contact our admissions office directly.',
      icon: <FaCheckCircle className="text-green-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16 lg:py-20 font-roboto">
      <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          {/* Motion for desktop only */}
          <motion.div
            className="lg:block hidden" // Hidden on mobile, shown on desktop
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <Image
                src="/images.jpg"
                alt="A young student raising his hand in a classroom"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full" />
            </div>
            <div className="absolute -bottom-4 right-0 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
              <div className="text-orange-500 text-xl md:text-2xl font-bold">10+</div>
              <div className="text-gray-600 text-xs md:text-sm">Years Experience</div>
            </div>
          </motion.div>
          {/* Static version for mobile */}
          <div className="lg:hidden block">
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 md:border-8 border-white shadow-xl">
              <Image
                src="/images.jpg"
                alt="A young student raising his hand in a classroom"
                fill
                className="object-cover"
                quality={100}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full" />
            </div>
            <div className="absolute -bottom-4 right-0 md:-bottom-6 md:-right-6 bg-white p-3 md:p-4 rounded-lg shadow-lg">
              <div className="text-orange-500 text-xl md:text-2xl font-bold">10+</div>
              <div className="text-gray-600 text-xs md:text-sm">Years Experience</div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2">
          {/* Motion for desktop only */}
          <motion.div
            className="lg:block hidden" // Hidden on mobile, shown on desktop
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-blue-600 text-xs md:text-sm font-semibold mb-2 tracking-wider">
              OUR EDUCATION FAQ
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
              District Is Made Of About <span className="text-orange-500">Students Childhood</span>.
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
              Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
            </p>
            {/* Accordion for desktop */}
            <div className="space-y-3 md:space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.bgColor} p-4 md:p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg`}
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ scale: 1.01 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between items-center">
                    <span className={`flex items-center gap-2 md:gap-3 ${item.textColor} font-medium`}>
                      {item.icon}
                      <span className="text-base md:text-lg">{item.title}</span>
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <FaChevronDown className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base pl-6 md:pl-8">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Static version for mobile */}
          <div className="lg:hidden block">
            <div className="text-blue-600 text-xs md:text-sm font-semibold mb-2 tracking-wider">
              OUR EDUCATION FAQ
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 md:mb-4 leading-tight">
              District Is Made Of About <span className="text-orange-500">Students Childhood</span>.
            </h1>
            <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
            At Bethel Secondary School, we understand that you may have questions about our institution. Here are some common inquiries:            </p>
            {/* Accordion for mobile */}
            <div className="space-y-3 md:space-y-4">
              {accordionItems.map((item, index) => (
                <motion.div
                  key={index}
                  className={`${item.bgColor} p-4 md:p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg`}
                  onClick={() => toggleAccordion(index)}
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="flex justify-between items-center">
                    <span className={`flex items-center gap-2 md:gap-3 ${item.textColor} font-medium`}>
                      {item.icon}
                      <span className="text-base md:text-lg">{item.title}</span>
                    </span>
                    {openIndex === index ? (
                      <FaChevronUp className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    ) : (
                      <FaChevronDown className="text-gray-500 w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 md:mt-4 text-gray-600 text-sm md:text-base pl-6 md:pl-8">{item.content}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;