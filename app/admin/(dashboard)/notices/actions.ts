"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function saveNotice(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const id = (formData.get("id") as string) || ""
  const title = (formData.get("title") as string) || ""
  const slug = (formData.get("slug") as string) || ""
  const summary = (formData.get("summary") as string) || ""
  const content = (formData.get("content") as string) || ""
  const noticeDate = (formData.get("noticeDate") as string) || ""
  const published = formData.get("published") === "on"

  if (!title || !slug || !summary || !content || !noticeDate) return

  const data = {
    title,
    slug,
    summary,
    content,
    noticeDate: new Date(noticeDate),
    published,
    publishedAt: published ? new Date() : null,
  }

  if (id) {
    await prisma.notice.update({
      where: { id },
      data,
    })
  } else {
    await prisma.notice.upsert({
      where: { slug },
      update: data,
      create: data,
    })
  }

  revalidatePath("/noticeboard")
  revalidatePath("/admin/notices")
  if (id) {
    revalidatePath(`/admin/notices/${id}`)
    redirect("/admin/notices")
  }
}

export async function deleteNotice(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.notice.delete({ where: { id } })

  revalidatePath("/noticeboard")
  revalidatePath("/admin/notices")
}
