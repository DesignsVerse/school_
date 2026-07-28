export type TeamMember = {
  name: string
  about: string
  phone: string
  imageSrc: string
  role: string
  socialLinks?: { platform: string; icon: string }[]
  description?: string
  highlights?: string[]
}
