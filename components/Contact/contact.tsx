"use client";
import SectionHeader from "@/components/Common/SectionHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import Head from "next/head";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "phone") {
      const numericValue = value.replace(/[^0-9]/g, "").slice(0, 10);
      setFormData((prev) => ({
        ...prev,
        [name]: numericValue,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      phone: formData.phone ? `+91${formData.phone}` : "",
    };
    console.log(submittedData);
    // Optional: Reset form after submission
    // setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phone.length === 10 && // Phone must be exactly 10 digits
      formData.subject.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  return (
    <>
      <Head>
        <title>Contact Us | Bethel Secondary School - Get in Touch</title>
        <meta
          name="description"
          content="Contact Bethel Secondary School for inquiries about admissions, programs, or general information. Reach out via phone, email, or visit us!"
        />
        <meta
          name="keywords"
          content="Bethel Secondary School, contact us, school inquiries, admission contact, school phone number, school email"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bethel Secondary School Team" />
        <link rel="canonical" href="https://www.bethelsecondaryschool.com/contact" />
        <meta property="og:title" content="Contact Bethel Secondary School | Reach Out Today" />
        <meta
          property="og:description"
          content="Get in touch with Bethel Secondary School for any questions or support. We're here to assist you!"
        />
        <meta property="og:image" content="/images/contact-us.jpg" />
        <meta property="og:url" content="https://www.bethelsecondaryschool.com/contact" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ContactPage",
              name: "Contact Us - Bethel Secondary School",
              url: "https://www.bethelsecondaryschool.com/contact",
              description:
                "Contact page for Bethel Secondary School with phone, email, and address details.",
              publisher: {
                "@type": "Organization",
                name: "Bethel Secondary School",
              },
            }),
          }}
        />
      </Head>

      <SectionHeader title="Contact Us" breadcrumbPath="Contact" />

      <section className="py-8 bg-white dark:bg-gray-900 sm:py-16 md:py-20">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-6 sm:gap-12 lg:gap-16"
          >
            {/* Left Side: Form */}
            <div className="lg:w-2/3">
              {/* Section Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-6 sm:mb-8"
              >
                <div className="flex items-center gap-2 mb-2 sm:gap-3 sm:mb-4">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full sm:w-3 sm:h-3"></div>
                  <span className="text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase sm:text-sm">
                    Get in Touch
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:text-3xl md:text-4xl sm:mb-4">
                  Let’s Talk About Your Project
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-2xl">
                  Have questions or want to discuss a project? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 sm:space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2"
                    >
                      Phone Number
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400 pointer-events-none sm:pl-5">
                        +91
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="1234567890"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:pl-12 sm:pr-5 sm:py-3"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2"
                    >
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Question</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3 sm:rows-5"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                  whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                  type="submit"
                  disabled={!isFormValid()}
                  className={`w-full sm:w-auto bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-semibold text-base sm:px-8 sm:py-4 sm:text-lg ${
                    !isFormValid() ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>

            {/* Right Side: Contact Details */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sm:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sm:text-2xl sm:mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {/* Call */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg
                        className="w-5 h-5 text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">
                        Call Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        +91 2546 15566
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        +91 5425 56455
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg
                        className="w-5 h-5 text-orange-600 dark:text-orange-400 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">
                        Email Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        neta@eobi.com
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        coraty@bara.com
                      </p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg
                        className="w-5 h-5 text-teal-600 dark:text-teal-400 sm:w-6 sm:h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">
                        Visit Us
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        52, 25 Rangpur, 0123
                      </p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Ratba Baraj, 20
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
