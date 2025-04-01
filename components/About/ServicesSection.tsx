"use client";
import { useState } from "react";
import Slider from "react-slick";
import { FaPencilAlt, FaChartLine, FaProductHunt, FaBook } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    cssEase: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "40px"
        }
      }
    ],
    beforeChange: (current: number, next: number) => setCurrentSlide(next),
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-10">
        <ul className="flex justify-center gap-2">{dots}</ul>
      </div>
    ),
    customPaging: (i: number) => {
      const dotColors = [
        "bg-teal-500",    // matches Graphic Design
        "bg-purple-500",  // matches Digital Marketing
        "bg-orange-500",  // matches Product Design
        "bg-pink-500",    // matches Exclusive Training
        "bg-blue-500"     // matches Content Creation
      ];
      const isActive = currentSlide === i;
      const colorClass = dotColors[i % dotColors.length];
      
      return (
        <div className={`w-3 h-3 rounded-full transition-all duration-300 ${isActive ? colorClass : "bg-gray-300"}`} />
      );
    },
    dotsClass: "slick-dots"
  };

  const services = [
    {
      icon: <FaPencilAlt className="text-2xl text-teal-500" />,
      title: "Graphic Design",
      description: "Professional design services for all your branding needs.",
      image: "/images/about/about-2.jpg",
      color: "bg-teal-100"
    },
    {
      icon: <FaChartLine className="text-2xl text-purple-500" />,
      title: "Digital Marketing",
      description: "Boost your online presence with our expert strategies.",
      image: "/images/about/about-2.jpg",
      color: "bg-purple-100"
    },
    {
      icon: <FaProductHunt className="text-2xl text-orange-500" />,
      title: "Product Design",
      description: "Innovative design solutions for your products.",
      image: "/images/about/about-2.jpg",
      color: "bg-orange-100"
    },
    {
      icon: <FaBook className="text-2xl text-pink-500" />,
      title: "Exclusive Training",
      description: "Specialized courses tailored to your learning needs.",
      image: "/images/about/about-2.jpg",
      color: "bg-pink-100"
    },
    {
      icon: <FaPencilAlt className="text-2xl text-blue-500" />,
      title: "Content Creation",
      description: "Engaging content that resonates with your audience.",
      image: "/images/about/about-2.jpg",
      color: "bg-blue-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 ">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider text-gradient bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              OUR POPULAR SERVICES
            </span>
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            We Provide Creative Learning <br className="hidden md:block" /> Platform Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our range of professional services designed to help you succeed in the digital world.
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative">
          <Slider {...settings}>
            {services.map((service, index) => (
              <div key={index} className="px-3 focus:outline-none group">
                <div
                  className="relative bg-white rounded-xl shadow-lg overflow-hidden h-80 transition-all duration-500 hover:shadow-xl"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Hover Background Image */}
                  {hoveredCard === index && (
                    <div className="absolute inset-0 transition-opacity duration-500">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="relative h-full flex flex-col items-center justify-center p-8 text-center z-10">
                    {/* Icon */}
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-all duration-300 ${service.color} group-hover:bg-opacity-20 group-hover:bg-white`}>
                      {service.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-gray-900 mb-3 transition-all duration-300 group-hover:text-white">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 transition-all duration-300 group-hover:text-white">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;