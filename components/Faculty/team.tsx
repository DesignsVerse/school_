// app/(site)/team/page.tsx
"use client";

import { useState } from "react";
import TeamDetailsSection from "./TeamDetailsSection";
import TeamGridSection from "./TeamGridSection";
import { teamMembers, TeamMember } from "./teamData";

export default function TeamPage() {
  // Set the first team member as the default selected member
  const [selectedMember, setSelectedMember] = useState<TeamMember>(
    teamMembers[0]
  );

  const handleMemberClick = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <div>
      <TeamDetailsSection member={selectedMember} />
      <TeamGridSection
        members={teamMembers}
        onMemberClick={handleMemberClick}
      />
    </div>
  );
}