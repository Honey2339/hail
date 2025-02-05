import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="relative bg-zinc-900 border-2 border-zinc-800 p-6 flex flex-col items-center text-center 
      w-96 h-96 sm:w-[28rem] sm:h-[28rem] md:w-[32rem] md:h-[32rem] lg:w-[36rem] lg:h-[39rem] rounded-lg"
    >
      {children}
      <div className="absolute inset-0 border-2 border-zinc-600 bg-zinc-800 translate-x-2 translate-y-2 -z-10 rounded-lg"></div>
    </div>
  );
};

export default Card;
