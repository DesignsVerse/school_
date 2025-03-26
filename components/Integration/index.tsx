"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";

const Integration = () => {
  return (
    <>
      <section>
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "OUR TESTIMONIALS",
              subtitle: "Voices Of Success: Our Community’s Testimonials",
              description: "",
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>

        <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
            <Image
              width={1200}
              height={400}
              sizes="(max-width: 768px) 100vw"
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              style={{ position: "static" }}
            />
            <Image
              fill
              src="/images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-y-10 md:gap-x-8">
            {/* Testimonial 1 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-1/2 lg:w-1/3"
            >
              <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-btndark">
                {/* Quote Icon */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform rounded-full bg-white p-3 shadow-md">
                  <svg
                    className="h-6 w-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 7H6v4H2v10h10V11h-2v8H4V13h4V9h2V7zm12 0h-4v4h-4v10h10V11h-2v8h-4V13h4V9h2V7z" />
                  </svg>
                </div>
                {/* Testimonial Text */}
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  The dedicated faculty and staff at this school make learning a
                  joyful experience. I couldn’t have asked for a better educational
                  environment.
                </p>
                {/* User Info */}
                <div className="mt-6 flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src="/images/user/user-01.png" // Replace with your image path
                    alt="John Doe"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      John Doe
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Parent
                    </p>
                    {/* Star Rating */}
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-5 w-5 ${
                            index < 3 ? "text-orange-500" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Testimonial 2 */}
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-1/2 lg:w-1/3"
            >
              <div className="relative rounded-lg bg-white p-6 shadow-lg dark:bg-btndark">
                {/* Quote Icon */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 transform rounded-full bg-white p-3 shadow-md">
                  <svg
                    className="h-6 w-6 text-orange-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10 7H6v4H2v10h10V11h-2v8H4V13h4V9h2V7zm12 0h-4v4h-4v10h10V11h-2v8h-4V13h4V9h2V7z" />
                  </svg>
                </div>
                {/* Testimonial Text */}
                <p className="mt-8 text-gray-600 dark:text-gray-300">
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered humour.
                </p>
                {/* User Info */}
                <div className="mt-6 flex items-center">
                  <Image
                    width={50}
                    height={50}
                    src="/images/user/user-02.png" // Replace with your image path
                    alt="Andrew James"
                    className="h-12 w-12 rounded-full"
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Andrew James
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Developer
                    </p>
                    {/* Star Rating */}
                    <div className="mt-1 flex">
                      {[...Array(5)].map((_, index) => (
                        <svg
                          key={index}
                          className={`h-5 w-5 ${
                            index < 4 ? "text-orange-500" : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.15c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.357-2.44a1 1 0 00-1.175 0l-3.357 2.44c-.784.57-1.838-.197-1.54-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.314 9.397c-.783-.57-.38-1.81.588-1.81h4.15a1 1 0 00.95-.69l1.286-3.97z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Integration;