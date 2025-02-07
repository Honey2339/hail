import React from "react";

const EmailCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative bg-zinc-900 border-2 border-zinc-800 p-6 flex flex-col items-center text-center 
      w-[95vw] h-[82vh] mt-24 max-w-8xl max-h-[90vh] rounded-2xl"
    >
      {children}
      <div className="absolute inset-0 border-2 border-zinc-600 bg-zinc-800 translate-x-2 translate-y-2 -z-10 rounded-2xl"></div>
    </div>
  );
};

export default EmailCard;
