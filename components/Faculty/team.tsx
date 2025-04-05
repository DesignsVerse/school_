"use client";

import { useState, useRef } from "react";
import TeamDetailsSection from "./TeamDetailsSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers, TeamMember } from "./teamData";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
    if (detailsRef.current) {
      const offset = 80; // Reduced offset for mobile
      const elementPosition = detailsRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <div ref={detailsRef}>
        <TeamDetailsSection member={selectedMember} />
      </div>
      <TeamGridSection members={teamMembers} onMemberClick={handleMemberClick} />
    </div>
  );
}