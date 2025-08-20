import { ArrowUpRight } from "lucide-react";
import clsx from "clsx"; // or use "classnames"

interface CallCTAProps {
  className?: string;
}

interface ResultBtnProps extends CallCTAProps {
  Link?: string;
  Text?: string; // Optional text prop, if needed
  abURL?: boolean; // Optional URL prop, if needed
}

export const CallCTA = ({ className }: CallCTAProps) => {
  return (
    <a
      href="https://t.me/CryptoGentsFree_Bot"
      target="_blank"
      type="button"
      className={clsx(
        "group w-fit font-bold px-4 py-4 flex gap-2 items-center bg-white hover:outline-solid hover:opacity-40 hover:bg-white/15 hover:text-white transition-all duration-500 rounded-xl lg:rounded-lg",
        className
      )}
    >
      Join us Now{" "}
      <ArrowUpRight className="group-hover:transform group-hover:rotate-45 duration-300 ease-in-out" />
    </a>
  );
};


export const ResultBtn = ({ className, Link, Text, abURL }: ResultBtnProps) => {
  if (!Link) return;
  if (!abURL){
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      const section = document.querySelector(Link); // Link should be "#id"
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    

  return (
    <button
      onClick={handleClick || Link }
      type="button"
      className={clsx(
        "group w-fit font-bold px-4 py-4 flex gap-2 items-center bg-white hover:outline-solid hover:opacity-40 hover:bg-white/15 hover:text-white transition-all duration-500 rounded-xl lg:rounded-lg",
        className
      )}
    >
      {Text}{" "}
      <ArrowUpRight className="group-hover:transform group-hover:rotate-45 duration-300 ease-in-out" />
    </button>
  );
}else{
    return (
      <a
        href={Link}
        target="_blank"
        type="button"
        className={clsx(
          "group w-fit font-bold px-4 py-4 flex gap-2 items-center bg-white hover:outline-solid hover:opacity-40 hover:bg-white/15 hover:text-white transition-all duration-500 rounded-xl lg:rounded-lg",
          className
        )}
      >
        {Text}{" "}
        <ArrowUpRight className="group-hover:transform group-hover:rotate-45 duration-300 ease-in-out" />
      </a>
    );
}
};

