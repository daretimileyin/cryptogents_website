interface DescHeaderProps{
    header: string;
    paragraph: string;
}

const DescHeader = ({header , paragraph}: DescHeaderProps) => {
  return (
    <div className="w-full text-white text-center space-y-4">
        <h1 className="text-3xl lg:text-5xl font-bold">{header}</h1>
        <p className="lg:w-[50%] mx-auto lg:text-lg">{paragraph}</p>
    </div>
  )
}

export default DescHeader