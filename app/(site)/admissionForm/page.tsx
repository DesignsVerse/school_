// app/admission/page.tsx
import AdmissionForm from "@/components/Admissionform/admission";
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Online Admission Form - Bethel Secondary School",
  description: "Apply for admission to Bethel Secondary School for the academic year 2025-26. Secure your child's future with our quality education.",
  keywords: [
    "school admission",
    "Bethel Secondary School",
    "online admission form",
    "2025-26 admission",
    "education",
    "school application"
  ],
  authors: [{ name: "Bethel Secondary School" }],
  openGraph: {
    title: "Online Admission Form - Bethel Secondary School",
    description: "Apply for admission to Bethel Secondary School for the academic year 2025-26.",
    url: "https://www.bethelsecondaryschool.com/admissionForm",
    siteName: "Bethel Secondary School",
    images: [
      {
        url: "https://www.bethelsecondaryschool.com/images/admission-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bethel Secondary School Admission",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  alternates: {
    canonical: "https://www.bethelsecondaryschool.com/admissionForm",
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

export default function AdmissionPage() {
  return (
    <>
      <AdmissionForm />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Online Admission Form",
            "description": "Admission application form for Bethel Secondary School",
            "url": "https://www.bethelsecondaryschool.com/admissionForm",
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