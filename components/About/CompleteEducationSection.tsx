import Image from "next/image";

const CompleteEducationSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Left Side: Images and Badge */}
          <div className="md:w-1/2 relative">
            {/* Main Image with Circular Background */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 bg-gray-100 rounded-full"></div>
              </div>
              <Image
                src="/images/person-reading.png" // Replace with your image path
                alt="Person reading"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>

            {/* Smaller Overlapping Image */}
            <div className="absolute top-0 left-0 transform -translate-x-1/4 translate-y-1/4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 bg-gray-100 rounded-full"></div>
                </div>
                <Image
                  src="/images/small-person.png" // Replace with your image path
                  alt="Small person"
                  width={150}
                  height={150}
                  className="relative z-10"
                />
              </div>
            </div>

            {/* 24+ Years of Experience Badge */}
            <div className="absolute bottom-4 left-0 bg-teal-500 text-white px-6 py-3 rounded-full flex items-center gap-2">
              <span className="text-lg font-semibold">24+ YEARS OF EXPERIENCE</span>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="md:w-1/2">
            {/* Section Title */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <span className="text-blue-600 text-sm font-semibold">OUR ABOUT US</span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete About Students University Education.
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-6">
              Business tailored IT design, management & support services business agency elit, sed do eiusmod tempor.
            </p>

            {/* Features List */}
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-100 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-pink-500"
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
                  <h4 className="text-lg font-semibold text-gray-900">Successfully Trained</h4>
                  <p className="text-gray-600">
                    Business tailored IT design, management & support services.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-teal-100 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-teal-500"
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
                  <h4 className="text-lg font-semibold text-gray-900">Education Growth</h4>
                  <p className="text-gray-600">
                    Business tailored IT design, management & support services.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-orange-100 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-orange-500"
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
                  <h4 className="text-lg font-semibold text-gray-900">Students Trained</h4>
                  <p className="text-gray-600">
                    Business tailored IT design, management & support services.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-purple-500"
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
                  <h4 className="text-lg font-semibold text-gray-900">Successfully Trained</h4>
                  <p className="text-gray-600">
                    Business tailored IT design, management & support services.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteEducationSection;