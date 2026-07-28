import SectionHeader from '@/components/Common/SectionHeader'
import TeamPage from '@/components/Faculty/team'
import React from 'react'
import { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { teamMembers as fallbackMembers } from "@/components/Faculty/teamData";

export const metadata: Metadata = {
  title: "Faculty & Staff | Bethel Secondary School - Meet Our Team",
  description:
    "Meet the dedicated faculty and staff of Bethel Secondary School. Learn about our experienced educators and support team committed to student success.",
  keywords:
    "Bethel Secondary School, faculty, staff, teachers, school team, educators, school staff",
  robots: "index, follow",
  authors: [{ name: "Bethel Secondary School Team" }],
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/faculty",
  },
  openGraph: {
    title: "Faculty & Staff at Bethel Secondary School",
    description:
      "Discover the talented faculty and staff at Bethel Secondary School, shaping the future of our students.",
    images: [
      {
        url: "/images/faculty-team.jpg", // Placeholder, tu apna image URL de sakta hai
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School Faculty",
      },
    ],
    url: "https://www.bethelsecondaryschool.com/faculty",
    type: "website",
  },
};

const Faculty = async () => {
  const membersFromDb = await prisma.facultyMember.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  })

  const members =
    membersFromDb.length > 0
      ? membersFromDb.map((member) => ({
          name: member.name,
          about: member.about,
          phone: member.phone || "",
          imageSrc: member.imageSrc,
          role: member.role,
          description: member.description || "",
          highlights: member.highlights,
        }))
      : fallbackMembers

  return (
    <>
  <SectionHeader title="Faculty and Staff" breadcrumbPath="Faculty and staff" />
    <div>
      <TeamPage members={members} />
    </div>
    </>
  )
}

export default Faculty
