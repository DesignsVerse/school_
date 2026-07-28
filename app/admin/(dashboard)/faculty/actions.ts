"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { teamMembers } from "@/components/Faculty/teamData"

function toSlug(name: string) {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")
}

export async function saveFacultyMember(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const id = (formData.get("id") as string) || ""
  const name = (formData.get("name") as string) || ""
  const slug = (formData.get("slug") as string) || ""
  const role = (formData.get("role") as string) || ""
  const phone = (formData.get("phone") as string) || ""
  const imageSrc = (formData.get("imageSrc") as string) || ""
  const about = (formData.get("about") as string) || ""
  const description = (formData.get("description") as string) || ""
  const sortOrder = Number(formData.get("sortOrder") || 0)
  const published = formData.get("published") === "on"
  const highlights = ((formData.get("highlights") as string) || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean)

  if (!name || !slug || !role || !imageSrc || !about) return

  const data = {
    name,
    slug,
    role,
    phone: phone || null,
    imageSrc,
    about,
    description: description || null,
    highlights,
    sortOrder,
    published,
  }

  if (id) {
    await prisma.facultyMember.update({
      where: { id },
      data,
    })
  } else {
    await prisma.facultyMember.upsert({
      where: { slug },
      update: data,
      create: data,
    })
  }

  revalidatePath("/faculty")
  revalidatePath("/admin/faculty")
  if (id) {
    revalidatePath(`/admin/faculty/${id}`)
    redirect("/admin/faculty")
  }
}

export async function deleteFacultyMember(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.facultyMember.delete({ where: { id } })

  revalidatePath("/faculty")
  revalidatePath("/admin/faculty")
}

export async function importExistingFaculty() {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  for (const [index, member] of teamMembers.entries()) {
    const slug = toSlug(member.name) || `faculty-${index + 1}`

    await prisma.facultyMember.upsert({
      where: { slug },
      update: {
        name: member.name,
        role: member.role,
        phone: member.phone || null,
        imageSrc: member.imageSrc,
        about: member.about,
        description: member.description || null,
        highlights: member.highlights || [],
        sortOrder: index,
        published: true,
      },
      create: {
        name: member.name,
        slug,
        role: member.role,
        phone: member.phone || null,
        imageSrc: member.imageSrc,
        about: member.about,
        description: member.description || null,
        highlights: member.highlights || [],
        sortOrder: index,
        published: true,
      },
    })
  }

  revalidatePath("/faculty")
  revalidatePath("/admin/faculty")
}
