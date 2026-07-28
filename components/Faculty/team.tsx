"use client";

import { useState, useRef } from "react";
import TeamDetailsSection from "./TeamDetailsSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers as fallbackMembers } from "./teamData";
import type { TeamMember } from "@/types/faculty";

type TeamPageProps = {
  members?: TeamMember[]
}

export default function TeamPage({ members = fallbackMembers }: TeamPageProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(members[0] || fallbackMembers[0]);
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
      <TeamGridSection members={members} onMemberClick={handleMemberClick} />
    </div>
  );
}