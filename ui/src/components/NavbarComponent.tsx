"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
  defaultActive?: string;
}

export function NavBarComponent({
  items,
  className,
  defaultActive = "Home",
}: NavBarProps) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<string>(defaultActive);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const currentItem = items.find((item) => item.url === pathname);
    if (currentItem) {
      setActiveTab(currentItem.name);
    }
  }, [pathname, items]);

  if (!mounted) return null;

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-[9999] bg-cream/80 backdrop-blur-md border-b border-black/5"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-black tracking-tight">
          Hail
        </Link>

        <div className="flex items-center gap-8">
          {items.map((item) => {
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative text-sm tracking-wide transition-colors duration-300",
                  isActive
                    ? "text-black"
                    : "text-black/40 hover:text-black/70"
                )}
              >
                <span className="hidden sm:inline">{item.name}</span>
                <span className="sm:hidden">
                  <item.icon size={18} strokeWidth={1.5} />
                </span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-black"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </motion.nav>
  );
}
