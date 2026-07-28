import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { saveSchoolEvent } from "../actions"

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const event = await prisma.schoolEvent.findUnique({ where: { id } })

  if (!event) notFound()

  const eventDate = event.eventDate ? event.eventDate.toISOString().slice(0, 10) : ""

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/events" className="text-blue-600 hover:underline">
          ← Back to Events
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Event</h1>
      </div>

      <div className="max-w-4xl rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <form action={saveSchoolEvent} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={event.id} />
          <input name="title" required defaultValue={event.title} placeholder="Event title" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required defaultValue={event.slug} placeholder="event-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="category" required defaultValue={event.category} placeholder="Category" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="categoryColor" defaultValue={event.categoryColor} placeholder="Tailwind color class" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="location" required defaultValue={event.location} placeholder="Location" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="time" required defaultValue={event.time} placeholder="March 30, 2026 - 2:00 PM" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="image" required defaultValue={event.image} placeholder="/images/events/event.jpg" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="eventDate" type="date" defaultValue={eventDate} className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="description" required rows={5} defaultValue={event.description} placeholder="Event description" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm md:col-span-2 dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked={event.published} className="h-4 w-4" />
            Publish this event
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Update Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
