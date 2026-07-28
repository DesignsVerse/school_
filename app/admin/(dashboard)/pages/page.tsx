import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { getSectionDefinition } from "@/lib/admin-sections"

export default async function PagesOverview() {
  const sections = await prisma.siteContent.groupBy({
    by: ["section"],
    _count: {
      section: true,
    },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Website Content</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Select a section to edit the major website content. Each section groups together
        the text, buttons, and images shown on the public website.
      </p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map((section) => {
          const definition = getSectionDefinition(section.section)

          return (
            <Link
              key={section.section}
              href={`/admin/pages/${section.section}`}
              className="block rounded-lg bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                    {definition?.title || section.section}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {definition?.description ||
                      `Edit ${section.section} content, images, and settings.`}
                  </p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {section._count.section} fields
                </span>
              </div>

              <p className="mt-4 text-xs font-medium uppercase tracking-wide text-gray-400">
                Section key: {section.section}
              </p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
