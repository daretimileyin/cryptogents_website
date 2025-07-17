import { Plus, X } from "lucide-react";
import { useState } from "react";

interface DropDownTabProps {
  content: any;
}

export const DropDownTab = ({ content }: DropDownTabProps) => {
  const [isShown, setIsShown] = useState(false);

  return (
    <div className="relative w-full max-w-5xl mx-auto mb-5">
      {/* Corner White Edges */}
      {/* <div className="absolute top-0 left-0 w-2 h-4 border-l-1 border-white rounded-tl-md" />
      <div className="absolute top-0 right-0 w-2 h-4 border-r-1 border-white rounded-tr-md" /> */}

      {/* Main Container */}
      <div
        className={`
          w-full
          bg-gradient-to-br from-[#23242a] to-[#18181c]
          border-b-1 border-white
          border-t-1 border-white
          rounded-2xl
          shadow-lg
          transition
          hover:bg-[radial-gradient(ellipse_at_top_left,_rgba(255,255,255,0.08)_0%,_transparent_70%)]
          min-h-[84px]
        `}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between cursor-pointer text-white px-6 py-5 text-xl"
          onClick={() => setIsShown(!isShown)}
        >
          <p className="text-xl md:text-2xl font-medium">{content.question}</p>
          {!isShown ? (
            <Plus size={28} className="text-white/70" />
          ) : (
            <X size={28} className="text-white/70" />
          )}
        </div>

        {/* Expandable Content */}
        <div
          className={`px-6 text-white text-[1.05rem] overflow-hidden transition-all duration-300 ease-in-out ${
            isShown ? "pb-6 max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-2">{content.answer}</div>
        </div>
      </div>
    </div>
  );
};
