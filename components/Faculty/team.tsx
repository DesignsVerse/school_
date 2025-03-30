"use client";

import { useState, useRef } from "react";
import TeamDetailsSection from "./TeamDetailsSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers, TeamMember } from "./teamData";

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0]);
  const detailsRef = useRef<HTMLDivElement>(null); // Ref for scrolling to details

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member); // Update the selected member
    if (detailsRef.current) {
      const offset = 120; // Yeh value adjust kar sakte ho (pixels upar scroll karne ke liye)
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
      <TeamGridSection
        members={teamMembers}
        onMemberClick={handleMemberClick}
      />
    </div>
  );
}