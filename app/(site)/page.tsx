import { Metadata } from "next";
import Hero from "@/components/Hero";
import { prisma } from "@/lib/prisma";
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

export default async function Home() {
  const content = await prisma.siteContent.findMany();
  
  const getVal = (section: string, key: string, fallback: string) => 
    content.find(c => c.section === section && c.key === key)?.value || fallback;

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
      <Hero 
        title={getVal("hero", "title", "Empowering Young Minds Since 1982")}
        subtitle={getVal("hero", "subtitle", "Welcome to Bethel Secondary School")}
        description={getVal("hero", "description", "Bethel Secondary School is an Educational Institution run by the Bethel Educational Society (Regd. & Recogd. by the Govt. of Rajasthan), started for educating the children in the Fear of the Lord and excellence in knowledge. The School was started in 1982 by Late. Sri M.M. Thankachan. Now it is headed by Mrs. Sheeja Stanley, Principal and Mr. Stanley John, Director")}
      />
      <Categories />
      <CTA 
        title={getVal("cta", "title", "Ready to Join Our Community?")}
        description={getVal("cta", "description", "We provide reliable and innovative learning solutions that inspire creativity and foster academic excellence for students of all ages.")}
        buttonText={getVal("cta", "buttonText", "Register Now")}
        buttonLink={getVal("cta", "buttonLink", "/admissionForm")}
        image={getVal("cta", "bannerImage", "/images.jpg")}
      />
      <About 
        badge={getVal("about", "badge", "Our About Us")}
        title={getVal("about", "title", "Our Mission: Bethel Secondary School")}
        description={getVal("about", "description", "At Bethel Secondary School, our mission is to nurture every child into a responsible, confident, and morally grounded individual through quality education rooted in values")}
        image={getVal("about", "image", "/images/about/mission.jpg")}
        statsLabel={getVal("about", "stats_label", "Successfully Completed")}
        statsValue={getVal("about", "stats_value", "183K+")}
      />
      <Event />
      <FAQ />
      {/* <Course /> */}
      <Testimonial />
      <Activitie />
      <Blog />
    </main>
  );
}