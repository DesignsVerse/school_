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
      title: 'Maecenas facilisis erat id odio',
      content: 'There are many variations of passages of psum available, but the majority have suffered alteration in some form, by injected humour, but the majority have suffered alteration.',
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
      icon: <FaCheckCircle className="text-white" />,
    },
    {
      title: 'Phasellus et vehicula nulla',
      content: 'Content for Phasellus et vehicula nulla.',
      icon: <FaCheckCircle className="text-green-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      title: 'Maecenas malesuada',
      content: 'Content for Maecenas malesuada.',
      icon: <FaTimesCircle className="text-red-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
    {
      title: 'Why you join our team',
      content: 'Content for Why you join our team.',
      icon: <FaInfoCircle className="text-blue-500" />,
      bgColor: 'bg-white',
      textColor: 'text-gray-800',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 lg:py-20 font-roboto   ">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
        {/* Image Section - Proper Circle */}
        <motion.div 
          className="w-full lg:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-8 border-white shadow-xl">
            <Image
              src="/images.jpg"
              alt="A young student raising his hand in a classroom"
              fill
              className="object-cover"
              quality={100}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-orange-500/10 rounded-full" />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
            <div className="text-orange-500 text-2xl font-bold">10+</div>
            <div className="text-gray-600 text-sm">Years Experience</div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-blue-600 text-sm font-semibold mb-2 tracking-wider">
            OUR EDUCATION FAQ
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight">
            District Is Made Of About <span className="text-orange-500">Students Childhood</span>.
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <motion.div
                key={index}
                className={`${item.bgColor} p-5 rounded-xl shadow-md cursor-pointer transition-all duration-300 hover:shadow-lg`}
                onClick={() => toggleAccordion(index)}
                whileHover={{ scale: 1.01 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-between items-center">
                  <span className={`flex items-center gap-3 ${item.textColor} font-medium`}>
                    {item.icon}
                    <span className="text-lg">{item.title}</span>
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
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
                      <p className="mt-4 text-gray-600 pl-8">{item.content}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQ;