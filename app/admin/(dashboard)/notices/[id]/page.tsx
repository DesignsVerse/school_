import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { saveNotice } from "../actions"

export default async function EditNoticePage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const notice = await prisma.notice.findUnique({ where: { id } })

  if (!notice) notFound()

  const noticeDate = notice.noticeDate.toISOString().slice(0, 10)

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/notices" className="text-blue-600 hover:underline">
          ← Back to Notices
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Notice</h1>
      </div>

      <div className="max-w-4xl rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <form action={saveNotice} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={notice.id} />
          <input name="title" required defaultValue={notice.title} placeholder="Notice title" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="slug" required defaultValue={notice.slug} placeholder="notice-slug" className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <input name="noticeDate" type="date" required defaultValue={noticeDate} className="rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <label className="flex items-center gap-2 rounded-md border p-3 text-sm dark:border-gray-600 dark:text-white">
            <input type="checkbox" name="published" defaultChecked={notice.published} className="h-4 w-4" />
            Publish this notice
          </label>
          <textarea name="summary" required rows={3} defaultValue={notice.summary} placeholder="Short summary" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <textarea name="content" required rows={6} defaultValue={notice.content} placeholder="Full notice content" className="rounded-md border p-3 md:col-span-2 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          <div className="md:col-span-2">
            <button type="submit" className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">
              Update Notice
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
