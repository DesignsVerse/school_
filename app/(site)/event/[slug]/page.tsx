"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation"; // For App Router; use `next/router` for Pages Router
import eventData from "@/components/Event/eventdata"; // Import your event data
import { notFound } from "next/navigation"; // For handling 404

const EventSlugPage: React.FC = () => {
  const params = useParams(); // Get dynamic route params (App Router)
  const slug = params?.slug as string; // Extract slug from params

  // Find the event matching the slug
  const event = eventData.find((item) => item.slug === slug);

  // If no event is found, trigger a 404 page
  if (!event) {
    notFound();
    return null;
  }

  const { title, description, image } = event;

  return (
    <section className="py-20 lg:py-25 xl:py-30 bg-white">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* Centered Large Image */}
        <div className="flex justify-center mb-10">
          <Image
            src={image}
            alt={title}
            width={800} // Adjust width as needed
            height={400} // Adjust height as needed
            className="w-full max-w-4xl h-auto object-cover rounded-lg shadow-md"
          />
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-gray-900 text-center mb-6">
          {title}
        </h1>

        {/* Description Paragraph */}
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center">
          {description}
        </p>
      </div>
    </section>
  );
};

export default EventSlugPage;