import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white border border-black/5 p-8 flex flex-col w-full max-w-2xl rounded-sm shadow-sm">
      {children}
    </div>
  );
};

export default Card;
