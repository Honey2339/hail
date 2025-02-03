"use client";

import { animate, motion } from "framer-motion";
import React, { useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "./input";

export interface AnimatedCardProps {
  className?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  icons?: Array<{
    icon: React.ReactNode;
    size?: "sm" | "md" | "lg";
    className?: string;
  }>;
  children: React.ReactNode;
}

export function AnimatedCard({
  className,
  title,
  description,
  icons = [],
  children,
}: AnimatedCardProps) {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-8 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.70)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group",
        className
      )}
    >
      <div
        className={cn(
          "h-[15rem] md:h-[20rem] rounded-xl z-40",
          "bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
        )}
      ></div>
      {children}

      {/* {title && (
        <h3 className="text-lg font-semibold text-white py-2">{title}</h3>
        )}
        {description && (
          <p className="text-sm font-normal text-neutral-400 max-w-sm">
          {description}
          </p>
          )} */}
    </div>
  );
}

const Container = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      `rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
      shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]`,
      className
    )}
    {...props}
  />
));
Container.displayName = "Container";
