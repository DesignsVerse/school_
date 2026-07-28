import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { deleteFacultyMember, importExistingFaculty, saveFacultyMember } from "./actions"
import ImageUploadField from "@/components/Admin/ImageUploadField"

export default async function FacultyAdminPage() {
  const members = await prisma.facultyMember.findMany({
    orderBy: [{ sortOrder: "asc" }, { createdAt: "asc" }],
  })

  return (
    <div>
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Faculty / Teachers</h1>
          <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
            Manage teacher profiles, roles, phone numbers, profile images, and highlight points.
          </p>
        </div>

        {members.length === 0 && (
          <form action={importExistingFaculty}>
            <button
              type="submit"
              className="rounded-md bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
            >
              Import Current Website Faculty
            </button>
          </form>
        )}
      </div>

      {members.length === 0 && (
        <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          The public website still has faculty profiles in the old static file, but they are not in
          the CMS database yet. Click <strong>Import Current Website Faculty</strong> to bring them
          into admin so you can edit them here.
        </div>
      )}

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Faculty Member</h2>
        <form action={saveFacultyMember} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="name" required placeholder="Full name" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required placeholder="teacher-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="role" required placeholder="Role / designation" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="phone" placeholder="Phone number" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <ImageUploadField name="imageSrc" label="Teacher Photo" required className="md:col-span-2" />
          <input name="sortOrder" type="number" defaultValue={0} placeholder="Sort order" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="about" required rows={3} placeholder="Short about text" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="description" rows={4} placeholder="Longer profile description" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="highlights" rows={5} placeholder="One highlight per line" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm md:col-span-2 dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked className="h-4 w-4" />
            Show this teacher on the public website
          </label>
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Save Faculty Member
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Faculty</h2>
        <p className="mt-1 text-sm text-gray-500">{members.length} profiles in CMS</p>
        <div className="mt-5 grid grid-cols-1 gap-4 lg:grid-cols-2">
          {members.map((member) => (
            <div key={member.id} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="flex items-start justify-between gap-4">
                <div className="flex gap-4">
                  {member.imageSrc ? (
                    <img
                      src={member.imageSrc}
                      alt={member.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                  ) : null}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{member.name}</h3>
                    <p className="mt-1 text-sm text-blue-600">{member.role}</p>
                    <p className="mt-1 text-xs text-gray-400">Slug: {member.slug}</p>
                    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{member.about}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Link
                    href={`/admin/faculty/${member.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </Link>
                  <form action={deleteFacultyMember.bind(null, member.id)}>
                    <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
          {members.length === 0 && <p className="text-sm text-gray-500">No faculty profiles yet.</p>}
        </div>
      </div>
    </div>
  )
}
