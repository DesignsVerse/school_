import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { deleteNotice, saveNotice } from "./actions"

export default async function NoticesAdminPage() {
  const notices = await prisma.notice.findMany({
    orderBy: { noticeDate: "desc" },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Noticeboard</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Create or update school notices that appear on the public noticeboard.
      </p>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Add Notice</h2>
        <form action={saveNotice} className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          <input name="title" required placeholder="Notice title" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required placeholder="notice-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="noticeDate" type="date" required className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked className="h-4 w-4" />
            Publish this notice
          </label>
          <textarea name="summary" required rows={3} placeholder="Short summary" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="content" required rows={6} placeholder="Full notice content" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Save Notice
            </button>
          </div>
        </form>
      </div>

      <div className="mt-8 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Existing Notices</h2>
        <div className="mt-5 space-y-4">
          {notices.map((notice) => (
            <div key={notice.id} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{notice.title}</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {notice.slug} | {new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(notice.noticeDate)}
                  </p>
                  <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{notice.summary}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <Link
                    href={`/admin/notices/${notice.id}`}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    Edit
                  </Link>
                  <form action={deleteNotice.bind(null, notice.id)}>
                    <button type="submit" className="text-sm font-medium text-red-500 hover:text-red-700">Delete</button>
                  </form>
                </div>
              </div>
            </div>
          ))}
          {notices.length === 0 && <p className="text-sm text-gray-500">No notices yet.</p>}
        </div>
      </div>
    </div>
  )
}
