import { prisma } from "../lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
  // 1. Seed Admin User
  const existingAdmin = await prisma.adminUser.findUnique({
    where: { email: "admin@example.com" },
  });

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash("admin123", 10);
    await prisma.adminUser.create({
      data: {
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
      },
    });
    console.log("Created default admin user: admin@example.com / admin123");
  }

  // 2. Seed Site Content for Home Page
  const content = [
    // Hero Section
    { section: "hero", key: "subtitle", value: "Welcome to Bethel Secondary School", type: "text", label: "Hero Subtitle" },
    { section: "hero", key: "title", value: "Empowering Young Minds Since 1982", type: "text", label: "Hero Title" },
    { section: "hero", key: "description", value: "Bethel Secondary School is an Educational Institution run by the Bethel Educational Society (Regd. & Recogd. by the Govt. of Rajasthan), started for educating the children in the Fear of the Lord and excellence in knowledge.", type: "textarea", label: "Hero Description" },
    { section: "hero", key: "bannerImage", value: "/images/hero/banner.jpg", type: "image", label: "Hero Banner Image" },
    
    // About Section
    { section: "about", key: "badge", value: "Our About Us", type: "text", label: "About Badge" },
    { section: "about", key: "title", value: "Our Mission: Bethel Secondary School", type: "text", label: "About Title" },
    { section: "about", key: "description", value: "At Bethel Secondary School, our mission is to nurture every child into a responsible, confident, and morally grounded individual through quality education rooted in values", type: "textarea", label: "About Description" },
    { section: "about", key: "image", value: "/images/about/mission.jpg", type: "image", label: "About Main Image" },
    { section: "about", key: "stats_label", value: "Successfully Completed", type: "text", label: "Stats Label" },
    { section: "about", key: "stats_value", value: "183K+", type: "text", label: "Stats Value" },

    // CTA Section
    { section: "cta", key: "title", value: "Ready to Join Our Community?", type: "text", label: "CTA Title" },
    { section: "cta", key: "buttonText", value: "Register Now", type: "text", label: "CTA Button Text" },
    { section: "cta", key: "buttonLink", value: "/admissionForm", type: "link", label: "CTA Button Link" },
  ];

  for (const item of content) {
    await prisma.siteContent.upsert({
      where: { section_key: { section: item.section, key: item.key } },
      update: item,
      create: item,
    });
  }

  console.log("Site content seeded successfully");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
