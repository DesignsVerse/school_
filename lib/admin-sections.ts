export type AdminSectionDefinition = {
  slug: string
  title: string
  description: string
  publicPath: string
}

export const ADMIN_SECTION_DEFINITIONS: AdminSectionDefinition[] = [
  {
    slug: "hero",
    title: "Homepage Hero",
    description: "Edit the main banner title, subtitle, description, and visual.",
    publicPath: "/",
  },
  {
    slug: "about",
    title: "About Highlight",
    description: "Control the mission text, supporting image, and stats shown on the homepage.",
    publicPath: "/",
  },
  {
    slug: "cta",
    title: "Admission Call To Action",
    description: "Update the action banner text, button label, link, and banner image.",
    publicPath: "/",
  },
]

export function getSectionDefinition(section: string) {
  return ADMIN_SECTION_DEFINITIONS.find((item) => item.slug === section)
}
