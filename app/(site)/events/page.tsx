import SectionHeader from '@/components/Common/SectionHeader'
import Event from '@/components/Event/Event'
import React from 'react'
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Events | Bethel Secondary School - Upcoming Activities",
  description:
    "Discover upcoming events and activities at Bethel Secondary School. Stay updated with our school calendar and celebrations!",
  keywords:
    "Bethel Secondary School, school events, upcoming activities, school calendar, student events, educational programs",
  robots: "index, follow",
  authors: [{ name: "Bethel Secondary School Team" }],
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/events",
  },
  openGraph: {
    title: "Events at Bethel Secondary School | Join Our Activities",
    description:
      "Check out the latest events at Bethel Secondary School. From academic to extracurricular, we have it all!",
    images: [
      {
        url: "/images/event-featured.jpg", // Placeholder, tu apna image URL de sakta hai
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School Events",
      },
    ],
    url: "https://www.bethelsecondaryschool.com/events",
    type: "website",
  },
};

const Events = () => {
  return (
    <>
  <SectionHeader title="Event" breadcrumbPath="Event" />
    <div>
      <Event/>
    </div>
    </>
  )
}

export default Events
