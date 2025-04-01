import React from "react";
import Image from "next/image";
import { Feature } from "@/types/event";
import Link from "next/link";

interface SingleFeatureProps {
  feature: Feature;
}

const SingleFeature: React.FC<SingleFeatureProps> = ({ feature }) => {
  const { category, categoryColor, location, time, title, description, price, image, slug } = feature;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      {/* Image */}
      <div className="relative aspect-[6/3]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Label */}
        <span
          className={`absolute top-4 left-4 ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium`}
        >
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
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
        <h3 className="text-xl font-semibold text-gray-800 mb-1 line-clamp-2">{title}</h3>
        <p className="text-gray-600 mb-1 line-clamp-3">{description}</p>
        {/* Add margin-top auto to push the link to the bottom */}
        <div className="mt-auto">
          <Link 
            href={`/event/${slug}`} 
            className="inline-block text-blue-600 hover:underline"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleFeature;