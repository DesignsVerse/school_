"use client";

import Image from "next/image";

export default function FunFact() {
  return (
    <section className="text-center py-12 px-4 bg-gray-50">
      <p className="text-blue-500 font-semibold uppercase tracking-wide">
        OUR WORKING NOW
      </p>
      <h2 className="text-4xl font-extrabold text-gray-900 mt-2">
        Complete About Students Advance Course.
      </h2>

      <div className="flex justify-center flex-wrap gap-8 mt-12">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`bg-${course.bgColor} text-white p-8 rounded-xl w-80 text-center relative shadow-lg hover:scale-105 transition-transform`}
          >
            <div className="w-28 h-28 mx-auto overflow-hidden rounded-full -mt-16 border-4 border-white shadow-md">
              <Image
                src={course.image}
                alt={course.alt}
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mt-6">{course.title}</h3>
            <p className="text-sm mt-4">{course.description}</p>
            <span className="text-2xl absolute bottom-4 right-4 transform transition-transform hover:scale-125">
              &#10142;
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

const courses = [
  {
    title: "Classes Completed",
    description: "We can provide you with a reliable handyman in London. You need to include today.",
    image: "/image1.jpg",
    alt: "Student Learning",
    bgColor: "red-400",
  },
  {
    title: "Drawing Powerful",
    description: "We can provide you with a reliable handyman in London. You need to include today.",
    image: "/image2.jpg",
    alt: "Drawing Class",
    bgColor: "purple-500",
  },
  {
    title: "Painting Class",
    description: "We can provide you with a reliable handyman in London. You need to include today.",
    image: "/image3.jpg",
    alt: "Painting Class",
    bgColor: "orange-400",
  },
];