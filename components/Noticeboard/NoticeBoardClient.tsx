"use client"

import { useState } from "react"

type NoticeItem = {
  id: string
  title: string
  summary: string
  content: string
  noticeDate: string
}

export default function NoticeBoardClient({ notices }: { notices: NoticeItem[] }) {
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null)

  const formatDate = (dateString: string) =>
    new Intl.DateTimeFormat("en-IN", { dateStyle: "medium" }).format(new Date(dateString))

  return (
    <div className="mt-20 min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 px-4 py-8 md:py-16">
      <div className="mx-auto w-full max-w-4xl overflow-hidden rounded-xl bg-white shadow-xl">
        <div className="bg-indigo-600 p-4 text-white md:p-6">
          <h1 className="text-2xl font-bold md:text-3xl">School Notice Board</h1>
          <p className="mt-1 text-sm text-indigo-100 md:text-base">
            Stay updated with the latest announcements
          </p>
        </div>

        <div className="space-y-4 p-4 md:p-6">
          {notices.length > 0 ? (
            notices.map((notice) => (
              <div
                key={notice.id}
                className="cursor-pointer rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-all hover:bg-indigo-50 hover:shadow-md"
                onClick={() => setSelectedNotice(notice)}
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <span className="text-base font-semibold text-gray-900 md:text-lg">
                    {formatDate(notice.noticeDate)}
                  </span>
                  <h2 className="self-start rounded-full bg-indigo-100 px-2 py-1 text-xs text-indigo-800">
                    {notice.title}
                  </h2>
                </div>
                <p className="mt-2 text-sm text-gray-600 md:text-base">{notice.summary}</p>
                <div className="mt-3 text-sm font-medium text-indigo-600">Read more</div>
              </div>
            ))
          ) : (
            <div className="py-10 text-center text-gray-500">No notices available at the moment.</div>
          )}
        </div>
      </div>

      {selectedNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="relative w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl">
            <div className="bg-indigo-600 p-4 text-white md:p-5">
              <p className="text-xl font-bold md:text-2xl">{formatDate(selectedNotice.noticeDate)}</p>
              <h2 className="text-sm text-indigo-100 md:text-base">{selectedNotice.title}</h2>
            </div>

            <div className="max-h-[70vh] overflow-y-auto p-4 md:p-6">
              <p className="whitespace-pre-line text-sm text-gray-700 md:text-base">
                {selectedNotice.content}
              </p>
            </div>

            <div className="flex justify-end border-t border-gray-200 bg-gray-50 px-4 py-3 md:px-6 md:py-4">
              <button
                className="rounded-lg bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700 md:text-base"
                onClick={() => setSelectedNotice(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
