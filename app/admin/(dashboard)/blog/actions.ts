"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { auth } from "@/auth"

export async function saveBlogPost(formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const id = formData.get("id") as string
  const title = formData.get("title") as string
  const slug = formData.get("slug") as string
  const content = formData.get("content") as string
  const published = formData.get("published") === "on"

  if (!title || !slug || !content) return

  if (id) {
    await prisma.blogPost.update({
      where: { id },
      data: { title, slug, content, published }
    })
  } else {
    await prisma.blogPost.create({
      data: { title, slug, content, published }
    })
  }

  revalidatePath("/blog")
  revalidatePath("/admin/blog")
}

export async function deleteBlogPost(id: string) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  await prisma.blogPost.delete({
    where: { id }
  })

  revalidatePath("/blog")
  revalidatePath("/admin/blog")
}
