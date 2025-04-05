"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "./teamData";
import { useState } from "react";

type TeamDetailsSectionProps = {
  member: TeamMember;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const TeamDetailsSection = ({ member }: TeamDetailsSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-8 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-stretch gap-6 sm:gap-12"
        >
          {/* Left Side: Image with Hover Effect */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/3 relative"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <div className="relative h-48 overflow-hidden rounded-xl shadow-lg group sm:h-96">
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={300}
                height={400}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <motion.p
                  className="absolute bottom-2 left-2 text-white font-medium text-sm sm:bottom-4 sm:left-4 sm:text-base"
                  initial={{ y: 20 }}
                  animate={{ y: isHovered ? 0 : 20 }}
                >
                  {member.name}
                </motion.p>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Details */}
          <motion.div variants={itemVariants} className="md:w-2/3">
            <motion.h2
              variants={itemVariants}
              className="text-xl font-bold text-gray-900 dark:text-white mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-3xl md:text-4xl sm:mb-6"
            >
              Meet {member.name}
            </motion.h2>

            <div className="space-y-4 sm:space-y-6">
              <motion.div
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 sm:p-6"
              >
                <div className="space-y-3 sm:space-y-4">
                  <p className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Role:
                    </span>{" "}
                    {member.role || "Team Member"}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed sm:text-base">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      About:
                    </span>{" "}
                    {member.about}
                  </p>
                  <p className="text-base text-gray-700 dark:text-gray-300 sm:text-lg">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      Contact:
                    </span>{" "}
                    <a
                      href={`tel:${member.phone}`}
                      className="text-blue-600 hover:underline"
                    >
                      {member.phone}
                    </a>
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              {member.socialLinks && (
                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-2 sm:gap-3"
                >
                  <span className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                    Connect:
                  </span>
                  {member.socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href=""
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-1.5 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-600 dark:text-gray-300 hover:bg-blue-500 hover:text-white transition-colors sm:p-2"
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </motion.div>
              )}

              {/* Description and Highlights */}
              {member.description && (
                <motion.p
                  variants={itemVariants}
                  className="mt-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed sm:mt-6 sm:text-base"
                >
                  {member.description}
                </motion.p>
              )}

              {member.highlights && (
                <motion.ul
                  variants={containerVariants}
                  className="mt-4 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4"
                >
                  {member.highlights.map((highlight, index) => (
                    <motion.li
                      key={index}
                      variants={itemVariants}
                      className="flex items-start gap-2 sm:gap-3"
                    >
                      <span className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xs sm:w-6 sm:h-6">
                        ✔
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400 sm:text-base">
                        {highlight}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamDetailsSection;
