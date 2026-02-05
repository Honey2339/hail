import Faq from "@/components/Faq";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Hail temporary email service. Learn how disposable emails work, privacy features, and email retention policies.",
  openGraph: {
    title: "FAQ - Hail Temporary Email",
    description:
      "Find answers to common questions about using Hail for disposable email addresses.",
  },
  alternates: {
    canonical: "https://hail.prasoon.rs/faq",
  },
};

const page = () => {
  return (
    <div className="min-h-screen bg-cream pt-28 pb-16">
      <Faq />
    </div>
  );
};

export default page;
