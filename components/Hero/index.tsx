"use client";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46 bg-gradient-to-r from-blue-50 to-purple-50 relative">
      {/* Doodle Elements as Background */}
      <div className="absolute top-10 left-10">
        <Image
          src="/images.jpg" // Replace with your pencil doodle asset
          alt="pencil doodle"
          width={50}
          height={50}
        />
      </div>
      <div className="absolute top-5 right-20">
        <Image
          src="/images.jpg" // Replace with your arrow doodle asset
          alt="arrow doodle"
          width={40}
          height={40}
        />
      </div>
      <div className="absolute bottom-20 right-40">
        <Image
          src="/images.jpg" // Replace with your dashed lines doodle asset
          alt="dashed lines doodle"
          width={60}
          height={60}
        />
      </div>

      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
          {/* Left Side: Text Content */}
          <div className="md:w-1/2">
            <h4 className="mb-4 text-lg font-medium text-blue-600">
              Welcome to Eduor!
            </h4>
            <h1 className="mb-5 text-4xl font-bold text-gray-800 xl:text-5xl">
              Students for{" "}
              <span className="text-orange-500">Little</span> Education from.
            </h1>
            <p className="text-gray-600">
              Our agency can only be as strong as our people & because of changing products.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex items-center gap-4">
              <button
                aria-label="read more button"
                className="rounded-full bg-orange-500 px-6 py-2.5 text-white hover:bg-orange-600 transition duration-300"
              >
                Read More
              </button>
              <button
                aria-label="play video button"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 transition duration-300"
              >
                <svg
                  className="h-6 w-6 text-gray-800"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="hidden md:w-1/2 lg:block relative">
            <div className="relative aspect-[700/444] w-full">
              <Image
                src="/images.jpg" // Replace with your image of a child with a backpack
                alt="Child with backpack"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;