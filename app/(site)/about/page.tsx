import AboutUsSection from "@/components/About/aboutsection";
import ActivitiesSection from "@/components/About/ActivitiesSection";
import CompleteEducationSection from "@/components/About/CompleteEducationSection";
import ServicesSection from "@/components/About/ServicesSection";
import Blog from "@/components/Blog";
import SectionHeader from "@/components/Common/SectionHeader";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Bethel Secondary School - Our Mission & Vision",
  description:
    "Learn about Bethel Secondary School - Our mission is to provide quality education, foster holistic development, and empower students for a bright future.",
  keywords:
    "Bethel Secondary School, about us, school mission, school vision, quality education, holistic development, student success",
  robots: "index, follow",
  authors: [{ name: "Bethel Secondary School Team" }],
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/about",
  },
  openGraph: {
    title: "About Bethel Secondary School | Empowering Future Leaders",
    description:
      "Discover our mission, vision, and commitment to excellence at Bethel Secondary School. Quality education for every student.",
    images: [
      {
        url: "/images/about-us.jpg", // Placeholder, tu apna image URL de sakta hai
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School - About Us",
      },
    ],
    url: "https://www.bethelsecondaryschool.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Bethel Secondary School",
    description:
      "Explore the mission and vision of Bethel Secondary School, dedicated to quality education and student growth.",
    images: ["/images/about-us.jpg"], // Placeholder, tu apna image URL de sakta hai
  },
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.ico", // Agar favicon hai to yaha daal dena
  },
};

export default function About() {
  return (
    <div>
      <SectionHeader
        title="About Us"
        breadcrumbPath="About"
        imageAlt=""
        imageUrl="/images.jpg"
      />
      <CompleteEducationSection />
      <ServicesSection />
      <FAQ />
      {/* <ActivitiesSection /> */}
      <Blog />
    </div>
  );
}