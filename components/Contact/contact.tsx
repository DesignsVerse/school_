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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    
    // Additional email validation only if email is provided
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setSubmitError("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "18586efc-2896-4d66-98ff-ea546e339a07",
          name: formData.name,
          email: formData.email,
          phone: `+91${formData.phone}`,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setSubmitError(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitError("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Check if all required fields are filled
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.phone.length === 10 &&
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
          content="Contact Bethel Secondary School for admissions, academic inquiries, or general information. Reach out via phone, email, or visit our campus."
        />
        <meta
          name="keywords"
          content="School contact, Bethel admissions, school inquiry, campus visit, school address, school phone number"
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
            {/* Form Section */}
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
                    School Enquiries
                  </span>
                </div>

                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 sm:text-3xl md:text-4xl sm:mb-4">
                  Reach Out to Our Administration
                </h2>

                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-lg max-w-2xl">
                  For admissions, academic inquiries, or general information, please fill the form below. 
                  Our team will respond within 24 working hours.
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
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Student/Parent Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2">
                      Phone Number *
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500 dark:text-gray-400 pointer-events-none sm:pl-5">
                        +91
                      </span>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        maxLength={10}
                        className="w-full border border-gray-300 dark:border-gray-700 rounded-lg pl-10 pr-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:pl-12 sm:pr-5 sm:py-3"
                        required
                      />
                    </div>
                    {formData.phone.length > 0 && formData.phone.length !== 10 && (
                      <p className="text-red-500 text-xs mt-1">Please enter a 10-digit phone number</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                      required
                    >
                      <option value="">Select inquiry type</option>
                      <option value="admission">Admissions</option>
                      <option value="academic">Academic Questions</option>
                      <option value="transport">Transportation</option>
                      <option value="fee">Fee Structure</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 sm:text-sm sm:mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Your message here..."
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-2 text-gray-700 dark:text-gray-300 dark:bg-gray-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition sm:px-5 sm:py-3"
                    required
                  ></textarea>
                </div>

                {submitSuccess && (
                  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg">
                    Message sent successfully! We'll respond shortly.
                  </div>
                )}

                {submitError && (
                  <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg">
                    {submitError}
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: isFormValid() ? 1.02 : 1 }}
                  whileTap={{ scale: isFormValid() ? 0.98 : 1 }}
                  type="submit"
                  disabled={!isFormValid() || isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full transition-all duration-300 font-semibold text-base sm:px-8 sm:py-4 sm:text-lg ${
                    !isFormValid() || isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-lg"
                  }`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
              </motion.form>
            </div>

            {/* Contact Information */}
            <div className="lg:w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border border-gray-200 dark:border-gray-700 sm:p-8"
              >
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 sm:text-2xl sm:mb-6">
                  School Contacts
                </h3>

                <div className="space-y-6 sm:space-y-8">
                  {/* Call */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+91 98765 43210</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">+91 87654 32109</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg className="w-5 h-5 text-orange-600 dark:text-orange-400 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">admissions@bethelschool.edu.in</p>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">info@bethelschool.edu.in</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 sm:gap-5">
                    <div className="flex-shrink-0 w-12 h-12 bg-teal-100 dark:bg-teal-900/30 rounded-xl flex items-center justify-center sm:w-14 sm:h-14">
                      <svg className="w-5 h-5 text-teal-600 dark:text-teal-400 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900 dark:text-white mb-1 sm:text-lg">Address</h4>
                      <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
                        Bethel Secondary School<br />
                        No. 25, Education Valley<br />
                        Bengaluru, Karnataka 560001<br />
                        India
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
