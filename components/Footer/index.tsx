"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white py-16">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Column 1: Logo and Description */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">E</span>
                </div>
                <h3 className="text-2xl font-bold">Eduor</h3>
              </div>
              <p className="text-gray-400 mb-6">
                Nemo enim ipsam voluptate quia voluptas sit aspernatur aut odit
                aut fugit, sed quia magni this dolores eos qui ratione.
              </p>
              <div className="flex gap-4">
                <Link href="#" aria-label="social icon">
                  <svg
                    className="fill-gray-400 hover:fill-orange-500 transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47 14 5.5 16 5.5H17.5V2.14C17.174 2.097 15.943 2 14.643 2C11.928 2 10 3.657 10 6.7V9.5H7V13.5H10V22H14V13.5Z"
                      fill=""
                    />
                  </svg>
                </Link>
                <Link href="#" aria-label="social icon">
                  <svg
                    className="fill-gray-400 hover:fill-orange-500 transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.94 5.00002C6.93974 5.53046 6.72877 6.03906 6.35351 6.41394C5.97825 6.78883 5.46944 6.99929 4.939 6.99902C4.40857 6.99876 3.89997 6.78779 3.52508 6.41253C3.1502 6.03727 2.93974 5.52846 2.94 4.99802C2.94027 4.46759 3.15124 3.95899 3.5265 3.5841C3.90176 3.20922 4.41057 2.99876 4.941 2.99902C5.47144 2.99929 5.98004 3.21026 6.35492 3.58552C6.72981 3.96078 6.94027 4.46959 6.94 5.00002ZM7 8.48002H3V21H7V8.48002ZM13.32 8.48002H9.34V21H13.28V14.43C13.28 10.77 18.05 10.43 18.05 14.43V21H22V13.07C22 6.90002 14.94 7.13002 13.28 10.16L13.32 8.48002Z"
                      fill=""
                    />
                  </svg>
                </Link>
                <Link href="#" aria-label="social icon">
                  <svg
                    className="fill-gray-400 hover:fill-orange-500 transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.162 5.65593C21.3985 5.99362 20.589 6.2154 19.76 6.31393C20.6337 5.79136 21.2877 4.96894 21.6 3.99993C20.78 4.48793 19.881 4.82993 18.944 5.01493C18.3146 4.34151 17.4803 3.89489 16.5709 3.74451C15.6615 3.59413 14.7279 3.74842 13.9153 4.18338C13.1026 4.61834 12.4564 5.30961 12.0771 6.14972C11.6978 6.98983 11.6067 7.93171 11.818 8.82893C10.1551 8.74558 8.52832 8.31345 7.04328 7.56059C5.55823 6.80773 4.24812 5.75098 3.19799 4.45893C2.82628 5.09738 2.63095 5.82315 2.63199 6.56193C2.63199 8.01193 3.36999 9.29293 4.49199 10.0429C3.828 10.022 3.17862 9.84271 2.59799 9.51993V9.57193C2.59819 10.5376 2.93236 11.4735 3.54384 12.221C4.15532 12.9684 5.00647 13.4814 5.95299 13.6729C5.33661 13.84 4.6903 13.8646 4.06299 13.7449C4.32986 14.5762 4.85 15.3031 5.55058 15.824C6.25117 16.345 7.09712 16.6337 7.96999 16.6499C7.10247 17.3313 6.10917 17.8349 5.04687 18.1321C3.98458 18.4293 2.87412 18.5142 1.77899 18.3819C3.69069 19.6114 5.91609 20.2641 8.18899 20.2619C15.882 20.2619 20.089 13.8889 20.089 8.36193C20.089 8.18193 20.084 7.99993 20.076 7.82193C20.8949 7.2301 21.6016 6.49695 22.163 5.65693L22.162 5.65593Z"
                      fill=""
                    />
                  </svg>
                </Link>
                <Link href="#" aria-label="social icon">
                  <svg
                    className="fill-gray-400 hover:fill-orange-500 transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                      fill=""
                    />
                  </svg>
                </Link>
                <Link href="#" aria-label="social icon">
                  <svg
                    className="fill-gray-400 hover:fill-orange-500 transition-all duration-300"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.48 2 2 6.48 2 12C2 16.41 4.99 20.19 9 21.43V15H7V12H9V9.5C9 7.57 10.57 6 12.5 6H15V9H13C12.45 9 12 9.45 12 10V12H15L14.5 15H12V21.43C16.01 20.19 19 16.41 19 12C19 6.48 14.52 2 12 2Z"
                      fill=""
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>

            {/* Column 2: Quick Links */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="text-gray-400">
                <li className="mb-3">
                  <Link href="#" className="hover:text-orange-500">
                    Best Services
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:text-orange-500">
                    Events
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:text-orange-500">
                    About Our Company
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:text-orange-500">
                    Business Contact
                  </Link>
                </li>
                <li className="mb-3">
                  <Link href="#" className="hover:text-orange-500">
                    Make An Appointment
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Column 3: Our Contacts */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h4 className="text-lg font-semibold mb-6">Our Contacts</h4>
              <p className="text-gray-400 mb-3">
                Adress: 27 Division St, Berakuti, NY 121102, USA
              </p>
              <p className="text-gray-400 mb-3">Phone: +8 1440 456 782</p>
              <p className="text-gray-400 mb-3">Fax: +8 846512 456 788</p>
              <p className="text-gray-400 mb-3">Email: example@email.com</p>
              <p className="text-gray-400">Website: www.yourwebsite.com</p>
            </motion.div>

            {/* Column 4: Newsletter */}
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top"
            >
              <h4 className="text-lg font-semibold mb-6">News Letter</h4>
              <p className="text-gray-400 mb-4">
                Our approach to its unique around know work an we know GET hands
                on the you like
              </p>
              <form action="#">
                <div className="flex items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded-full border border-gray-700 bg-gray-800 text-gray-400 px-6 py-3 focus:border-orange-500 focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="ml-2 bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition"
                  >
                    SEND
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;