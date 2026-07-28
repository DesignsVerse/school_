"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function saveNotice(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const title = (formData.get("title") as string) || ""
  const slug = (formData.get("slug") as string) || ""
  const summary = (formData.get("summary") as string) || ""
  const content = (formData.get("content") as string) || ""
  const noticeDate = (formData.get("noticeDate") as string) || ""
  const published = formData.get("published") === "on"

  if (!title || !slug || !summary || !content || !noticeDate) return

  await prisma.notice.upsert({
    where: { slug },
    update: {
      title,
      summary,
      content,
      noticeDate: new Date(noticeDate),
      published,
      publishedAt: published ? new Date() : null,
    },
    create: {
      title,
      slug,
      summary,
      content,
      noticeDate: new Date(noticeDate),
      published,
      publishedAt: published ? new Date() : null,
    },
  })

  revalidatePath("/noticeboard")
  revalidatePath("/admin/notices")
}

export async function deleteNotice(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.notice.delete({ where: { id } })

  revalidatePath("/noticeboard")
  revalidatePath("/admin/notices")
}
