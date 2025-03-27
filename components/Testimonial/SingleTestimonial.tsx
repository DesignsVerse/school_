import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, designation, image, content } = review;
  return (
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
        {content}
      </p>

      {/* User Info */}
      <div className="mt-6 flex items-center">
        <Image
          width={50}
          height={50}
          src={image}
          alt={name}
          className="h-12 w-12 rounded-full"
        />
        <div className="ml-4">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
            {name}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;