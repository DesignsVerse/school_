// app/contact/page.tsx
import Contact from '@/components/Contact/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Bethel Secondary School | Admissions & Enquiries",
  description: "Get in touch with Bethel Secondary School for admissions, academic queries, or general information. Visit our campus or contact us via phone/email.",
  keywords: [
    "school contact",
    "Bethel admissions",
    "school address",
    "school phone number",
    "academic enquiries",
    "school contact form"
  ],
  authors: [{ name: "Bethel Secondary School" }],
  openGraph: {
    title: "Contact Bethel Secondary School | Official Contact Page",
    description: "Reach out to Bethel Secondary School for admissions, academic support, and school information. We're here to help with your educational journey.",
    url: "https://www.bethelsecondaryschool.com/contact",
    siteName: "Bethel Secondary School",
    images: [
      {
        url: "https://www.bethelsecondaryschool.com/images/og-contact.jpg",
        width: 1200,
        height: 630,
        alt: "Bethel School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <Contact />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Bethel Secondary School",
            "description": "Official contact page for Bethel Secondary School",
            "url": "https://www.bethelsecondaryschool.com/contact",
            "publisher": {
              "@type": "Organization",
              "name": "Bethel Secondary School",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.bethelsecondaryschool.com/logo.png",
                "width": 200,
                "height": 60
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "No. 25, Education Valley",
                "addressLocality": "Bengaluru",
                "addressRegion": "Karnataka",
                "postalCode": "560001",
                "addressCountry": "India"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-98765-43210",
                "contactType": "Admissions",
                "email": "admissions@bethelschool.edu.in",
                "areaServed": "India"
              }
            }
          })
        }}
      />
    </>
  );
}