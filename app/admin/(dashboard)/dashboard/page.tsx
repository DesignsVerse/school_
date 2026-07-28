import Link from "next/link"
import { prisma } from "@/lib/prisma"
import { ADMIN_SECTION_DEFINITIONS } from "@/lib/admin-sections"

export default async function AdminDashboard() {
  const [contentCount, blogCount, adminCount, sectionGroups] = await Promise.all([
    prisma.siteContent.count(),
    prisma.blogPost.count(),
    prisma.adminUser.count(),
    prisma.siteContent.groupBy({
      by: ["section"],
      _count: {
        section: true,
      },
    }),
  ])

  const sectionMap = new Map(sectionGroups.map((item) => [item.section, item._count.section]))

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Website Overview</h1>
      <p className="mt-2 max-w-3xl text-gray-600 dark:text-gray-300">
        Use this area to update the most important website content and create admin
        credentials you can share with your team.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Content Fields</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{contentCount}</p>
          <p className="mt-2 text-sm text-gray-500">Editable text, image, and button values.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Blog Posts</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{blogCount}</p>
          <p className="mt-2 text-sm text-gray-500">Posts currently stored in the admin panel.</p>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
          <p className="text-sm font-medium text-gray-500">Admin Accounts</p>
          <p className="mt-2 text-3xl font-bold text-blue-600">{adminCount}</p>
          <p className="mt-2 text-sm text-gray-500">Users allowed to sign in and edit the site.</p>
        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Major Website Sections</h2>
            <p className="mt-1 text-sm text-gray-500">
              Fast access to the key content areas that matter most on the homepage.
            </p>
          </div>
          <Link
            href="/admin/users"
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Create Admin Login
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {ADMIN_SECTION_DEFINITIONS.map((section) => (
            <div key={section.slug} className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{section.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{section.description}</p>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {sectionMap.get(section.slug) || 0} fields
                </span>
              </div>

              <div className="mt-6 flex gap-3">
                <Link
                  href={`/admin/pages/${section.slug}`}
                  className="rounded-md bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
                >
                  Edit Section
                </Link>
                <Link
                  href={section.publicPath}
                  className="rounded-md border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-200 dark:hover:bg-gray-700"
                >
                  View Page
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Recommended CMS Modules</h2>
        <p className="mt-2 max-w-3xl text-sm text-gray-500">
          These are the next best admin modules to add so the panel becomes a full school CMS
          instead of only a homepage editor.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            ["Noticeboard", "Create school notices directly in admin instead of relying on an external feed.", "/admin/notices"],
            ["Faculty / Teachers", "Manage teacher names, roles, photos, and department details.", "/admin/faculty"],
            ["Events", "Add upcoming events, dates, venue details, and featured event banners.", "/admin/events"],
            ["Gallery", "Upload or manage activity photos and videos from one place."],
            ["Admission Enquiries", "Store admission form submissions and let staff track follow-ups.", "/admin/admissions"],
            ["Contact And Settings", "Edit phone numbers, address, email, social links, and SEO defaults."],
          ].map(([title, description, href]) => (
            <div key={title} className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-gray-500">{description}</p>
              {href && (
                <Link href={href} className="mt-3 inline-block text-sm font-semibold text-blue-600 hover:underline">
                  Open module
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
