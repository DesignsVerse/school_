"use client"
import { useState } from "react";
import Slider from "react-slick";
import { FaBasketballBall, FaSchool, FaChartLine, FaBook } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivitiesSection = () => {
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

  // Activity data
  const activities = [
    {
      icon: <FaBasketballBall className="text-orange-500" />,
      title: "Sports Training",
      bgColor: "bg-orange-100",
    },
    {
      icon: <FaSchool className="text-blue-500" />,
      title: "School Directly",
      bgColor: "bg-blue-100",
    },
    {
      icon: <FaChartLine className="text-teal-500" />,
      title: "Digital Marketing",
      bgColor: "bg-teal-100",
    },
    {
      icon: <FaBook className="text-purple-500" />,
      title: "Parenting Bill",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <section className="py-16 bg-purple-600 text-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white text-sm font-semibold">
              OUR BEST ACTIVITIES
            </span>
            <div className="w-2 h-2 bg-white rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            We School Be Happy With Our Activities.
          </h2>
        </div>

        {/* Activity Cards with Carousel */}
        <Slider {...settings}>
          {activities.map((activity, index) => (
            <div
              key={index}
              className="px-2"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div
                className={`relative bg-white rounded-lg p-6 h-48 flex flex-col items-center justify-center text-center transition-all duration-300 transform ${
                  hoveredCard === index
                    ? "bg-black -translate-y-2"
                    : "bg-white translate-y-0"
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 z-10 ${
                    hoveredCard === index ? "bg-gray-800" : activity.bgColor
                  }`}
                >
                  <div className="text-3xl">{activity.icon}</div>
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-semibold z-10 ${
                    hoveredCard === index ? "text-white" : "text-gray-900"
                  }`}
                >
                  {activity.title}
                </h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ActivitiesSection;