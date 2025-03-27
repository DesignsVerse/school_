"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Activitie = () => {
  return (
    <>
      <section className="py-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* Section Title */}
          <SectionHeader
            // headerInfo={{
            //   title: "OUR ABOUT US",
            //   subtitle: "Discover Our Story: Nurturing Growth, Fostering Learning.",
            //   description: "",
            // }}
          />

          {/* Main Content */}
          <div className="flex flex-col md:flex-row items-center gap-8 mt-12">
            {/* Left Side: Image */}
            <div className="md:w-1/2 relative">
              <Image
                width={600}
                height={400}
                src="/images.jpg" // Replace with your image path
                alt="Students"
                className="rounded-lg"
              />
              {/* Stats Overlay */}
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg flex items-center gap-2">
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg font-semibold">183K+ Students</span>
              </div>
            </div>

            {/* Right Side: Content */}
            <div className="md:w-1/2">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Business tailored IT design, management & support services
                business agency elit, sed do eiusmod tempor.
              </p>

              {/* 2x2 Grid of Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Box 1 */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Business school’s Institut constructivism.
                    </h4>
                  </div>
                </div>

                {/* Box 2 */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      We give management school best.
                    </h4>
                  </div>
                </div>

                {/* Box 3 */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Media in this school solution.
                    </h4>
                  </div>
                </div>

                {/* Box 4 */}
                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <svg
                      className="h-6 w-6 text-orange-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Business school’s Institut constructivism.
                    </h4>
                  </div>
                </div>
              </div>

              {/* About More Button */}
              <button className="mt-8 bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition">
                About More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Activitie;