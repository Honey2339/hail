"use client";

import React from "react";
import { motion } from "framer-motion";

interface PaperCardProps {
  title: string;
  date: string;
  body: string;
  onClick?: (id: any) => void;
}

const PaperCard: React.FC<PaperCardProps> = ({
  title,
  date,
  body,
  onClick,
}) => {
  const truncatedBody = body.split(" ").slice(0, 8).join(" ") + "...";
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });

  return (
    <motion.div
      className="w-full text-left border-b border-black/5 py-5 cursor-pointer group"
      onClick={onClick}
      whileHover={{ x: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-baseline justify-between gap-4 mb-1.5">
        <h2 className="text-base font-medium text-black group-hover:text-black/70 transition-colors duration-200 truncate">
          {title}
        </h2>
        <span className="text-xs text-black/30 whitespace-nowrap shrink-0">
          {formattedDate}
        </span>
      </div>
      <p className="text-sm text-black/40 leading-relaxed">{truncatedBody}</p>
    </motion.div>
  );
};

export default PaperCard;
