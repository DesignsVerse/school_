"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const socialLinks = [
    {
      name: "Facebook",
      icon: (
        <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z" />
      ),
      link:"https://www.facebook.com/bethelsecondaryschool"
    },
    {
      name: "LinkedIn",
      icon: (
        <path d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z" />
      ),
      link:"https://www.facebook.com/bethelsecondaryschool"

    },
    {
      name: "Twitter",
      icon: (
        <path d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z" />
      ),
      link:"https://www.facebook.com/bethelsecondaryschool"

    },
    {
      name: "Instagram",
      icon: (
        <path d="M12 2C6.48 2 2 6.48 2 12C2 16.41 4.99 20.19 9 21.43V15H7V12H9V9.5C9 7.57 10.57 6 12.5 6H15V9H13C12.45 9 12 9.45 12 10V12H15L14.5 15H12V21.43C16.01 20.19 19 16.41 19 12C19 6.48 14.52 2 12 2Z" />
      ),
      link:"https://www.facebook.com/bethelsecondaryschool"

    }
  ];

  const quickLinks = [
    { name: "Admission", href: "/admissionForm" },
    { name: "About Us", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 rounded-full bg-blue-600 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 rounded-full bg-purple-600 blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-8 2xl:px-0 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-5 ">
            <div className="flex flex-col items-center">
          <a href="/" className="flex flex-col items-center">
            <Image 
              src="/images/logo/logo.png" 
              alt="Eduor Logo" 
              width={60} 
              height={36}
              className="ml-0 xl:ml-6 bg-white"
            />
            <span className="hidden xl:block text-2xl font-bold text-white mt-2">
              Bethel Sec. School
            </span>
          </a>
        </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
            Nurturing young minds with quality education, innovation, and values to build a brighter future."

Let me know if you'd like any modifications!            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <Link 
                  key={index}
                  href={social.link} 
                  aria-label={social.name}
                  className="p-2 rounded-full bg-gray-800 hover:bg-orange-500 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5 fill-current text-gray-400 hover:text-white"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {social.icon}
                  </svg>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 flex items-center"
                  >
                    <span className="w-1 h-1 bg-orange-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Our Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-6">Our Contacts</h4>
            <address className="not-italic space-y-3">
              <p className="text-gray-400 flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span>
                Bhawani Mandi, India, Rajasthan</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span>+91-9983055878</span>
              </p>
              <p className="text-gray-400 flex items-center">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <span>example@email.com</span>
              </p>
            </address>
          </motion.div>

          {/* Column 4: Newsletter */}
          <motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  viewport={{ once: true }}
>
  <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
  <p className="text-gray-400 mb-6 leading-relaxed">
    Have questions or need immediate assistance? Call us now and our team will be happy to help you.
  </p>
  <div className="space-y-4">
    <div className="flex items-center justify-center">
      <a 
        href="tel:+1234567890" 
        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-lg font-medium"
      >
        Call Now
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
      </a>
    </div>
    <p className="text-center text-gray-400 text-sm mt-2">
      Available 24/7 for your convenience
    </p>
  </div>
</motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-800 text-center text-gray-500 text-sm"
        >
          <p>© {new Date().getFullYear()} Bethel Sec. School. All rights reserved.</p>
         <p>
          Created By
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
           
            className="hover:text-white text-center text-gray-500 text-sm"
          >
            <strong> DesignsVerse</strong>
          </a>
        </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
