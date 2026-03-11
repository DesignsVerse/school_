import { prisma } from "@/lib/prisma"
import { updateSectionContent } from "../actions"
import Link from "next/link"

export default async function SectionEditor({ params }: { params: { section: string } }) {
  const { section } = params
  
  const content = await prisma.siteContent.findMany({
    where: { section },
    orderBy: { key: 'asc' }
  })

  if (content.length === 0) {
    return <div>Section not found.</div>
  }

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/pages" className="text-blue-600 hover:underline">← Back to Pages</Link>
        <h1 className="text-3xl font-bold capitalize text-gray-900 dark:text-white">Edit {section}</h1>
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm max-w-4xl">
        <form action={updateSectionContent.bind(null, section)} className="space-y-8">
          {content.map((item) => (
            <div key={item.id}>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                {item.label || item.key}
              </label>
              
              {item.type === "textarea" ? (
                <textarea
                  name={item.key}
                  defaultValue={item.value}
                  rows={5}
                  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              ) : item.type === "image" ? (
                <div className="space-y-4">
                  <input
                    name={item.key}
                    defaultValue={item.value}
                    className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Image URL"
                  />
                  {item.value && (
                    <div className="relative w-40 h-24 rounded-lg overflow-hidden border">
                      <img src={item.value} alt={item.key} className="object-cover w-full h-full" />
                    </div>
                  )}
                </div>
              ) : (
                <input
                  name={item.key}
                  defaultValue={item.value}
                  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              )}
              {item.description && (
                <p className="mt-1 text-xs text-gray-500">{item.description}</p>
              )}
            </div>
          ))}

          <div className="pt-6 border-t dark:border-gray-700">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
