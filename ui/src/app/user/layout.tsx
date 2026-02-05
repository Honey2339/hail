import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbox",
  description: "View your temporary email inbox. All emails are automatically deleted after 7 days.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
