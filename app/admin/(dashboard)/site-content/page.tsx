import { prisma } from "@/lib/prisma"
import { saveSiteContent, deleteSiteContent } from "./actions"

export default async function SiteContentPage() {
  const contentKeys = await prisma.siteContent.findMany({
    orderBy: { section: 'asc' }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Site Content Manager</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Manage the dynamic text content blocks for the website.</p>

      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Add / Update Content</h2>
        <form action={saveSiteContent} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Section (e.g. Hero)</label>
            <input name="section" required className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Key (e.g. Title)</label>
            <input name="key" required className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div className="md:col-span-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Value (Content Text)</label>
            <textarea name="value" required rows={4} className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div className="md:col-span-3">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save Content</button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Existing Content Blocks</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Section</th>
                <th className="py-3 px-4 text-left">Key</th>
                <th className="py-3 px-4 text-left">Value</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {contentKeys.map((item) => (
                <tr key={item.id}>
                  <td className="py-3 px-4">{item.section}</td>
                  <td className="py-3 px-4">{item.key}</td>
                  <td className="py-3 px-4 max-w-xs truncate">{item.value}</td>
                  <td className="py-3 px-4 text-right">
                    <form action={deleteSiteContent.bind(null, item.id)}>
                      <button type="submit" className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </form>
                  </td>
                </tr>
              ))}
              {contentKeys.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-500">No content found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
