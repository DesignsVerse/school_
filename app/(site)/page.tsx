import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Category";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";
import Categories from "@/components/Category";

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
      <Feature />
      <FeaturesTab />
      <FunFact />
      <Integration />
      
      <FAQ />
      <Testimonial />
      <Pricing />
      <Contact />
      <Blog />
    </main>
  );
}
