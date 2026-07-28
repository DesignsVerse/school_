import { prisma } from "@/lib/prisma"
import CreateAdminUserForm from "@/components/Admin/CreateAdminUserForm"

export default async function AdminUsersPage() {
  const users = await prisma.adminUser.findMany({
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      name: true,
      email: true,
      createdAt: true,
    },
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Users</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Create login IDs and passwords for staff members who should manage the website.
        Passwords are encrypted before storage.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 xl:grid-cols-[minmax(0,1fr)_380px]">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Current Admin Accounts</h2>
          <div className="mt-5 overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="py-3 pr-4 font-medium">Name</th>
                  <th className="py-3 pr-4 font-medium">Email</th>
                  <th className="py-3 font-medium">Created</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {users.map((user) => (
                  <tr key={user.id} className="text-sm text-gray-700 dark:text-gray-200">
                    <td className="py-4 pr-4">{user.name || "Admin User"}</td>
                    <td className="py-4 pr-4">{user.email}</td>
                    <td className="py-4">
                      {new Intl.DateTimeFormat("en-IN", {
                        dateStyle: "medium",
                      }).format(user.createdAt)}
                    </td>
                  </tr>
                ))}
                {users.length === 0 && (
                  <tr>
                    <td colSpan={3} className="py-6 text-center text-sm text-gray-500">
                      No admin accounts found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <CreateAdminUserForm />
      </div>
    </div>
  )
}
