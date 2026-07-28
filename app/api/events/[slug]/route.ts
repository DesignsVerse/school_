import { prisma } from "@/lib/prisma"

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params

  const event = await prisma.schoolEvent.findUnique({
    where: { slug },
  })

  if (!event || !event.published) {
    return Response.json(null, { status: 404 })
  }

  return Response.json({
    id: event.id,
    slug: event.slug,
    category: event.category,
    categoryColor: event.categoryColor,
    location: event.location,
    time: event.time,
    title: event.title,
    description: event.description,
    image: event.image,
    price: "",
  })
}
