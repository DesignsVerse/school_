import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const count = await prisma.siteContent.count();
  console.log("SiteContent count:", count);
  const data = await prisma.siteContent.findMany();
  console.log("Data:", JSON.stringify(data, null, 2));
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());
