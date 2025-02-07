import React from "react";

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
  const truncatedBody = body.split(" ").slice(0, 10).join(" ") + "...";

  return (
    <div
      className="bg-zinc-800 text-left w-full/90 border-2 border-zinc-700 rounded-lg p-4 
      shadow-lg transition-all duration-300 
      hover:scale-[1.02] hover:shadow-xl 
      hover:border-zinc-600
      cursor-pointer"
      onClick={onClick}
    >
      <h2 className="text-lg font-bold text-zinc-100 mb-1">{title}</h2>
      <span className="text-sm text-zinc-400 block mb-2">{date}</span>
      <div className="text-zinc-300">{truncatedBody}</div>
    </div>
  );
};

export default PaperCard;
