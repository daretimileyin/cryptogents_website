interface DescHeaderProps{
    header: string;
    paragraph?: string;
}

const DescHeader = ({header , paragraph}: DescHeaderProps) => {
  return (
    <div className="w-full text-white text-center space-y-4">
        <h1 className="lg:w-[85%] mx-auto text-[28px] tracking-tighter leading-tight lg:text-5xl font-medium">{header}</h1>
        <p className="lg:w-[70%] mx-auto text-[1.15rem] lg:text-lg">{paragraph}</p>
    </div>
  )
}

export default DescHeader