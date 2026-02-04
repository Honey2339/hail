import React from "react";
import { ArrowLeft } from "lucide-react";

const PaperButton = ({ label }: { label: string }) => {
  return (
    <button className="inline-flex items-center gap-2 text-sm text-black/40 hover:text-black transition-colors duration-300 cursor-pointer">
      <ArrowLeft size={14} />
      {label}
    </button>
  );
};

export default PaperButton;
