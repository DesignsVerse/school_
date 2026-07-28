"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function saveSchoolEvent(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const id = (formData.get("id") as string) || ""
  const title = (formData.get("title") as string) || ""
  const slug = (formData.get("slug") as string) || ""
  const category = (formData.get("category") as string) || ""
  const categoryColor = (formData.get("categoryColor") as string) || "bg-blue-500"
  const location = (formData.get("location") as string) || ""
  const time = (formData.get("time") as string) || ""
  const description = (formData.get("description") as string) || ""
  const image = (formData.get("image") as string) || ""
  const eventDate = (formData.get("eventDate") as string) || ""
  const published = formData.get("published") === "on"

  if (!title || !slug || !category || !location || !time || !description || !image) return

  const data = {
    title,
    slug,
    category,
    categoryColor,
    location,
    time,
    description,
    image,
    published,
    eventDate: eventDate ? new Date(eventDate) : null,
  }

  if (id) {
    await prisma.schoolEvent.update({
      where: { id },
      data,
    })
  } else {
    await prisma.schoolEvent.upsert({
      where: { slug },
      update: data,
      create: data,
    })
  }

  revalidatePath("/")
  revalidatePath("/events")
  revalidatePath(`/events/${slug}`)
  revalidatePath("/admin/events")
  if (id) {
    revalidatePath(`/admin/events/${id}`)
    redirect("/admin/events")
  }
}

export async function deleteSchoolEvent(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.schoolEvent.delete({ where: { id } })

  revalidatePath("/")
  revalidatePath("/events")
  revalidatePath("/admin/events")
}
