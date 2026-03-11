export default function AdminDashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Content Keys</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">Manage</p>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Total Blog Posts</h3>
          <p className="text-3xl font-bold text-blue-600 mt-2">Manage</p>
        </div>
      </div>
    </div>
  )
}
