import { useRef } from "react"
import { TopTrainingContent } from "../const/content"
import DescHeader from "./DescHeader"
import HoverGlow from "./HoverGlow"
import TopTrainingCard from "./TopTrainingCard"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const CommunityCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const scrollAmount = container.offsetWidth * 0.8;

        container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
        });
    };

    return (
        <div id="community" className="py-12 space-y-8">
              <HoverGlow label="The Community"/>
              <DescHeader
                header = "The process that turns average crypto investors into top 1% traders."
                paragraph="This isn't just a community. This is full-scale immersion into becoming an elite crypto trader and mastering the art of digital asset investing."
              />

              <div className="relative">
                {/* Fade out edges */}
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-black to-transparent blur-md z-10" />
                <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-black to-transparent blur-md z-10" />

                {/* Prev Button */}
                <button
                onClick={() => scroll("left")}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-2"
                >
                <ChevronLeft size={32} />
                </button>

                {/* Next Button */}
                <button
                onClick={() => scroll("right")}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 hover:bg-opacity-80 text-white rounded-full p-2"
                >
                <ChevronRight size={32} />
                </button>

                {/* Scrollable Video Cards */}
                <div ref={carouselRef} className="py-8 overflow-x-scroll flex flex-nowrap gap-8 scrollbar-custom">
                    {TopTrainingContent.map((content, index)=>(
                    <TopTrainingCard key={index} content={content}/>
                    ))}
                </div>
              </div>

          </div>

    )
}