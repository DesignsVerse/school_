import { auth } from "@/auth"
import { redirect } from "next/navigation"
import Link from "next/link"
import AdminSidebarNav from "@/components/Admin/AdminSidebarNav"

export const dynamic = "force-dynamic"

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
      <aside className="w-72 border-r border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800 shadow-md flex flex-col justify-between">
        <div>
          <div className="border-b border-gray-100 bg-gradient-to-br from-blue-50 to-white p-6 dark:border-gray-700 dark:from-gray-800 dark:to-gray-800">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Website Admin</h2>
            <p className="mt-1 text-sm text-gray-500">Welcome, {session.user?.name || session.user?.email}</p>
            <p className="mt-3 text-xs text-gray-500">
              Manage homepage content, blog posts, and admin logins.
            </p>
          </div>
          <AdminSidebarNav />
        </div>
        <div className="p-4 border-t dark:border-gray-700">
          <Link
            href="/"
            className="block rounded-md bg-blue-100 px-4 py-2 text-center text-blue-700 dark:bg-blue-900 dark:text-blue-300"
          >
            Exit to Website
          </Link>
        </div>
      </aside>
      <main className="flex-1 overflow-y-auto w-full p-8">
        {children}
      </main>
    </div>
  )
}
