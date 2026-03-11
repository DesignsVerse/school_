"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function saveSiteContent(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const section = formData.get("section") as string
  const key = formData.get("key") as string
  const value = formData.get("value") as string

  if (!section || !key || !value) return

  await prisma.siteContent.upsert({
    where: {
      section_key: { section, key }
    },
    update: { value },
    create: { section, key, value }
  })

  revalidatePath("/") // Revalidate the front-end pages
  revalidatePath("/admin/site-content")
}

export async function deleteSiteContent(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.siteContent.delete({
    where: { id }
  })

  revalidatePath("/")
  revalidatePath("/admin/site-content")
}
