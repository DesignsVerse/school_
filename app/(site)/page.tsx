import { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Categories from "@/components/Category";
import Event from "@/components/Event";
import FAQ from "@/components/FAQ";
import Course from "@/components/Course";
import Activitie from "@/components/Activitie";

// Optimized Metadata for SEO
export const metadata: Metadata = {
  title: "Bethel Secondary School | Quality Education for a Bright Future",
  description:
    "Welcome to Bethel Secondary School - Providing excellent secondary education, extracurricular activities, and holistic development for students. Enroll now!",
  keywords:
    "Bethel Secondary School, secondary education, school admission, quality education, student development, extracurricular activities, academic excellence",
  robots: "index, follow",
  authors: [{ name: "Bethel Secondary School Team" }],
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/",
  },
  openGraph: {
    title: "Bethel Secondary School | Empowering Students for Success",
    description:
      "Discover Bethel Secondary School - A place for quality education, personal growth, and a bright future. Join our community today!",
    images: [
      {
        url: "/images/school-campus.jpg", // Placeholder image, tu apna image URL de sakta hai
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School Campus",
      },
    ],
    url: "https://www.bethelsecondaryschool.com/",
    type: "website",
  },
};

export default function Home() {
  // Structured Data for Schema.org
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Bethel Secondary School",
    url: "https://www.bethelsecondaryschool.com",
    description:
      "Bethel Secondary School offers quality secondary education with a focus on academic excellence and student development.",
    publisher: {
      "@type": "Organization",
      name: "Bethel Secondary School",
    },
  };

  return (
    <main>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homeSchema) }}
        />
      </head>
      <Hero />
      <Categories />
      <CTA />
      <About />
      <Event />
      <FAQ />
      <Course />
      <Testimonial />
      <Activitie />
      <Blog />
    </main>
  );
}