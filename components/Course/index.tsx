"use client";

import Image from "next/image";
import { FaChevronLeft, FaChevronRight, FaGraduationCap, FaPalette, FaPencilAlt, FaBook, FaLaptopCode, FaChartLine } from "react-icons/fa";
import { useRef, useEffect } from "react";

export default function Course() {
  const scrollContainer = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const scrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -1140, // 360px * 3 boxes
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: 1140, // 360px * 3 boxes
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const startAutoScroll = () => {
      intervalRef.current = setInterval(() => {
        if (scrollContainer.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollContainer.current;
          if (scrollLeft + clientWidth >= scrollWidth) {
            scrollContainer.current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            scrollRight();
          }
        }
      }, 3000); // Auto-scroll every 3 seconds
    };

    startAutoScroll();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <section className="text-center py-12 px-4 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm">
          Our Comprehensive Courses
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-10">
          Advanced Learning Programs
        </h2>

        <div className="relative px-4 md:px-12">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Scroll left"
          >
            <FaChevronLeft className="text-gray-700 text-xl" />
          </button>

          <div 
            ref={scrollContainer}
            className="overflow-x-hidden w-full snap-x snap-mandatory"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex w-max mx-auto py-4" style={{ gap: '24px' }}>
              {courses.map((course, index) => (
                <div
                  key={index}
                  className={`bg-${course.bgColor} text-white p-8 rounded-xl text-center relative shadow-lg w-[360px] flex-shrink-0 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl snap-start`}
                >
                  <div className="w-32 h-32 mx-auto overflow-hidden rounded-full -mt-12 border-4 border-white shadow-lg bg-white">
                    <Image
                      src={course.image}
                      alt={course.alt}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      priority={index < 3}
                    />
                  </div>
                  <h3 className="text-2xl font-bold mt-8 mb-4">{course.title}</h3>
                  <p className="text-gray-100 px-2 leading-relaxed">
                    {course.description}
                  </p>
                  <div className="text-3xl mt-6 text-white opacity-90">
                    {course.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors hidden md:block"
            aria-label="Scroll right"
          >
            <FaChevronRight className="text-gray-700 text-xl" />
          </button>
        </div>

        <div className="flex justify-center space-x-2 mt-8">
          {Array(Math.ceil(courses.length / 3)).fill(0).map((_, index) => (
            <button 
              key={index} 
              className={`w-3 h-3 rounded-full transition-colors ${index === 0 ? 'bg-blue-600' : 'bg-gray-300'}`}
              aria-label={`Indicator ${index + 1}`}
              onClick={() => {
                if (scrollContainer.current) {
                  scrollContainer.current.scrollTo({
                    left: index * 1140,
                    behavior: 'smooth'
                  });
                }
              }}
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
    bgColor: "black-500",
    icon: <FaChartLine />
  },
];