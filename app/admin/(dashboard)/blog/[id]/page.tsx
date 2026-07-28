import Link from "next/link"
import { notFound } from "next/navigation"
import { prisma } from "@/lib/prisma"
import { saveBlogPost } from "../actions"
import ConfirmSubmitButton from "@/components/Admin/ConfirmSubmitButton"

export default async function EditBlogPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const post = await prisma.blogPost.findUnique({ where: { id } })

  if (!post) notFound()

  return (
    <div>
      <div className="mb-6 flex items-center gap-4">
        <Link href="/admin/blog" className="text-blue-600 hover:underline">
          ← Back to Blog
        </Link>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Edit Blog Post</h1>
      </div>

      <div className="max-w-4xl rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <form action={saveBlogPost} className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <input type="hidden" name="id" value={post.id} />
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
            <input name="title" required defaultValue={post.title} className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Slug (URL)</label>
            <input name="slug" required defaultValue={post.slug} className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Content</label>
            <textarea name="content" required rows={10} defaultValue={post.content} className="mt-2 w-full rounded-md border p-3 dark:border-gray-600 dark:bg-gray-700 dark:text-white" />
          </div>
          <div className="md:col-span-2 flex items-center gap-2">
            <input type="checkbox" name="published" id="published" defaultChecked={post.published} className="h-4 w-4" />
            <label htmlFor="published" className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Published
            </label>
          </div>
          <div className="md:col-span-2">
            <ConfirmSubmitButton
              message="Save changes to this blog post?"
              className="rounded-md bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
            >
              Update Post
            </ConfirmSubmitButton>
          </div>
        </form>
      </div>
    </div>
  )
}
