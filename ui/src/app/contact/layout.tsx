import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Prasoon Kumar, creator of Hail temporary email service. Connect via Twitter, LinkedIn, or GitHub.",
  openGraph: {
    title: "Contact - Hail Temporary Email",
    description: "Connect with the creator of Hail temporary email service.",
  },
  alternates: {
    canonical: "https://hail.prasoon.rs/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
