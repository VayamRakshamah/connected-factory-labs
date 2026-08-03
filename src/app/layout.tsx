import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.companyName} | Industrial IoT & Machine Dashboards`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: siteConfig.companyName,
    description: siteConfig.description,
    url: siteConfig.domain,
    siteName: siteConfig.companyName,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.companyName}: ${siteConfig.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.companyName,
    description: siteConfig.description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};
const structured = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteConfig.companyName,
      url: siteConfig.domain,
      email: siteConfig.email,
    },
    {
      "@type": "ProfessionalService",
      name: siteConfig.companyName,
      url: siteConfig.domain,
      areaServed: "Worldwide",
      serviceType: [
        "Industrial IoT consulting",
        "PLC integration",
        "Machine monitoring dashboards",
      ],
    },
  ],
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structured) }}
        />
      </body>
    </html>
  );
}
