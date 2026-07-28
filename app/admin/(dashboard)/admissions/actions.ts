"use server"

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export async function updateAdmissionStatus(id: string, formData: FormData) {
  const session = await auth()
  if (!session) throw new Error("Unauthorized")

  const status = (formData.get("status") as string) || "new"

  await prisma.admissionEnquiry.update({
    where: { id },
    data: { status },
  })

  revalidatePath("/admin/admissions")
}
