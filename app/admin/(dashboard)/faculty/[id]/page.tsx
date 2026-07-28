import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { saveFacultyMember } from "../actions"
import ImageUploadField from "@/components/Admin/ImageUploadField"
import ConfirmSubmitButton from "@/components/Admin/ConfirmSubmitButton"

export default async function EditFacultyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const member = await prisma.facultyMember.findUnique({ where: { id } })

  if (!member) notFound()

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/faculty" className="text-blue-600 hover:underline">
          ← Back to Faculty
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Faculty Member</h1>
      </div>

      <div className="max-w-4xl rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <form action={saveFacultyMember} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={member.id} />
          <input name="name" required defaultValue={member.name} placeholder="Full name" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required defaultValue={member.slug} placeholder="teacher-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="role" required defaultValue={member.role} placeholder="Role / designation" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="phone" defaultValue={member.phone || ""} placeholder="Phone number" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <ImageUploadField
            name="imageSrc"
            label="Teacher Photo"
            required
            defaultValue={member.imageSrc}
            className="md:col-span-2"
          />
          <input name="sortOrder" type="number" defaultValue={member.sortOrder} placeholder="Sort order" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="about" required rows={3} defaultValue={member.about} placeholder="Short about text" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="description" rows={4} defaultValue={member.description || ""} placeholder="Longer profile description" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="highlights" rows={5} defaultValue={member.highlights.join("\n")} placeholder="One highlight per line" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm md:col-span-2 dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked={member.published} className="h-4 w-4" />
            Show this teacher on the public website
          </label>
          <div className="md:col-span-2">
            <ConfirmSubmitButton
              message="Save changes to this faculty member?"
              className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Update Faculty Member
            </ConfirmSubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
