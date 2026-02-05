import type { Metadata } from "next";
import { Instrument_Serif, Figtree } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

const siteUrl = "https://hail.prasoon.rs";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hail - Free Temporary Email Service",
    template: "%s | Hail",
  },
  description:
    "Free disposable email addresses that protect your privacy. No sign-up required. Emails automatically deleted after 7 days. Instant, anonymous, and secure temp mail.",
  keywords: [
    "temporary email",
    "temp mail",
    "disposable email",
    "fake email",
    "anonymous email",
    "throwaway email",
    "free email",
    "privacy email",
    "spam protection",
    "burner email",
    "10 minute mail",
    "temporary inbox",
  ],
  authors: [{ name: "Prasoon Kumar", url: "https://github.com/Honey2339" }],
  creator: "Prasoon Kumar",
  publisher: "Prasoon Kumar",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Hail",
    title: "Hail - Free Temporary Email Service",
    description:
      "Disposable email addresses that protect your privacy. No sign-up required. Emails vanish after 7 days.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hail - Temporary Email Service",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hail - Free Temporary Email Service",
    description:
      "Disposable email addresses that protect your privacy. No sign-up required. Emails vanish after 7 days.",
    images: ["/og-image.png"],
    creator: "@Prasoon2339",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "technology",
  manifest: "/manifest.json",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  other: {
    "google-site-verification": process.env.GOOGLE_VERIFICATION_CODE || "",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Hail",
  description:
    "Free disposable email addresses that protect your privacy. No sign-up required. Emails automatically deleted after 7 days.",
  url: "https://hail.prasoon.rs",
  applicationCategory: "UtilityApplication",
  operatingSystem: "Any",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  author: {
    "@type": "Person",
    name: "Prasoon Kumar",
    url: "https://github.com/Honey2339",
  },
  featureList: [
    "Disposable email addresses",
    "No registration required",
    "Automatic deletion after 7 days",
    "Privacy protection",
    "Instant email creation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={`${instrumentSerif.variable} ${figtree.variable} font-sans antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
