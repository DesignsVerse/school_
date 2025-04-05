import React from "react";
import Image from "next/image";
import { Feature } from "@/types/event";
import Link from "next/link";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
  const { category, categoryColor, location, time, title, description, image, slug } = feature;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative h-28 sm:aspect-[6/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Label */}
        <span
          className={`absolute top-2 left-2 ${categoryColor} text-white px-2 py-0.5 rounded-full text-xs font-medium sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-sm`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex-1 flex flex-col sm:p-6">
        <div className="flex items-center gap-2 mb-1 sm:gap-4 sm:mb-2">
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 text-blue-600 sm:w-4 sm:h-4"
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
            <span className="text-gray-600 text-xs sm:text-sm">{location}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-3 h-3 text-blue-600 sm:w-4 sm:h-4"
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
            <span className="text-gray-600 text-xs sm:text-sm">{time}</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-2 sm:text-xl">
          {title}
        </h3>
        <p className="text-gray-600 text-xs mb-2 line-clamp-2 sm:text-sm sm:mb-1 sm:line-clamp-3">
          {description}
        </p>
        <div className="mt-auto">
          <Link
            href={`/event/${slug}`}
            className="inline-block text-blue-600 hover:underline text-sm sm:text-base"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;
