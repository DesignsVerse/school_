"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/site-content", label: "Advanced Content" },
  { href: "/admin/pages", label: "Website Content" },
  { href: "/admin/notices", label: "Noticeboard" },
  { href: "/admin/faculty", label: "Faculty / Teachers" },
  { href: "/admin/events", label: "Events" },
  { href: "/admin/admissions", label: "Admission Enquiries" },
  { href: "/admin/blog", label: "Blog Posts" },
  { href: "/admin/users", label: "Admin Users" },
]

export default function AdminSidebarNav() {
  const pathname = usePathname()

  return (
    <nav className="mt-6 flex flex-col px-4 space-y-2">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? "bg-blue-600 text-white shadow-sm"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
            }`}
          >
            {item.label}
          </Link>
        )
      })}
    </nav>
  )
}
