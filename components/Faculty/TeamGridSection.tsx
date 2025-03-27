// components/TeamGridSection.tsx
import Image from "next/image";
import { TeamMember } from "./teamData";

type TeamGridSectionProps = {
  members: TeamMember[];
  onMemberClick: (member: TeamMember) => void;
};

const TeamGridSection = ({ members, onMemberClick }: TeamGridSectionProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-500 font-semibold uppercase tracking-wide">
            Our Meet Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Become A Instructor Teacher.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <div
              key={index}
              onClick={() => onMemberClick(member)}
              className="cursor-pointer bg-gray-50 rounded-lg shadow-md p-4 text-center hover:bg-gray-100 transition"
            >
              <Image
                src={member.imageSrc}
                alt={member.name}
                width={200}
                height={250}
                className="rounded-lg mx-auto mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamGridSection;