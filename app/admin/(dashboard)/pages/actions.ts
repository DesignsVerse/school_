"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function updateSectionContent(section: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const entries = Array.from(formData.entries())

  for (const [key, value] of entries) {
    if (key.startsWith("_")) continue; // Skip internal form fields

    await prisma.siteContent.update({
      where: {
        section_key: {
          section: section,
          key: key
        }
      },
      data: {
        value: value as string
      }
    })
  }

  revalidatePath("/")
  revalidatePath(`/admin/pages/${section}`)
}
