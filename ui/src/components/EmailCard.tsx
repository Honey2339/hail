import React from "react";

const EmailCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-white border border-black/5 p-8 flex flex-col w-[95vw] max-w-5xl h-[82vh] mt-24 rounded-sm shadow-sm">
      {children}
    </div>
  );
};

export default EmailCard;
