import { mkdir, writeFile } from "fs/promises"
import path from "path"
import { auth } from "@/auth"

const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/gif",
])

const MAX_BYTES = 5 * 1024 * 1024

function sanitizeFilename(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
}

export async function POST(request: Request) {
  const session = await auth()
  if (!session) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  const formData = await request.formData()
  const file = formData.get("file")

  if (!(file instanceof File)) {
    return Response.json({ error: "No image file provided." }, { status: 400 })
  }

  if (!ALLOWED_TYPES.has(file.type)) {
    return Response.json(
      { error: "Only JPG, PNG, WEBP, and GIF images are allowed." },
      { status: 400 }
    )
  }

  if (file.size > MAX_BYTES) {
    return Response.json({ error: "Image must be 5MB or smaller." }, { status: 400 })
  }

  const arrayBuffer = await file.arrayBuffer()
  const bytes = new Uint8Array(arrayBuffer)
  const extension = path.extname(file.name) || `.${file.type.split("/")[1] || "jpg"}`
  const baseName = sanitizeFilename(path.basename(file.name, extension)) || "image"
  const filename = `${Date.now()}-${baseName}${extension}`

  try {
    const uploadsDir = path.join(process.cwd(), "public", "uploads")
    await mkdir(uploadsDir, { recursive: true })
    await writeFile(path.join(uploadsDir, filename), bytes)

    return Response.json({
      url: `/uploads/${filename}`,
      filename,
    })
  } catch {
    // Serverless hosts like Vercel can't write to public/, so store as data URL.
    const dataUrl = `data:${file.type};base64,${Buffer.from(bytes).toString("base64")}`
    return Response.json({
      url: dataUrl,
      filename,
      fallback: "data-url",
    })
  }
}
