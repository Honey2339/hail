import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Email",
  description:
    "Create your free temporary email address instantly. Choose any username and start receiving emails immediately. No registration required.",
  openGraph: {
    title: "Create Temporary Email - Hail",
    description:
      "Pick any username and get a disposable email address instantly. No sign-up needed.",
  },
  alternates: {
    canonical: "https://hail.prasoon.rs/mail",
  },
};

export default function MailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
