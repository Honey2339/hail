import React from "react";

const PaperButton = ({ label }: { label: string }) => {
  return (
    <button
      className="relative bg-white border-2 border-zinc-800 px-8 py-2 font-bold text-zinc-900 rounded-lg 
                 transition-all duration-200 ease-in-out 
                 hover:scale-105
                 hover:shadow-[0_8px_15px_rgba(0,0,0,0.2)] 
                 active:scale-95"
    >
      {label}
    </button>
  );
};

export default PaperButton;
