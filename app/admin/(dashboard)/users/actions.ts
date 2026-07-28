"use server"

import bcrypt from "bcryptjs"
import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export type CreateAdminUserState = {
  error?: string
  success?: string
}

export async function createAdminUser(
  _prevState: CreateAdminUserState,
  formData: FormData
): Promise<CreateAdminUserState> {
  const session = await auth()

  if (!session) {
    return { error: "Unauthorized request." }
  }

  const name = (formData.get("name") as string | null)?.trim() || ""
  const email = (formData.get("email") as string | null)?.trim().toLowerCase() || ""
  const password = (formData.get("password") as string | null)?.trim() || ""

  if (!email || !password) {
    return { error: "Email and password are required." }
  }

  if (password.length < 8) {
    return { error: "Password must be at least 8 characters long." }
  }

  const existingUser = await prisma.adminUser.findUnique({
    where: { email },
  })

  if (existingUser) {
    return { error: "An admin with this email already exists." }
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  await prisma.adminUser.create({
    data: {
      name: name || null,
      email,
      password: hashedPassword,
    },
  })

  revalidatePath("/admin/users")
  revalidatePath("/admin/dashboard")

  return {
    success: `Admin login created for ${email}. Share the email and password with the person who needs access.`,
  }
}
