import { ArrowUpRight } from "lucide-react";
import clsx from "clsx"; // or use "classnames"

interface CallCTAProps {
  className?: string;
}

const CallCTA = ({ className }: CallCTAProps) => {
  return (
    <button
      type="button"
      className={clsx(
        "font-bold px-4 py-4 flex gap-2 items-center bg-white hover:outline-solid hover:outline-gray-700 hover:bg-white/15 hover:text-white transition-all duration-300 rounded-xl lg:rounded-lg",
        className
      )}
    >
      Join us Now <ArrowUpRight />
    </button>
  );
};

export default CallCTA;
