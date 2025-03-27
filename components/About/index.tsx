"use client";
import Image from "next/image";

const About: React.FC = () => {
  // Function to handle scroll-to-top functionality
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30 bg-gradient-to-r from-blue-50 to-purple-50 relative">
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10">
        <Image
          src="/image.jpg" // Replace with your book doodle asset
          alt="book doodle"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute bottom-20 right-20">
        <Image
          src="/image.jpg" // Replace with your dots doodle asset
          alt="dots doodle"
          width={60}
          height={60}
        />
      </div>

      <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
        <div className="flex items-center gap-8 lg:gap-32.5">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <h4 className="text-blue-600 text-lg font-medium mb-2">
              Our About Us
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Discover Our Story: Nurturing Growth, Fostering Learning.
            </h2>
            <p className="text-gray-600 mb-6">
              Business tailored it design, management & support services business agency elit, sed do eiusmod tempor.
            </p>

            {/* Checklist */}
            <ul className="space-y-3 mb-6">
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">Business school’s Institut constructivism.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">We give management school best.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">Media in this school solution.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">Business school’s Institut constructivism.</span>
              </li>
              <li className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-orange-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-gray-600">We give management school best.</span>
              </li>
            </ul>

            {/* About More Button */}
            <a
              href="/about"
              className="inline-block rounded-full bg-orange-500 px-6 py-2.5 text-white font-medium hover:bg-orange-600 transition duration-300"
            >
              About More
            </a>
          </div>

          {/* Right Side: Image */}
          <div className="md:w-1/2 relative">
            <div className="relative aspect-[588/526.5] w-full">
              <Image
                src="/image.jpg" // Replace with your image path
                alt="Students with books"
                fill
                className="object-contain"
              />
            </div>

            {/* 183K+ Completed Badge */}
            <div className="absolute bottom-0 right-0 bg-blue-600 text-white p-4 rounded-lg flex items-center gap-2">
              <svg
                className="w-6 h-6 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span className="text-lg font-semibold">183K+ Completed</span>
            </div>
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default About;