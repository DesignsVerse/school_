import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  if (!session) {
    redirect("/admin/login")
  }

  return (
    <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-md flex flex-col justify-between">
        <div>
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Admin CRM</h2>
            <p className="text-sm text-gray-500 mb-6">Welcome, {session.user?.name}</p>
          </div>
          <nav className="mt-6 flex flex-col px-4 space-y-2">
            <Link
              href="/admin/dashboard"
              className="px-4 py-2 text-gray-700 bg-gray-200 dark:bg-gray-700 dark:text-gray-200 rounded-md"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/site-content"
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 rounded-md"
            >
              Advanced Content
            </Link>
            <Link
              href="/admin/pages"
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 rounded-md"
            >
              Manage Pages
            </Link>
            <Link
              href="/admin/blog"
              className="px-4 py-2 text-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 dark:text-gray-200 rounded-md"
            >
              Blog Posts
            </Link>
          </nav>
        </div>
        <div className="p-4 border-t dark:border-gray-700">
          <Link
            href="/"
            className="block text-center px-4 py-2 text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300 rounded-md"
          >
            Exit to Website
          </Link>
        </div>
      </aside>
      <main className="flex-1 p-8 overflow-y-auto w-full">
        {children}
      </main>
    </div>
  )
}
