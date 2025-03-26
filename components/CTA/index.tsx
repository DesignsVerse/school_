"use client";
import Image from "next/image";

const CTA: React.FC = () => {
  return (
    <section className="px-4 py-20 md:px-8 lg:py-25 xl:py-30 2xl:px-0">
      <div className="mx-auto max-w-c-1390 bg-blue-600 rounded-lg flex flex-wrap md:flex-nowrap items-center">
        {/* Left Side: Image */}
        <div className="w-full md:w-1/2 p-6">
          <div className="relative bg-white rounded-lg p-4">
            <Image
              src="/images.jpg" // Replace with your image path
              alt="Students and teacher"
              width={500}
              height={300}
              className="rounded-lg border-4 border-orange-500 w-full h-auto"
            />
          </div>
        </div>

        {/* Right Side: Text and Button */}
        <div className="w-full md:w-1/2 p-6 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Study Off Flexibly
          </h2>
          <p className="text-white text-base md:text-lg mb-6">
            We can provide you with a handyan in Please input an email address down below school. Please input anand school. included the today.
          </p>
          <a
            href="#"
            className="inline-block rounded-full bg-orange-500 px-6 py-2.5 text-white font-medium hover:bg-orange-600 transition duration-300 self-start"
          >
            Read More
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTA;