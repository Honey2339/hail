import React from "react";

const PaperButton = ({ label }: { label: string }) => {
  return (
    <button className="relative bg-white border-2 border-zinc-800 px-8 py-2 font-bold text-zinc-900 rounded-lg">
      {label}
    </button>
  );
};

export default PaperButton;
