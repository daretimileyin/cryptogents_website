import { ArrowUpRight } from "lucide-react";
import clsx from "clsx"; // or use "classnames"

interface CallCTAProps {
  className?: string;
}

const CallCTA = ({ className }: CallCTAProps) => {
  return (
    <a href="https://t.me/CryptoGentsFree_Bot" target="_blank"
      type="button"
      className={clsx(
        "group w-fit font-bold px-4 py-4 flex gap-2 items-center bg-white hover:outline-solid hover:opacity-40 hover:bg-white/15 hover:text-white transition-all duration-500 rounded-xl lg:rounded-lg",
        className
      )}
    >
      Join us Now <ArrowUpRight className="group-hover:transform group-hover:rotate-45 duration-300 ease-in-out" />
    </a>
  );
};

export default CallCTA;
