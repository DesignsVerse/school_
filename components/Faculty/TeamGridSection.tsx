import Image from "next/image";
import { motion } from "framer-motion";
import { TeamMember } from "./teamData";

type TeamGridSectionProps = {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
};

const TeamGridSection = ({ members, onMemberClick }: TeamGridSectionProps) => {
  return (
    <section className="py-8 bg-white dark:bg-gray-900 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider text-xs sm:text-sm sm:mb-3"
          >
            Meet Our Team
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-xl font-bold text-gray-900 dark:text-white sm:text-3xl md:text-4xl"
          >
            Our <span className="text-blue-600 dark:text-blue-400">Expert</span> Instructors
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => onMemberClick(member)}
              whileHover={{ y: -5 }}
              className="cursor-pointer group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 group-hover:shadow-xl h-full flex flex-col border border-gray-100 dark:border-gray-700">
                <div className="relative overflow-hidden h-48 sm:h-64">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 sm:p-4">
                    <p className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 text-sm sm:text-base">
                      View Profile
                    </p>
                  </div>
                </div>

                <div className="p-4 flex-1 flex flex-col sm:p-6">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 sm:text-xl">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-2 text-sm sm:text-base sm:mb-3">
                    {member.role}
                  </p>

                  {member.socialLinks && (
                    <div className="mt-auto flex gap-2 pt-2 sm:gap-3 sm:pt-3">
                      {member.socialLinks.map((link, index) => (
                        <a
                          key={index}
                          href="#"
                          className="text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors text-sm sm:text-base"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {link.icon}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGridSection;
