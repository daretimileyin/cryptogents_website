interface CoachCardProps{
    content: any;
    safeHTML: string;
    isLast: boolean;
    isOdd: boolean;
}

const CoachCard = ({content , safeHTML, isLast, isOdd}: CoachCardProps) => {
  return (
    <div
        className={`relative rounded-2xl bg-black border border-gray-400 overflow-hidden ${
            isLast && isOdd ? 'lg:col-span-2 lg:mx-auto lg:w-1/2' : ''
        }`}
    >
        <div>
            <img srcSet={content.srcSet} src={content.src} />
        </div>
        <div className="pt-4">
            <h5 className="text-white text-center text-2xl lg:text-3xl font-semibold">
            {content.coach}
            </h5>
        </div>
        <div className="p-6 space-y-2">
            <div className="flex flex-wrap items-center justify-center gap-2">
            {content.keywords.map((item: string, index: number) => {
                const isEven = index % 2 === 0;
                const delay = `${(index % 3) * 0.5}s`; // Staggered delay

                return (
                    <div
                    key={index}
                    className={`p-[2px] w-fit rounded-[72px] opacity-100 ${
                        isEven ? 'purple-custom-gradient animate-rotate-border-cw' : 'green-custom-gradient animate-rotate-border-ccw'
                    }`}
                    style={{ animationDelay: delay }}
                    >
                    <div className="border border-neutral-800 bg-neutral-900 rounded-[72px] text-white w-fit text-center px-4 py-1">
                        {item}
                    </div>
                    </div>
                );
            })}
            </div>
            <div className="py-2 space-y-4">
            <p 
                className="text-gray-400 text-center text-lg"
                dangerouslySetInnerHTML={{ __html: safeHTML }}
            />
            </div>
        </div>
    </div>
  )
}

export default CoachCard