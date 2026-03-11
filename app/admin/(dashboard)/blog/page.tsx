import { prisma } from "@/lib/prisma"
import { saveBlogPost, deleteBlogPost } from "./actions"

export default async function BlogAdminPage() {
  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Blog Manager</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-300">Create, edit, and manage your blog posts here.</p>

      <div className="mt-8 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">New Post</h2>
        <form action={saveBlogPost} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input name="title" required className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Slug (URL)</label>
            <input name="slug" required className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content (Markdown/Text)</label>
            <textarea name="content" required rows={8} className="mt-1 w-full p-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-white" />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" name="published" id="published" className="h-4 w-4" />
            <label htmlFor="published" className="text-sm font-medium text-gray-700 dark:text-gray-300">Publish immediately</label>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Save Post</button>
          </div>
        </form>
      </div>

      <div className="mt-8 text-gray-800 dark:text-white">
        <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Existing Posts</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left">Title</th>
                <th className="py-3 px-4 text-left">Slug</th>
                <th className="py-3 px-4 text-center">Status</th>
                <th className="py-3 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {posts.map((post) => (
                <tr key={post.id}>
                  <td className="py-3 px-4">{post.title}</td>
                  <td className="py-3 px-4">{post.slug}</td>
                  <td className="py-3 px-4 text-center">
                    {post.published ? (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Published</span>
                    ) : (
                      <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Draft</span>
                    )}
                  </td>
                  <td className="py-3 px-4 text-right flex justify-end gap-2">
                    <form action={deleteBlogPost.bind(null, post.id)}>
                      <button type="submit" className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                    </form>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="py-4 text-center text-gray-500">No posts found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
