import { prisma } from "@/lib/prisma"
import { saveSiteContent, deleteSiteContent } from "./actions"

export default async function SiteContentPage() {
  const contentKeys = await prisma.siteContent.findMany({
    orderBy: [{ section: "asc" }, { key: "asc" }],
  })

  const groupedContent = contentKeys.reduce<Record<string, typeof contentKeys>>((acc, item) => {
    if (!acc[item.section]) {
      acc[item.section] = []
    }

    acc[item.section].push(item)
    return acc
  }, {})

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Advanced Content</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Use this area for low-level CMS fields and one-off content blocks. For the main
        website sections, the `Website Content` menu is usually easier.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Sections</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{Object.keys(groupedContent).length}</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Content Blocks</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{contentKeys.length}</p>
        </div>
        <div className="rounded-lg bg-white p-5 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Best For</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Hidden fields, custom text, image URLs, and additional CMS entries.
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Add Or Update Content</h2>
        <p className="mt-2 text-sm text-gray-500">
          Add a new CMS field by section and key, or overwrite an existing one with the same section/key pair.
        </p>

        <form action={saveSiteContent} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Section</label>
            <input
              name="section"
              required
              placeholder="hero"
              className="mt-2 w-full rounded-md border p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Key</label>
            <input
              name="key"
              required
              placeholder="title"
              className="mt-2 w-full rounded-md border p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Value</label>
            <textarea
              name="value"
              required
              rows={5}
              className="mt-2 w-full rounded-md border p-3 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter the text or image path here"
            />
          </div>
          <div className="md:col-span-2">
            <button
              type="submit"
              className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Save Content
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">Existing Content Blocks</h2>
        <p className="mt-2 text-sm text-gray-500">
          Content is grouped by section so it behaves more like a CMS than a raw table.
        </p>

        <div className="mt-6 space-y-6">
          {Object.entries(groupedContent).map(([section, items]) => (
            <div key={section} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold capitalize text-gray-900 dark:text-white">{section}</h3>
                  <p className="mt-1 text-sm text-gray-500">{items.length} content fields</p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  Section
                </span>
              </div>

              <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
                {items.map((item) => (
                  <div key={item.id} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold text-gray-900 dark:text-white">{item.key}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-gray-400">{item.type}</p>
                      </div>
                      <form action={deleteSiteContent.bind(null, item.id)}>
                        <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">
                          Delete
                        </button>
                      </form>
                    </div>
                    <p className="mt-3 break-words text-sm text-gray-600 dark:text-gray-300">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {contentKeys.length === 0 && (
            <div className="rounded-lg bg-white p-8 text-center text-gray-500 shadow-sm dark:bg-gray-800">
              No content found.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
