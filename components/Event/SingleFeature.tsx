import React from "react";
import Image from "next/image";
import { Feature } from "@/types/event";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
  const { category, categoryColor, location, time, title, description, price, image } = feature;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative">
        <Image
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
        {/* Category Label */}
        <span
          className={`absolute top-4 left-4 ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-4 mb-2">
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.243l-4.243-4.243m0 0L9.172 7.757M13.414 12H21m-9-9v7.414m0 4.586V21m-7.414 0H3m9-9H4.586m4.586 4.586L3 21m9-9H7.414m4.586-4.586L21 3"
              />
            </svg>
            <span className="text-gray-600 text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-4 h-4 text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span className="text-gray-600 text-sm">{time}</span>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* <p className="text-gray-800 font-semibold">{price}</p> */}
      </div>
    </div>
  );
};

export default SingleFeature;