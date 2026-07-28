import { prisma } from "@/lib/prisma"
import { deleteSchoolEvent, saveSchoolEvent } from "./actions"

export default async function EventsAdminPage() {
  const events = await prisma.schoolEvent.findMany({
    orderBy: [{ eventDate: "asc" }, { createdAt: "desc" }],
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Events</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Manage school events shown on the homepage and the events page.
      </p>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Event</h2>
        <form action={saveSchoolEvent} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="title" required placeholder="Event title" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required placeholder="event-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="category" required placeholder="Category" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="categoryColor" defaultValue="bg-blue-500" placeholder="Tailwind color class" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="location" required placeholder="Location" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="time" required placeholder="March 30, 2026 - 2:00 PM" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="image" required placeholder="/images/events/event.jpg" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="eventDate" type="date" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="description" required rows={5} placeholder="Event description" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm md:col-span-2 dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked className="h-4 w-4" />
            Publish this event
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Save Event
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Existing Events</h2>
        <div className="mt-5 space-y-4">
          {events.map((event) => (
            <div key={event.id} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {event.category} | {event.location} | {event.time}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{event.description}</p>
                </div>
                <form action={deleteSchoolEvent.bind(null, event.id)}>
                  <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">Delete</button>
                </form>
              </div>
            </div>
          ))}
          {events.length === 0 && <p className="text-sm text-gray-500">No events yet.</p>}
        </div>
      </div>
    </div>
  )
}
