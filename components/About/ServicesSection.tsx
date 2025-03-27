"use client"
import { useState } from "react";
import Slider from "react-slick";
import { FaPencilAlt, FaChartLine, FaProductHunt, FaBook } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServicesSection = () => {
  // State to track which card is being hovered
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Carousel settings for react-slick
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    customPaging: (i: number) => (
      <div className="w-3 h-3 rounded-full bg-gray-300 mx-1 inline-block transition-all duration-300 hover:bg-orange-500">
        {i === 0 && <div className="w-3 h-3 bg-orange-500 rounded-full"></div>}
      </div>
    ),
  };

  // Service data
  const services = [
    {
      icon: <FaPencilAlt className="text-teal-500" />,
      title: "Graphic Design",
      description: "We can provide you with a handy in London.",
      image: "/images.jpg", // Replace with your image path
    },
    {
      icon: <FaChartLine className="text-purple-500" />,
      title: "Digital Marketing",
      description: "We can provide you with a handy in London.",
      image: "/images/digital-marketing.jpg", // Replace with your image path
    },
    {
      icon: <FaProductHunt className="text-orange-500" />,
      title: "Product Design",
      description: "We can provide you with a handy in London.",
      image: "/images/product-design.jpg", // Replace with your image path
    },
    {
      icon: <FaBook className="text-pink-500" />,
      title: "Exclusive Man",
      description: "We can provide you with a handy in London.",
      image: "/images/exclusive-man.jpg", // Replace with your image path
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
            <span className="text-blue-600 text-sm font-semibold">
              OUR POPULAR SERVICE
            </span>
            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            We Success Learning Platform Creative Service.
          </h2>
        </div>

        {/* Service Cards with Carousel */}
        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="px-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative bg-white rounded-lg shadow-md p-6 h-64 flex flex-col items-center justify-center text-center transition-all duration-300">
                {/* Hover Image */}
                {hoveredCard === index && (
                  <div className="absolute inset-0">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 ${
                    index === 0
                      ? "bg-teal-100"
                      : index === 1
                      ? "bg-purple-100"
                      : index === 2
                      ? "bg-orange-100"
                      : "bg-pink-100"
                  }`}
                >
                  <div className="text-3xl">{service.icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 mb-2 z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 z-10">{service.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ServicesSection;