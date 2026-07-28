import { prisma } from "../lib/prisma"
import bcrypt from "bcryptjs"

async function main() {
  const newEmail = "admin@bethelsec.school"
  const oldEmail = "admin@example.com"
  const password = "admin123"
  const hashedPassword = await bcrypt.hash(password, 10)

  const existingNew = await prisma.adminUser.findUnique({ where: { email: newEmail } })
  const existingOld = await prisma.adminUser.findUnique({ where: { email: oldEmail } })

  if (existingNew) {
    await prisma.adminUser.update({
      where: { email: newEmail },
      data: {
        name: "Admin",
        password: hashedPassword,
      },
    })
    console.log(`Updated existing admin: ${newEmail} / ${password}`)
  } else if (existingOld) {
    await prisma.adminUser.update({
      where: { email: oldEmail },
      data: {
        email: newEmail,
        name: "Admin",
        password: hashedPassword,
      },
    })
    console.log(`Renamed admin email to: ${newEmail} / ${password}`)
  } else {
    await prisma.adminUser.create({
      data: {
        name: "Admin",
        email: newEmail,
        password: hashedPassword,
      },
    })
    console.log(`Created admin: ${newEmail} / ${password}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
