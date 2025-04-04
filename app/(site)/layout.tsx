"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "../globals.css";
import ToasterContext from "./context/ToastContext";
import WhatsAppToggle from "@/components/whatsapp";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data for Schema.org
  const rootSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    name: "Bethel Secondary School",
    url: "https://www.bethelsecondaryschool.com",
    description:
      "Bethel Secondary School provides quality secondary education with a focus on academic excellence and student development.",
    publisher: {
      "@type": "Organization",
      name: "Bethel Secondary School",
    },
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <title>Bethel Secondary School | Quality Education for a Bright Future</title>
        <meta
          name="description"
          content="Welcome to Bethel Secondary School - Offering quality secondary education, holistic development, and extracurricular activities for students."
        />
        <meta
          name="keywords"
          content="Bethel Secondary School, secondary education, school admission, quality education, student development, academic excellence"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Bethel Secondary School Team" />
        <link rel="canonical" href="https://www.bethelsecondaryschool.com/" />
        <meta
          property="og:title"
          content="Bethel Secondary School | Empowering Students for Success"
        />
        <meta
          property="og:description"
          content="Discover Bethel Secondary School - A place for quality education, personal growth, and a bright future."
        />
        <meta property="og:image" content="/images/school-campus.jpg" />
        <meta property="og:url" content="https://www.bethelsecondaryschool.com/" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(rootSchema) }}
        />
      </Head>
      <body className={`dark:bg-black ${inter.className}`}>
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <Header />
          <ToasterContext />
          {children}
          <Footer />
          <ScrollToTop />
          <WhatsAppToggle />
        </ThemeProvider>
      </body>
    </html>
  );
}