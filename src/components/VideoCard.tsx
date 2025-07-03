
const VideoCard = ({ content } : any) => {
  return (
    <div className="min-w-[100%] w-full lg:min-w-[30%] border border-gray-500 rounded-2xl overflow-hidden">
        <div className="w-full h-[450px]">
            <video className="w-full h-full object-cover" src={content.video_url} poster={content.poster_url} controls playsInline preload="metadata"></video>
        </div>
        <div className="p-8 space-y-2">
            <p className="text-[1.9rem] font-medium text-white">"${content.quote}"</p>
            <p className="text-gray-500 text-2xl">{content.name}</p>
        </div>
    </div>
  )
}

export default VideoCard