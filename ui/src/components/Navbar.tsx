"use client";

import { Home, FileText } from "lucide-react";
import { NavBarComponent } from "./NavbarComponent";

const items = [
  {
    name: "Home",
    url: "/",
    href: "/",
    icon: Home,
  },
  {
    name: "Contact",
    url: "/contact",
    href: "/contact",
    icon: FileText,
  },
  {
    name: "FAQ",
    url: "/faq",
    href: "/faq",
    icon: FileText,
  },
];

export function Navbar() {
  return <NavBarComponent items={items} defaultActive="Home" />;
}
