"use client";

import { useState, useRef } from "react"; // Added useRef import
import TeamDetailsSection from "./TeamDetailsSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers, TeamMember } from "./teamData";

export default function TeamPage() {
  // Set the first team member as the default selected member
  const [selectedMember, setSelectedMember] = useState<TeamMember>(
    teamMembers[0]
  );
  // Added ref for scrolling

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <div > {/* Added ref to the container */}
      <TeamDetailsSection member={selectedMember} />
      <TeamGridSection
        members={teamMembers}
        onMemberClick={handleMemberClick}
      />
    </div>
  );
}