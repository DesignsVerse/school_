// app/contact/page.tsx
import Contact from '@/components/Contact/contact';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us - Bethel Secondary School",
  description: "Get in touch with Bethel Secondary School for inquiries, admissions, or any other information. We're here to help with your educational needs.",
  keywords: [
    "contact school",
    "Bethel Secondary School contact",
    "school inquiries",
    "school information",
    "education contact",
    "school support"
  ],
  authors: [{ name: "Bethel Secondary School" }],
  openGraph: {
    title: "Contact Us - Bethel Secondary School",
    description: "Reach out to Bethel Secondary School for any questions or information about our programs and admissions.",
    url: "https://www.bethelsecondaryschool.com/contact",
    siteName: "Bethel Secondary School",
    images: [
      {
        url: "https://www.bethelsecondaryschool.com/images/contact-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Bethel Secondary School",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/contact",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
            "name": "Contact Us",
            "description": "Contact page for Bethel Secondary School",
            "url": "https://www.bethelsecondaryschool.com/contact",
            "publisher": {
              "@type": "Organization",
              "name": "Bethel Secondary School",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.bethelsecondaryschool.com/logo.png"
              }
            }
          })
        }}
      />
    </>
  );
}