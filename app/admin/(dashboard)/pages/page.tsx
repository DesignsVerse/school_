import Link from "next/link"
import { prisma } from "@/lib/prisma"

export default async function PagesOverview() {
  const sections = await prisma.siteContent.findMany({
    distinct: ['section'],
    select: { section: true }
  })

  const sectionNames = sections.map(s => s.section)

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Page Sections</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Select a section to edit its content.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sectionNames.map((section) => (
          <Link
            key={section}
            href={`/admin/pages/${section}`}
            className="block p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-semibold capitalize text-gray-800 dark:text-white">{section}</h3>
            <p className="text-sm text-gray-500 mt-2">Edit {section} content, images, and settings.</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
