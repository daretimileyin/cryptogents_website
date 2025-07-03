interface TopTrainingCardProps{
    content: any
}

const TopTrainingCard = ({content} :TopTrainingCardProps) => {
  return (
    <div className="w-2/5 shrink-0 rounded-2xl border border-gray-400 overflow-hidden">
        <div>
            <img 
                srcSet={content.srcSet}
                src={content.src}
            />
        </div>
        <div className="p-6 space-y-2">
            <div className="p-[2px] w-fit bg-gradient-to-b from-[rgba(125,203,255,0.5)] to-[rgba(125,203,255,0)] grayscale-[0.75] rounded-[72px] opacity-100">
            <div className="bg-black rounded-[72px] text-white w-fit text-center px-8 py-1">{content.tag}</div>
            </div>
            <div className="space-y-4">
            <h5 className="text-white text-3xl font-semibold">{content.header}</h5>
            <p className="text-gray-400 text-lg">{content.para}</p>
            </div>
        </div>
    </div>
  )
}

export default TopTrainingCard