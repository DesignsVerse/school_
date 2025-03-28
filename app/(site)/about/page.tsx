import AboutUsSection from "@/components/About/aboutsection";
import ActivitiesSection from "@/components/About/ActivitiesSection";
import CompleteEducationSection from "@/components/About/CompleteEducationSection";
import ServicesSection from "@/components/About/ServicesSection";
import Blog from "@/components/Blog";
import SectionHeader from "@/components/Common/SectionHeader";
import FAQ from "@/components/FAQ";

export default function About() {
  return (
    <div>
      {/* Your existing header component goes here */}
      <SectionHeader title="About Us" breadcrumbPath="About" imageAlt="" imageUrl="/images.jpg" />
      <CompleteEducationSection/>
      <ServicesSection/>
      <FAQ/>
      <ActivitiesSection/>
      <Blog/>
      {/* Other sections */}
    </div>
  );
}