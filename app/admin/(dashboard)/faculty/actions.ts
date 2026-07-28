"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function saveFacultyMember(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

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

  await prisma.facultyMember.upsert({
    where: { slug },
    update: {
      name,
      role,
      phone: phone || null,
      imageSrc,
      about,
      description: description || null,
      highlights,
      sortOrder,
      published,
    },
    create: {
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
    },
  })

  revalidatePath("/faculty")
  revalidatePath("/admin/faculty")
}

export async function deleteFacultyMember(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.facultyMember.delete({ where: { id } })

  revalidatePath("/faculty")
  revalidatePath("/admin/faculty")
}
