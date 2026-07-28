import { prisma } from "@/lib/prisma"
import eventData from "@/components/Event/eventdata"
import { teamMembers as fallbackMembers } from "@/components/Faculty/teamData"
import type { Feature } from "@/types/event"
import type { TeamMember } from "@/types/faculty"

export async function getPublishedEvents(limit?: number): Promise<Feature[]> {
  try {
    const eventsFromDb = await prisma.schoolEvent.findMany({
      where: { published: true },
      orderBy: [{ eventDate: "asc" }, { createdAt: "desc" }],
      ...(limit ? { take: limit } : {}),
    })

    if (eventsFromDb.length === 0) return eventData

    return eventsFromDb.map((event) => ({
      id: event.id,
      slug: event.slug,
      category: event.category,
      categoryColor: event.categoryColor,
      location: event.location,
      time: event.time,
      title: event.title,
      description: event.description,
      image: event.image,
      price: "",
    }))
  } catch {
    return eventData
  }
}

export async function getPublishedFaculty(): Promise<TeamMember[]> {
  try {
    const membersFromDb = await prisma.facultyMember.findMany({
      where: { published: true },
      orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
    })

    if (membersFromDb.length === 0) return fallbackMembers

    return membersFromDb.map((member) => ({
      name: member.name,
      about: member.about,
      phone: member.phone || "",
      imageSrc: member.imageSrc,
      role: member.role,
      description: member.description || "",
      highlights: member.highlights,
    }))
  } catch {
    return fallbackMembers
  }
}

export async function getPublishedNotices() {
  try {
    const notices = await prisma.notice.findMany({
      where: { published: true },
      orderBy: { noticeDate: "desc" },
    })

    return notices.map((notice) => ({
      id: notice.id,
      title: notice.title,
      summary: notice.summary,
      content: notice.content,
      noticeDate: notice.noticeDate.toISOString(),
    }))
  } catch {
    return []
  }
}
