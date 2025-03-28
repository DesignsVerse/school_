"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaPalette, FaPencilAlt, FaBook, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { useRef, useEffect, useState } from "react";

export default function Course() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const cardWidth = 360; // Width of each card in pixels
  const visibleCards = 3; // Number of cards visible at once

  const scrollLeft = () => {
    if (scrollContainer.current) {
      const newIndex = Math.max(activeIndex - 1, 0);
      scrollContainer.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(newIndex);
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      const newIndex = Math.min(activeIndex + 1, courses.length - visibleCards);
      scrollContainer.current.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(newIndex);
    }
  };

  const scrollToIndex = (index: number) => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer.current) {
          const maxIndex = courses.length - visibleCards;
          const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
          scrollToIndex(nextIndex);
        }
      }, 3000); // Auto-scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <section className="text-center py-12 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
          Our Comprehensive Courses
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-10">
          Advanced Learning Programs
        </h2>

        <div className="relative px-0 md:px-12">
          <button 
            onClick={scrollLeft}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-700 text-xl" />
          </button>

          <div 
            ref={scrollContainer}
            className="overflow-x-hidden w-full max-w-[1080px] mx-auto snap-x snap-mandatory scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex" style={{ gap: '24px', width: `${courses.length * cardWidth}px` }}>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`bg-${course.bgColor} text-white p-6 md:p-8 rounded-xl text-center relative shadow-lg w-[360px] flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl snap-start`}
                >
                  <div className="w-24 h-24 md:w-32 md:h-32 mx-auto overflow-hidden rounded-full -mt-10 md:-mt-12 border-4 border-white shadow-lg bg-white">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority={index < 3}
                    />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mt-6 md:mt-8 mb-3 md:mb-4">{course.title}</h3>
                  <p className="text-gray-100 px-2 text-sm md:text-base leading-relaxed">
                    {course.description}
                  </p>
                  <div className="text-2xl md:text-3xl mt-4 md:mt-6 text-white opacity-90">
                    {course.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-700 text-xl" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {courses.map((_, index) => (
            <button 
              key={index} 
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Indicator ${index + 1}`}
              onClick={() => scrollToIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

const courses = [
  {
    title: "Classes Completed",
    description: "Comprehensive learning modules with hands-on projects and expert guidance.",
    image: "/images.jpg",
    alt: "Student learning in classroom",
    bgColor: "red-500",
    icon: <FaGraduationCap />
  },
  {
    title: "Drawing Techniques",
    description: "Master fundamental to advanced drawing skills with professional artists.",
    image: "/images.jpg",
    alt: "Student working on drawing",
    bgColor: "purple-600",
    icon: <FaPencilAlt />
  },
  {
    title: "Painting Mastery",
    description: "Explore various painting styles to develop unique artistic expression.",
    image: "/images.jpg",
    alt: "Student creating painting",
    bgColor: "orange-500",
    icon: <FaPalette />
  },
  {
    title: "Literature Studies",
    description: "Dive deep into classical and contemporary literary works and analysis.",
    image: "/images.jpg",
    alt: "Student reading books",
    bgColor: "blue-500",
    icon: <FaBook />
  },
  {
    title: "Coding Bootcamp",
    description: "Learn modern programming languages and build real-world applications.",
    image: "/images.jpg",
    alt: "Student coding on laptop",
    bgColor: "green-500",
    icon: <FaLaptopCode />
  },
  {
    title: "Data Analytics",
    description: "Master data visualization and statistical analysis techniques.",
    image: "/images.jpg",
    alt: "Student analyzing data",
    bgColor: "gray-900", // Fixed from black-500
    icon: <FaChartLine />
  },
];

// Add this CSS in your global stylesheet or a style tag
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;