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
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
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
        <meta
          property="og:title"
          content="Contact Bethel Secondary School | Reach Out Today"
        />
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
      
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col lg:flex-row gap-12 lg:gap-16"
          >
            {/* Left Side: Form */}
            <div className="lg:w-2/3">
              {/* Section Header */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                  <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold tracking-wider uppercase">
                    Get in Touch
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Let's Talk About Your Project
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl">
                  Have questions or want to discuss a project? Fill out the form and our team will get back to you within 24 hours.
                </p>
              </motion.div>

              {/* Contact Form */}
              <motion.form 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
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
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="How can we help you?"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-5 py-3 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition"
                    required
                  ></textarea>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300 font-semibold text-lg"
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
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 shadow-sm border border-gray-200 dark:border-gray-700"
              >
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Contact Information
                </h3>

                <div className="space-y-8">
                  {/* Call */}
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-blue-600 dark:text-blue-400"
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
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Call Us</h4>
                      <p className="text-gray-600 dark:text-gray-400">+880 2546 15566</p>
                      <p className="text-gray-600 dark:text-gray-400">+826 5425 56455</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-orange-600 dark:text-orange-400"
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
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Email Us</h4>
                      <p className="text-gray-600 dark:text-gray-400">neta@eobi.com</p>
                      <p className="text-gray-600 dark:text-gray-400">coraty@bara.com</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-teal-600 dark:text-teal-400"
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
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Visit Us</h4>
                      <p className="text-gray-600 dark:text-gray-400">52, 25 Rangpur, 0123</p>
                      <p className="text-gray-600 dark:text-gray-400">Ratba Baraj, 20</p>
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