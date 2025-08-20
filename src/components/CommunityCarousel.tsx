import { useRef, useState, useEffect } from "react";
import { ResultContent, TopTrainingContent } from "../const/content";
import DescHeader from "./DescHeader";
import HoverGlow from "./HoverGlow";
import {ResultCard, TopTrainingCard} from "./TopTrainingCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CommunityCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector("div");
    if (!card) return;

    const cardWidth = (card as HTMLElement).offsetWidth + 24; // 32 = gap-8
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Update buttons on scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div id="community" className="py-10 space-y-6">
      <HoverGlow label="The Community" />
      <DescHeader
        header="The process that turns average crypto investors into top 1% traders."
        paragraph="This isn't just a community. This is full-scale immersion into becoming an elite crypto trader and mastering the art of digital asset investing."
      />

      <div className="relative">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-black to-transparent blur-sm z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-black to-transparent blur-sm z-10" />

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3"
          >
            <ChevronRight size={36} />
          </button>
        )}

        {/* Carousel Cards */}
        <div
          ref={carouselRef}
          className="py-8 overflow-x-scroll flex flex-nowrap gap-6 scrollbar-custom scroll-smooth min-h-[420px]"
        >
          {TopTrainingContent.map((content, index) => (
            <TopTrainingCard key={index} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};




export  const ResultCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const el = carouselRef.current;
    if (!el) return;

    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
  };

  const scroll = (direction: "left" | "right") => {
    const el = carouselRef.current;
    if (!el) return;

    const card = el.querySelector("div");
    if (!card) return;

    const cardWidth = (card as HTMLElement).offsetWidth + 24; // 32 = gap-8
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  // Update buttons on scroll
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;

    updateScrollButtons();
    el.addEventListener("scroll", updateScrollButtons);
    return () => el.removeEventListener("scroll", updateScrollButtons);
  }, []);

  return (
    <div id="result-section" className="py-10 space-y-6">
      <HoverGlow label="The Results" />
      <DescHeader
        header="Real Crypto Trading Results That Show the Gains Our Traders Achieve"
        // paragraph="This isn't just a community. This is full-scale immersion into becoming an elite crypto trader and mastering the art of digital asset investing."
      />

      <div className="relative">
        {/* Fade Edges */}
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-10 bg-gradient-to-r from-black to-transparent blur-sm z-10" />
        <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-10 bg-gradient-to-l from-black to-transparent blur-sm z-10" />

        {/* Left Arrow */}
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3"
          >
            <ChevronLeft size={36} />
          </button>
        )}

        {/* Right Arrow */}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-3"
          >
            <ChevronRight size={36} />
          </button>
        )}

        {/* Carousel Cards */}
        <div
          ref={carouselRef}
          className="py-8 overflow-x-scroll flex flex-nowrap gap-6 scrollbar-custom scroll-smooth min-h-[300px]"
        >
          {ResultContent.map((content, index) => (
            <ResultCard key={index} content={content} />
          ))}
        </div>
      </div>
    </div>
  );
};