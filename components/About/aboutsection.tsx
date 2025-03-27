import Image from "next/image";
import Link from "next/link";

const AboutUsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 via-purple-50 to-white">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left Side: Breadcrumb and Heading */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            {/* Breadcrumb */}
            <nav className="mb-4">
              <ol className="flex items-center space-x-2 text-gray-500">
                <li>
                  <Link href="/" className="text-orange-500 hover:underline">
                    Home
                  </Link>
                </li>
                <li className="text-gray-500">/</li>
                <li className="text-gray-500">About Us</li>
              </ol>
            </nav>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              About Us
            </h1>
          </div>

          {/* Right Side: Image with Circular Background */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative">
              {/* Circular Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-white rounded-full"></div>
              </div>
              {/* Image */}
              <Image
                src="/images/about-us-person.png" // Replace with your image path
                alt="Person studying"
                width={400}
                height={400}
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;