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

export const metadata: Metadata = {
  title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",

  // other metadata
  description: "This is Home for Solid Pro"
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories/>
      <CTA />
      <About />
      <Event />
      <FAQ/>
      <Course />
      <Testimonial />
      <Activitie />  
      {/* <Pricing /> */}
      {/* <Contact /> */}
      <Blog />
    </main>
  );
}
