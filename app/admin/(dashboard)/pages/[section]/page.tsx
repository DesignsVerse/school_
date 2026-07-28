import { prisma } from "@/lib/prisma"
import { updateSectionContent } from "../actions"
import Link from "next/link"
import { getSectionDefinition } from "@/lib/admin-sections"
import ImageUploadField from "@/components/Admin/ImageUploadField"
import ConfirmSubmitButton from "@/components/Admin/ConfirmSubmitButton"

export default async function SectionEditor({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params
  
  const content = await prisma.siteContent.findMany({
    where: { section },
    orderBy: { key: 'asc' }
  })

  if (content.length === 0) {
    return <div>Section not found.</div>
  }

  const sectionDefinition = getSectionDefinition(section)

  return (
    <div>
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/pages" className="text-blue-600 hover:underline">← Back to Pages</Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
          Edit {sectionDefinition?.title || section}
        </h1>
      </div>

      <div className="mb-6 rounded-lg border border-blue-100 bg-blue-50 p-5 text-sm text-blue-900">
        <p className="font-semibold">
          {sectionDefinition?.description || "Update the content below and save your changes."}
        </p>
        <p className="mt-2">
          Changes update the website content for this section. Upload images directly for image fields.
        </p>
        {sectionDefinition && (
          <Link href={sectionDefinition.publicPath} className="mt-3 inline-block font-semibold underline">
            View this section on the website
          </Link>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm max-w-4xl">
        <form action={updateSectionContent.bind(null, section)} className="space-y-8">
          {content.map((item) => (
            <div key={item.id} className="rounded-lg border border-gray-200 p-5 dark:border-gray-700">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                {item.label || item.key}
                </label>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium uppercase text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                  {item.type}
                </span>
                <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-500 dark:bg-gray-700 dark:text-gray-300">
                  Key: {item.key}
                </span>
              </div>
              
              {item.type === "textarea" ? (
                <textarea
                  name={item.key}
                  defaultValue={item.value}
                  rows={5}
                  className="w-full p-3 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />
              ) : item.type === "image" ? (
                <ImageUploadField
                  name={item.key}
                  label="Upload image"
                  defaultValue={item.value}
                />
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
            <ConfirmSubmitButton
              message="Save changes to this website section?"
              className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition-colors"
            >
              Save Changes
            </ConfirmSubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
