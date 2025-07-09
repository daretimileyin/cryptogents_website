import { useRef } from "react";
import HoverGlow from "./HoverGlow";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { videoContent } from "../const/content";
import VideoCard from "./VideoCard";

export const VideoCarousel = () => {
    const carouselRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (!carouselRef.current) return;
        const container = carouselRef.current;
        const card = container.querySelector('div'); // the first card
        if (!card) return;

        const cardWidth = (card as HTMLElement).offsetWidth + 8; // 32px = 2 * 4 (gap-2)
        container.scrollBy({
            left: direction === "left" ? -cardWidth : cardWidth,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative py-12 space-y-8">
            <HoverGlow label="Student Testimonials" />

            <div className="w-full text-white text-center space-y-4">
                <h1 className="text-[2rem] leading-tight lg:text-5xl font-medium">
                Hear it directly from our students
                </h1>
                <p className="lg:w-[50%] mx-auto text-[1.15rem] lg:text-lg">
                The best way to judge any program? See the results it creates.
                Here’s what happened when real sales reps applied our process.
                </p>
            </div>

            {/* Carousel Container with Controller */}
            <div className="relative">
                {/* Fade out edges */}
                <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-12 bg-linear-to-r from-black to-transparent blur-md z-10" />
                <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-12 bg-linear-to-l from-black to-transparent blur-md z-10" />

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
                <div
                    ref={carouselRef}
                    className="flex overflow-x-auto scroll-smooth no-scrollbar gap-4 snap-x snap-mandatory"
                >
                    {videoContent.map((content, index) => (
                        <VideoCard key={index} content={content} />
                    ))}
                </div>

            </div>
        </div>
    )
}