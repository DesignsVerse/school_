// components/EducationFAQ.tsx
"use client"
import { useState } from 'react';
import { FaChevronDown, FaChevronUp, FaCheckCircle, FaTimesCircle, FaInfoCircle } from 'react-icons/fa';
import Image from 'next/image';

const FAQ: React.FC = () => {
  // State to track which accordion is open (using index)
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
    },
    {
      title: 'Phasellus et vehicula nulla',
      content: 'Content for Phasellus et vehicula nulla.',
      icon: <FaCheckCircle className="text-green-500" />,
      bgColor: 'bg-white',
      textColor: 'text-green-500',
    },
    {
      title: 'Maecenas malesuada',
      content: 'Content for Maecenas malesuada.',
      icon: <FaTimesCircle className="text-red-500" />,
      bgColor: 'bg-white',
      textColor: 'text-red-500',
    },
    {
      title: 'Why you join our team',
      content: 'Content for Why you join our team.',
      icon: <FaInfoCircle className="text-blue-500" />,
      bgColor: 'bg-white',
      textColor: 'text-blue-500',
    },
  ];

  return (
    <div className="container mx-auto p-4 font-roboto bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row items-center lg:items-start">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="relative">
            <Image
              src="/images.jpg"
              alt="A young student raising his hand in a classroom"
              width={600}
              height={400}
              className="rounded-full shadow-lg transform transition duration-500 hover:scale-105"
            />
            <div className="absolute top-0 left-0 w-full h-full rounded-full bg-white opacity-25" />
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="text-blue-600 text-sm font-semibold mb-2">
            OUR EDUCATION FAQ
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            District Is Made Of About Students Childhood.
          </h1>
          <p className="text-gray-600 mb-6">
            Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
          </p>

          {/* Accordion */}
          <div className="space-y-4">
            {accordionItems.map((item, index) => (
              <div
                key={index}
                className={`${item.bgColor} p-4 rounded-lg shadow-lg cursor-pointer`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className={`flex items-center gap-2 ${item.textColor}`}>
                    {item.icon}
                    {item.title}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className={item.bgColor === 'bg-white' ? 'text-gray-400' : 'text-white'} />
                  ) : (
                    <FaChevronDown className={item.bgColor === 'bg-white' ? 'text-gray-400' : 'text-white'} />
                  )}
                </div>
                <div
                  className={`mt-2 overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-[1000px]' : 'max-h-0'
                  }`}
                >
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;